import { jsPDF } from 'jspdf';
import { PROFILE_INFO, EXPERIENCES } from '../data/portfolioData';

/**
 * Generates a pristine, vector-rendered 1-Page British Dental CV PDF.
 * Uses native jsPDF vector instructions with zero DOM dependencies,
 * completely avoiding browser CSS/canvas bugs and mathematically calibrated to fill
 * the entire A4 page (595.28 x 841.89 pt) evenly from top to bottom with zero awkward white space.
 */
export function createDentalCVPdf(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4', // 595.28 x 841.89 pt
  });

  const marginX = 36;
  const contentWidth = 523.28;
  let y = 32;

  // Teal top accent banner
  doc.setDrawColor(15, 118, 110);
  doc.setLineWidth(3);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 24;

  // Candidate Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('Madhu Bala Sermarajan, BDS', 297.5, y, { align: 'center' });
  y += 18;

  // GDC Registration Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 118, 110); // emerald-700
  doc.text('GDC Registered Dental Hygienist · Registration No. 316565', 297.5, y, { align: 'center' });
  y += 15;

  // Contact Details
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text(
    `${PROFILE_INFO.phone}   |   ${PROFILE_INFO.email}   |   ${PROFILE_INFO.location}`,
    297.5,
    y,
    { align: 'center' }
  );
  y += 14;

  // LinkedIn Link
  doc.setFontSize(9);
  doc.setTextColor(15, 118, 110);
  doc.textWithLink('linkedin.com/in/madhu-bala-sermarajan', 297.5, y, {
    url: PROFILE_INFO.linkedin,
    align: 'center',
  });
  y += 11;

  // Header bottom border
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(1);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 16;

  const addSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(6, 95, 70); // emerald-800
    doc.text(title.toUpperCase(), marginX, y);
    y += 4;
    doc.setDrawColor(16, 185, 129); // emerald-500
    doc.setLineWidth(1);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += 12;
  };

  // 1. PROFESSIONAL SUMMARY
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'GDC-registered Dental Hygienist with a Bachelor of Dental Surgery (BDS) foundation and active UK dental nursing practice in London. Combines comprehensive overseas surgical and periodontal clinical expertise with direct hands-on familiarity in UK compliance standards, chairside workflow optimization, BPE periodontal charting, and Pearl Dental Software. Adept at delivering patient-centred, evidence-based preventive oral care, periodontal maintenance, and compassionate chairside management for dental-phobic patients.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, marginX, y);
  y += summaryLines.length * 13 + 12;

  // 2. KEY CLINICAL & PROFESSIONAL COMPETENCIES
  addSectionHeader('Key Clinical & Professional Competencies');
  const comps = [
    {
      label: '• Clinical Periodontology & Hygiene: ',
      text: 'Ultrasonic and hand scaling, supra/subgingival debridement, periodontal charting (BPE), prophylaxis, stain removal, topical fluoride application, and precision dental impression taking.',
    },
    {
      label: '• Practice Compliance & HTM 01-05: ',
      text: 'Rigorous cross-infection control, autoclave operation, instrument decontamination logging, single-use protocol enforcement, Safeguarding (Level 2), and Basic Life Support / Medical Emergencies.',
    },
    {
      label: '• Clinical Software & Radiography: ',
      text: 'Proficient with Pearl Dental Software for scheduling, digital clinical notes, and periodontal scoring; competent in intraoral periapical (IOPA) and bitewing radiographic interpretation.',
    },
    {
      label: '• Patient Care & Communication: ',
      text: 'Tailored oral hygiene instruction, dietary counseling, gentle chairside anxiety management; Fluent in English (IELTS Academic Band 7.0) and Tamil (Native speaker).',
    },
  ];

  comps.forEach((c) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(15, 23, 42);
    doc.text(c.label, marginX, y);
    const labelWidth = doc.getTextWidth(c.label);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const textLines = doc.splitTextToSize(c.text, contentWidth - labelWidth);
    doc.text(textLines, marginX + labelWidth, y);
    y += textLines.length * 11.8 + 4;
  });
  y += 8;

  // 3. PROFESSIONAL CLINICAL EXPERIENCE
  addSectionHeader('Professional Clinical Experience');
  const exps = [
    {
      role: 'Dental Nurse',
      org: 'The Grange Dental, London',
      period: 'Aug 2026 – Present',
      bullets: [
        'Prepare clinical surgeries, sterilize dental instruments, and assist chairside across restorative, periodontal, and surgical procedures.',
        'Execute rigorous instrument decontamination and sterilization adhering strictly to HTM 01-05 guidelines and practice safety protocols.',
        'Take dental impressions, mix restorative materials accurately, and deliver gentle chairside reassurance to nervous and dental-phobic patients.',
        'Maintain accurate electronic patient records, update medical histories, record BPE periodontal scores, and manage appointments in Pearl Dental Software.',
      ],
    },
    {
      role: 'Dental Surgeon',
      org: 'Siroraj Hospital, Thoothukudi',
      period: 'Nov 2023 – Nov 2024',
      bullets: [
        'Provided comprehensive clinical dental care including detailed oral health examinations, diagnostic radiography, and tailored treatment plans.',
        'Performed routine and complex restorative dentistry, endodontic treatments, atraumatic extractions, and comprehensive periodontal scaling and root debridement.',
        'Managed 20–25 patients daily in a fast-paced clinical setting, delivering empathetic preventive education and personalized oral hygiene home-care regimens.',
      ],
    },
    {
      role: 'Senior Intern · Dental Surgery',
      org: 'Thoothukudi Medical College & Hospital',
      period: 'Jan 2023 – Jun 2023',
      bullets: [
        'Conducted supra- and sub-gingival scaling, root surface debridement, and periodontal maintenance across community and hospital outpatient clinics.',
        'Assisted consultant oral surgeons in complex maxillofacial and oral surgery cases, root canal therapies, and emergency dental triaging.',
        'Delivered public health dental education workshops and preventive screening drives in local schools and community outreach programs.',
      ],
    },
    {
      role: 'Dental Assistant',
      org: 'Grace Dental, Chennai',
      period: 'Mar 2021 – Mar 2022',
      bullets: [
        'Assisted chairside clinicians across high-volume private practice, streamlining surgery preparation, patient turnover, and appointment punctuality.',
        'Supported clinical hygiene sessions, periodontal maintenance appointments, topical fluoride applications, and patient recall programs.',
        'Enforced strict autoclaving cycles, ultrasonic bath decontamination procedures, and comprehensive infection-control audits.',
      ],
    },
  ];

  exps.forEach((exp, idx) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.2);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, marginX, y);
    const roleWidth = doc.getTextWidth(exp.role);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`  |  ${exp.org}`, marginX + roleWidth, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(exp.period, marginX + contentWidth, y, { align: 'right' });
    y += 11.5;

    exp.bullets.forEach((b) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.6);
      doc.setTextColor(51, 65, 85);
      doc.text('•', marginX + 4, y);
      const bLines = doc.splitTextToSize(b, contentWidth - 16);
      doc.text(bLines, marginX + 13, y);
      y += bLines.length * 11.2 + 2;
    });
    if (idx < exps.length - 1) {
      y += 4.5;
    }
  });
  y += 8;

  // 4. EDUCATION & PROFESSIONAL CREDENTIALS
  addSectionHeader('Education & Professional Credentials');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Bachelor of Dental Surgery (BDS)', marginX, y);
  const bdsWidth = doc.getTextWidth('Bachelor of Dental Surgery (BDS)');

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(' — Chettinad Dental College & Research Institute, Dr. M.G.R. Medical University (2016 – 2022)', marginX + bdsWidth, y);
  y += 12.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.6);
  doc.setTextColor(15, 118, 110);
  doc.text('Registered Dental Hygienist (UK): ', marginX, y);
  const gdcLabelWidth = doc.getTextWidth('Registered Dental Hygienist (UK): ');
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('General Dental Council (GDC Reg No. 316565) — Active Registration', marginX + gdcLabelWidth, y);
  y += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.6);
  doc.setTextColor(51, 65, 85);
  doc.text(
    'Certifications: Basic Life Support (BLS, American Heart Association)  |  IELTS Academic (Overall Band: 7.0)  |  CPD Compliant',
    marginX,
    y
  );
  y += 18;

  // 5. OFFICIAL FOOTER
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.75);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 11;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(148, 163, 184);
  doc.text('Official Curriculum Vitae · General Dental Council (UK) Registered · Madhu Bala Sermarajan, BDS', marginX, y);
  doc.text('Page 1 of 1', marginX + contentWidth, y, { align: 'right' });

  return doc;
}

/**
 * Downloads the PDF directly to the user's filesystem as a genuine .pdf file.
 * Handles mobile devices, Safari, Chrome, and desktop gracefully.
 */
export function downloadCVPdf(filename = 'Madhu_Bala_Sermarajan_BDS_CV.pdf'): boolean {
  try {
    const doc = createDentalCVPdf();

    // Standard jsPDF save method
    doc.save(filename);

    // Fallback trigger via Blob URL to guarantee download on mobile browsers
    const blob = doc.output('blob');
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);

    return true;
  } catch (err) {
    console.error('Failed to download CV PDF:', err);
    return false;
  }
}

/**
 * Opens the single-page PDF directly in a new browser tab for immediate viewing or printing.
 */
export function openCVPdfInNewTab(): void {
  try {
    const doc = createDentalCVPdf();
    const blob = doc.output('blob');
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
    setTimeout(() => URL.revokeObjectURL(blobUrl), 30000);
  } catch (err) {
    console.error('Failed to open CV PDF:', err);
  }
}
