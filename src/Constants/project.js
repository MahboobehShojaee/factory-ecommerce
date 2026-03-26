// نمونه آبجکت برای پروژه‌ها
const projects = [
  {
    id: 1,
    title: isRTL ? "نیروگاه سیکل ترکیبی" : "Combined Cycle Power Plant",
    client: isRTL ? "وزارت نیرو" : "Ministry of Energy",
    image: "/projects/project1.jpg", // عکس‌های واقعی پروژه را اینجا بگذار
    category: isRTL ? "زیرساختی" : "Infrastructure",
  },
  // ... موارد دیگر
];

export default projects;
