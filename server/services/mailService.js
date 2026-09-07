import nodemailer from "nodemailer";
import { env } from "../config/env.js";

let transporter;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getTransporter() {
  if (transporter) return transporter;

  if (!env.smtp.host || !env.smtp.user || !env.smtp.pass) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.secure,
    auth: {
      user: env.smtp.user,
      pass: env.smtp.pass,
    },
  });

  return transporter;
}

function inquiryTypeLabel(inquiryType, lang) {
  if (inquiryType === "quote") {
    return lang === "fa" ? "درخواست قیمت / استعلام" : "Price Quote Request";
  }
  return lang === "fa" ? "استعلام عمومی / مشاوره" : "General Inquiry / Consultation";
}

function urgencyLabel(urgency, lang) {
  const labels = {
    normal: lang === "fa" ? "عادی (۵-۷ روز)" : "Normal (5-7 days)",
    urgent: lang === "fa" ? "فوری (۲-۳ روز)" : "Urgent (2-3 days)",
    critical: lang === "fa" ? "بحرانی (۲۴ ساعت)" : "Critical (24 hours)",
  };
  return labels[urgency] || urgency;
}

function buildEmailContent(data) {
  const typeLabel = inquiryTypeLabel(data.inquiryType, data.lang);
  const subjectPrefix =
    data.inquiryType === "quote" ? "[Quote Request]" : "[General Inquiry]";
  const subject = `${subjectPrefix} Setareh Kerman — ${data.company}`;

  const rows = [
    ["Inquiry Type / نوع درخواست", typeLabel],
    ["Company / شرکت", data.company],
    ["Contact Person / نام", data.person],
    ["Email / ایمیل", data.email],
    ["Phone / تلفن", data.phone],
    ["Project Type / نوع پروژه", data.projectType],
    ["Cable Families / خانواده کابل", data.selectedCables.join(", ")],
  ];

  if (data.inquiryType === "quote") {
    rows.push(["Quantity / مقدار", data.quantity]);
    rows.push(["Urgency / اولویت", urgencyLabel(data.urgency, data.lang)]);
  }

  if (data.details) {
    rows.push(["Details / جزئیات", data.details]);
  }

  rows.push(["Language / زبان", data.lang === "fa" ? "Persian" : "English"]);
  rows.push(["Submitted At / زمان", new Date().toISOString()]);

  const textBody = rows.map(([label, value]) => `${label}:\n${value}`).join("\n\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const htmlBody = `
    <div style="font-family:Inter,Arial,sans-serif;color:#374151;max-width:640px;">
      <div style="background:#374151;color:#fff;padding:16px 20px;border-radius:12px 12px 0 0;">
        <h1 style="margin:0;font-size:18px;">Setareh Kerman — New Website Submission</h1>
        <p style="margin:8px 0 0;font-size:14px;color:#D4AF37;font-weight:bold;">${typeLabel}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${htmlRows}</table>
    </div>
  `;

  return { subject, textBody, htmlBody };
}

export async function sendContactEmail(data) {
  const mailer = getTransporter();

  if (!mailer) {
    throw new Error("Email service is not configured on the server");
  }

  const { subject, textBody, htmlBody } = buildEmailContent(data);

  await mailer.sendMail({
    from: env.smtp.from,
    to: env.contactEmailTo,
    replyTo: data.email,
    subject,
    text: textBody,
    html: htmlBody,
  });
}

function ratingStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function buildSurveyEmailContent(data) {
  const isFa = data.lang === "fa";
  const subject = isFa
    ? "نظرسنجی رضایت مشتری جدید — ستاره کرمان"
    : "New Customer Satisfaction Survey — Setareh Kerman";

  const rows = [
    ["Name / نام", data.name],
    ["Company / شرکت", data.company || (isFa ? "—" : "—")],
    ["Product / Service Used / محصول یا خدمت استفاده شده", data.productService || (isFa ? "—" : "—")],
    ["Satisfaction Rating / امتیاز رضایت", `${data.rating} / 5 ${ratingStars(data.rating)}`],
    ["Comments / نظرات", data.comments],
    ["Publish Permission / مجوز انتشار", data.canPublish ? (isFa ? "بله" : "Yes") : (isFa ? "خیر" : "No")],
    ["Language / زبان", isFa ? "Persian" : "English"],
    ["Submitted At / زمان", new Date().toISOString()],
  ];

  const textBody = rows.map(([label, value]) => `${label}:\n${value}`).join("\n\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const htmlBody = `
    <div style="font-family:Inter,Arial,sans-serif;color:#374151;max-width:640px;">
      <div style="background:#374151;color:#fff;padding:16px 20px;border-radius:12px 12px 0 0;">
        <h1 style="margin:0;font-size:18px;">${isFa ? "نظرسنجی رضایت مشتری" : "Customer Satisfaction Survey"}</h1>
        <p style="margin:8px 0 0;font-size:14px;color:#D4AF37;font-weight:bold;">Setareh Kerman</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${htmlRows}</table>
    </div>
  `;

  return { subject, textBody, htmlBody };
}

export async function sendSurveyEmail(data) {
  const mailer = getTransporter();

  if (!mailer) {
    throw new Error("Email service is not configured on the server");
  }

  const { subject, textBody, htmlBody } = buildSurveyEmailContent(data);

  await mailer.sendMail({
    from: env.smtp.from,
    to: env.contactEmailTo,
    subject,
    text: textBody,
    html: htmlBody,
  });
}

export function isMailConfigured() {
  return Boolean(env.smtp.host && env.smtp.user && env.smtp.pass && env.contactEmailTo);
}

export async function verifyMailConfiguration() {
  const mailer = getTransporter();

  if (!mailer) {
    throw new Error("Email service is not configured");
  }

  await mailer.verify();
}
