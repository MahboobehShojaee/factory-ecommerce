/**
 * Professional Text-Based PDF Generator
 * Creates industrial-grade PDFs with selectable text and structured layout
 */

import jsPDF from 'jspdf';

export class ProfessionalPDFGenerator {
  constructor(categoryConfig, lang = 'en') {
    this.categoryConfig = categoryConfig;
    this.lang = lang;
    this.pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Page dimensions
    this.pageWidth = 210; // A4 width in mm
    this.pageHeight = 297; // A4 height in mm
    this.margin = 20;
    this.contentWidth = this.pageWidth - (this.margin * 2);
    this.currentY = this.margin;
    
    // Fonts and styling
    this.setFontSizes();
    this.setColors();
  }

  setFontSizes() {
    this.fontSizes = {
      title: 20,
      subtitle: 16,
      header: 14,
      subheader: 12,
      body: 10,
      small: 8
    };
  }

  setColors() {
    this.colors = {
      primary: [37, 65, 81],     // #254151
      accent: [212, 175, 55],    // #D4AF37
      text: [55, 65, 81],        // #374151
      light: [107, 114, 128],    // #6B7280
      border: [229, 231, 235]    // #E5E7EB
    };
  }

  /**
   * Generate complete PDF document
   */
  generatePDF() {
    this.addHeader();
    this.addCategoryDescription();
    this.addTechnicalSpecifications();
    this.addApplications();
    this.addFeatures();
    this.addFooter();
    
    return this.pdf;
  }

  /**
   * Add document header
   */
  addHeader() {
    // Company header
    this.setTextColor(...this.colors.primary);
    this.setFontSize(this.fontSizes.title);
    this.setFont('helvetica', 'bold');
    this.text('Setareh Kerman Wire & Cable', this.margin, this.currentY);
    
    this.currentY += 8;
    
    // Company subtitle
    this.setTextColor(...this.colors.light);
    this.setFontSize(this.fontSizes.small);
    this.setFont('helvetica', 'normal');
    this.text(
      this.lang === 'fa' ? 'کارخانه سیم و کابل ستاره کرمان' : 'Wire & Cable Factory',
      this.margin,
      this.currentY
    );
    
    this.currentY += 15;
    
    // Category title with accent background
    this.addAccentBox(
      `${this.categoryConfig.titles[this.lang]} ${this.lang === 'fa' ? 'مشخصات فنی' : 'Technical Specifications'}`,
      this.fontSizes.subtitle
    );
    
    this.currentY += 20;
  }

  /**
   * Add accent box for emphasis
   */
  addAccentBox(text, fontSize) {
    const boxHeight = 15;
    const boxPadding = 8;
    
    // Draw background
    this.setFillColor(...this.colors.accent);
    this.rect(this.margin, this.currentY - boxHeight + boxPadding, this.contentWidth, boxHeight, 'F');
    
    // Add text
    this.setTextColor(255, 255, 255);
    this.setFontSize(fontSize);
    this.setFont('helvetica', 'bold');
    this.text(text, this.margin + boxPadding, this.currentY);
    
    this.currentY += boxHeight + 10;
  }

  /**
   * Add category description
   */
  addCategoryDescription() {
    this.addSectionHeader(
      this.lang === 'fa' ? 'توضیحات دسته' : 'Category Description'
    );
    
    this.setTextColor(...this.colors.text);
    this.setFontSize(this.fontSizes.body);
    this.setFont('helvetica', 'normal');
    
    const description = this.categoryConfig.descriptions[this.lang];
    const lines = this.pdf.splitTextToSize(description, this.contentWidth);
    
    lines.forEach(line => {
      this.text(line, this.margin, this.currentY);
      this.currentY += 6;
    });
    
    this.currentY += 15;
  }

  /**
   * Add section header
   */
  addSectionHeader(title) {
    this.setTextColor(...this.colors.primary);
    this.setFontSize(this.fontSizes.header);
    this.setFont('helvetica', 'bold');
    this.text(title, this.margin, this.currentY);
    
    // Add underline
    this.currentY += 2;
    this.setDrawColor(...this.colors.border);
    this.line(this.margin, this.currentY, this.margin + this.contentWidth, this.currentY);
    
    this.currentY += 10;
  }

  /**
   * Add technical specifications table
   */
  addTechnicalSpecifications() {
    this.addSectionHeader(
      this.lang === 'fa' ? 'مشخصات فنی' : 'Technical Specifications'
    );
    
    // Table headers
    const headers = [
      this.lang === 'fa' ? 'پارامتر' : 'Parameter',
      this.lang === 'fa' ? 'مقدار' : 'Specification',
      this.lang === 'fa' ? 'توضیحات' : 'Description'
    ];
    
    const colWidths = [40, 60, 60];
    
    // Draw table
    this.drawTable(headers, colWidths, this.getSpecsTableData());
    
    this.currentY += 20;
  }

  /**
   * Get specifications table data
   */
  getSpecsTableData() {
    const labels = {
      conductor: this.lang === 'fa' ? 'هادی' : 'Conductor',
      insulation: this.lang === 'fa' ? 'عایق' : 'Insulation',
      voltageRating: this.lang === 'fa' ? 'ولتاژ نامی' : 'Voltage Rating',
      temperatureRange: this.lang === 'fa' ? 'محدوده دما' : 'Temperature Range',
      standard: this.lang === 'fa' ? 'استاندارد' : 'Standard',
      crossSection: this.lang === 'fa' ? 'سطح مقطع' : 'Cross Section',
      coreCount: this.lang === 'fa' ? 'تعداد هسته' : 'Core Count',
      shielding: this.lang === 'fa' ? 'شیلدینگ' : 'Shielding',
      armor: this.lang === 'fa' ? 'زره' : 'Armor'
    };
    
    return Object.entries(this.categoryConfig.specs).map(([key, spec]) => ({
      parameter: labels[key] || key,
      specification: spec.value,
      description: spec.description[this.lang]
    }));
  }

  /**
   * Draw table
   */
  drawTable(headers, colWidths, data) {
    const rowHeight = 8;
    let currentY = this.currentY;
    
    // Draw headers
    this.setFillColor(...this.colors.border);
    this.setTextColor(...this.colors.primary);
    this.setFontSize(this.fontSizes.small);
    this.setFont('helvetica', 'bold');
    
    headers.forEach((header, i) => {
      const x = this.margin + colWidths.slice(0, i).reduce((a, b) => a + b, 0);
      this.rect(x, currentY, colWidths[i], rowHeight, 'F');
      this.text(header, x + 2, currentY + rowHeight - 2);
    });
    
    currentY += rowHeight;
    
    // Draw data rows
    this.setTextColor(...this.colors.text);
    this.setFontSize(this.fontSizes.small);
    this.setFont('helvetica', 'normal');
    
    data.forEach((row, rowIndex) => {
      // Alternate row colors
      if (rowIndex % 2 === 0) {
        this.setFillColor(248, 249, 250);
      } else {
        this.setFillColor(255, 255, 255);
      }
      
      Object.values(row).forEach((cell, i) => {
        const x = this.margin + colWidths.slice(0, i).reduce((a, b) => a + b, 0);
        this.rect(x, currentY, colWidths[i], rowHeight, 'F');
        
        // Wrap text if needed
        const lines = this.pdf.splitTextToSize(cell, colWidths[i] - 4);
        lines.forEach((line, lineIndex) => {
          if (currentY + lineIndex * 4 < this.pageHeight - this.margin) {
            this.text(line, x + 2, currentY + rowHeight - 4 + (lineIndex * 4));
          }
        });
      });
      
      currentY += rowHeight;
      
      // Check if we need a new page
      if (currentY > this.pageHeight - this.margin) {
        this.pdf.addPage();
        currentY = this.margin;
      }
    });
    
    this.currentY = currentY;
  }

  /**
   * Add applications section
   */
  addApplications() {
    this.addSectionHeader(
      this.lang === 'fa' ? 'کاربردها' : 'Applications'
    );
    
    this.setTextColor(...this.colors.text);
    this.setFontSize(this.fontSizes.body);
    this.setFont('helvetica', 'normal');
    
    this.categoryConfig.applications.forEach((app, index) => {
      const bullet = '•';
      const text = `${bullet} ${app}`;
      const lines = this.pdf.splitTextToSize(text, this.contentWidth);
      
      lines.forEach(line => {
        this.text(line, this.margin, this.currentY);
        this.currentY += 6;
      });
      
      this.currentY += 2;
    });
    
    this.currentY += 15;
  }

  /**
   * Add features section
   */
  addFeatures() {
    this.addSectionHeader(
      this.lang === 'fa' ? 'ویژگی‌ها' : 'Key Features'
    );
    
    this.setTextColor(...this.colors.text);
    this.setFontSize(this.fontSizes.body);
    this.setFont('helvetica', 'normal');
    
    this.categoryConfig.features.forEach((feature, index) => {
      const bullet = '▸';
      const text = `${bullet} ${feature}`;
      const lines = this.pdf.splitTextToSize(text, this.contentWidth);
      
      lines.forEach(line => {
        this.text(line, this.margin, this.currentY);
        this.currentY += 6;
      });
      
      this.currentY += 2;
    });
    
    this.currentY += 20;
  }

  /**
   * Add footer
   */
  addFooter() {
    // Position footer at bottom of page
    const footerY = this.pageHeight - 30;
    
    // Draw line above footer
    this.setDrawColor(...this.colors.border);
    this.line(this.margin, footerY, this.margin + this.contentWidth, footerY);
    
    // Footer content
    this.setTextColor(...this.colors.light);
    this.setFontSize(this.fontSizes.small);
    this.setFont('helvetica', 'normal');
    
    // Left side - company info
    this.text('© 2024 Setareh Kerman Wire & Cable', this.margin, footerY + 10);
    this.text('www.setarehkerman.com', this.margin, footerY + 15);
    this.text('info.setarehkerman@gmail.com', this.margin, footerY + 20);
    
    // Right side - contact info
    const dateText = this.lang === 'fa' ? 'تاریخ تولید:' : 'Generated on:';
    const contactText = this.lang === 'fa' ? 'تماس:' : 'Contact:';
    const addressText = this.lang === 'fa' ? 'آدرس:' : 'Address:';
    
    this.text(`${dateText} ${new Date().toLocaleDateString()}`, this.margin + 100, footerY + 10);
    this.text(`${contactText} +98 34 1234 5678`, this.margin + 100, footerY + 15);
    this.text(`${addressText} Kerman, Iran`, this.margin + 100, footerY + 20);
  }

  /**
   * Helper methods for text styling
   */
  setFontColor(r, g, b) {
    this.pdf.setTextColor(r, g, b);
  }

  setFontSize(size) {
    this.pdf.setFontSize(size);
  }

  setFont(font, style) {
    this.pdf.setFont(font, style);
  }

  setFillColor(r, g, b) {
    this.pdf.setFillColor(r, g, b);
  }

  setDrawColor(r, g, b) {
    this.pdf.setDrawColor(r, g, b);
  }

  text(text, x, y) {
    this.pdf.text(text, x, y);
  }

  rect(x, y, width, height, style) {
    this.pdf.rect(x, y, width, height, style);
  }

  line(x1, y1, x2, y2) {
    this.pdf.line(x1, y1, x2, y2);
  }
}

/**
 * Generate professional PDF for category
 */
export function generateProfessionalPDF(categoryConfig, lang = 'en') {
  const generator = new ProfessionalPDFGenerator(categoryConfig, lang);
  return generator.generatePDF();
}
