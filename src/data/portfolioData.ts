import { ExperienceItem, ClinicalCase, VideoItem, ArticleItem, ThemeConfig } from '../types';

export const THEMES: ThemeConfig[] = [
  {
    id: 'clinical-teal',
    name: 'Clinical Sage & Emerald',
    description: 'Fresh, balanced dental clinic aesthetic with soft mint undertones and deep forest accents',
    badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
    badgeBorder: '#059669',
    primaryColor: '#0f766e',
    isDark: false,
  },
  {
    id: 'ocean-blue',
    name: 'NHS & Private Slate',
    description: 'Crisp medical precision inspired by modern UK clinical practice and dental suites',
    badgeBg: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20',
    badgeBorder: '#0284c7',
    primaryColor: '#0369a1',
    isDark: false,
  },
  {
    id: 'warm-editorial',
    name: 'Editorial Warm Ivory',
    description: 'Subtle high-contrast editorial look with warm neutral backgrounds and deep espresso ink',
    badgeBg: 'bg-amber-500/10 text-amber-800 dark:text-amber-200 border-amber-500/20',
    badgeBorder: '#b45309',
    primaryColor: '#78350f',
    isDark: false,
  },
  {
    id: 'midnight-emerald',
    name: 'Midnight Clinical',
    description: 'Refined dark mode engineered for high-contrast viewing and clinical record clarity',
    badgeBg: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    badgeBorder: '#2dd4bf',
    primaryColor: '#0d9488',
    isDark: true,
  },
];

export const PROFILE_INFO = {
  name: 'Madhu Bala Sermarajan',
  suffix: 'BDS',
  role: 'GDC-Registered Dental Hygienist',
  secondaryRole: 'UK Dental Nurse & Dental Surgeon (Overseas)',
  gdcNumber: '316565',
  location: 'London SE1, United Kingdom',
  phone: '+44 7344 746518',
  email: 'madhuserma28@gmail.com',
  linkedin: 'https://www.linkedin.com/in/madhu-bala-sermarajan/',
  availability: 'Available Immediately',
  availabilityTypes: 'Full-time · Part-time · Locum',
  languages: ['English', 'Tamil'],
  summary:
    'GDC-registered Dental Hygienist with a BDS background and active UK dental nursing experience. Combining overseas clinical experience in periodontal care, preventive dentistry, and oral health education with up-to-date UK practice experience in surgery setups, BPE charting, Pearl Dental Software, and HTM 01-05 cross-infection control. Proven ability to deliver empathetic, safe, and efficient care across busy private and clinical settings in London.',
  stats: [
    { label: 'GDC Registration', value: '316565', sub: 'Dental Hygienist' },
    { label: 'Current Practice', value: 'The Grange Dental', sub: 'London, UK' },
    { label: 'Clinical Qualification', value: 'BDS Degree', sub: 'Dental Surgery' },
    { label: 'Educational Channel', value: '1.36K+ Subs', sub: 'Learn BDS With Me' },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'grange-dental',
    role: 'Dental Nurse',
    employer: 'The Grange Dental',
    location: 'London, United Kingdom',
    period: 'Aug 2026 – Present',
    type: 'UK Practice',
    isCurrent: true,
    description:
      'Active chairside clinical nursing across restorative and surgical dentistry in a high-standard London practice.',
    highlights: [
      'Prepare clinical surgeries, sterilize instruments, and assist chairside across restorative and surgical procedures, anticipating clinician needs to optimize patient workflow.',
      'Execute rigorous instrument decontamination, sterilization, and infection control procedures adhering strictly to HTM 01-05 standards and practice protocols.',
      'Take dental impressions, mix restorative and impression materials accurately, and provide gentle, reassuring chairside management to calm nervous and dental-phobic patients.',
      'Maintain accurate digital patient records, update medical histories, record BPE periodontal scores, and manage appointment scheduling utilizing Pearl Dental Software.',
    ],
    skillsApplied: ['HTM 01-05 Decontamination', 'Pearl Dental Software', 'BPE Charting', 'Nervous Patient Care', 'Restorative Chairside Assist'],
  },
  {
    id: 'siroraj-hospital',
    role: 'Dental Surgeon',
    employer: 'Siroraj Hospital',
    location: 'Thoothukudi, India',
    period: 'Nov 2023 – Nov 2024',
    type: 'Overseas Hospital',
    isCurrent: false,
    description:
      'Independent clinical practice providing comprehensive general dental care, preventive therapy, and conservative restorations.',
    highlights: [
      'Provided general dental care including oral health examinations, radiographic diagnosis, and tailored treatment planning for diverse patient demographics.',
      'Performed restorative and endodontic treatments, atraumatic extractions, and comprehensive periodontal scaling and polishing.',
      'Managed 20–25 patients daily in a busy clinical environment, explaining clinical options clearly and instilling preventive oral hygiene home-care regimens.',
      'Maintained meticulous digital patient histories and upheld gold-standard infection-control and instrument sterilization procedures.',
    ],
    skillsApplied: ['Comprehensive Diagnosis', 'Ultrasonic Scaling', 'Endodontics', 'Restorative Dentistry', 'Patient Communication'],
  },
  {
    id: 'thoothukudi-college',
    role: 'Senior Intern · Dental Surgery',
    employer: 'Thoothukudi Medical College & Hospital',
    location: 'Thoothukudi, India',
    period: 'Jan 2023 – Jun 2023',
    type: 'Internship',
    isCurrent: false,
    description:
      'Clinical rotations across Periodontics, Oral Surgery, Conservative Dentistry, and Community Preventive Programs.',
    highlights: [
      'Performed supra- and sub-gingival scaling and prophylaxis, supporting early intervention in periodontal disease and gingivitis.',
      'Assisted senior oral surgeons and clinicians in complex restorative procedures, root canal therapies, and surgical interventions.',
      'Interpreted intraoral periapical (IOPA) and panoramic radiographs to assist accurate diagnostic workflows.',
      'Delivered public oral health education workshops and preventive hygiene drives in school and hospital community settings.',
      'Supported emergency dental triaging and protocol management in line with hospital clinical directives.',
    ],
    skillsApplied: ['Periodontal Assessment', 'Radiographic Interpretation', 'Oral Prophylaxis', 'Community Education', 'Emergency Care'],
  },
  {
    id: 'grace-dental',
    role: 'Dental Assistant',
    employer: 'Grace Dental',
    location: 'Chennai, India',
    period: 'Mar 2021 – Mar 2022',
    type: 'Dental Assistant',
    isCurrent: false,
    description:
      'Supported clinical hygiene treatments, surgical readiness, and sterilization workflows in a high-volume multi-speciality clinic.',
    highlights: [
      'Assisted chairside clinicians across high-volume private practice, streamlining operational speed and appointment efficiency.',
      'Supported dental hygiene sessions, periodontal follow-up visits, and preventive fluoride applications.',
      'Ensured strict autoclaving, ultrasonic bath decontamination, and cross-contamination prevention protocols.',
      'Accurately documented clinical records, inventory tracking, and patient recalls.',
    ],
    skillsApplied: ['Sterilization Compliance', 'Preventive Care Support', 'Workflow Optimization', 'Patient Record Keeping'],
  },
];

export const SKILL_CATEGORIES = [
  {
    title: 'Clinical Hygiene & Periodontics',
    skills: [
      { name: 'Ultrasonic & Hand Scaling', note: 'Thorough supra & subgingival plaque and calculus debridement' },
      { name: 'Periodontal Screening (BPE)', note: 'Accurate 6-point pocket charting & bleeding indices' },
      { name: 'Plaque Control & Biofilm Management', note: 'Tailored oral hygiene education & home care advice' },
      { name: 'Polishing & Stain Removal', note: 'Air polishing and paste prophylaxis for aesthetic finish' },
      { name: 'Radiography Interpretation', note: 'IOPA, bitewings, and panoramic evaluation' },
      { name: 'Impression Taking & Material Prep', note: 'Alginate and silicone impressions with precise mixing' },
    ],
  },
  {
    title: 'UK Compliance & Systems',
    skills: [
      { name: 'HTM 01-05 Decontamination', note: 'Full compliance with autoclave, pouching, and log tracking' },
      { name: 'Pearl Dental Software', note: 'Digital clinical records, appointment books, and billing' },
      { name: 'GDC Standards for Dental Team', note: 'Strict adherence to patient confidentiality & ethics' },
      { name: 'Safeguarding (Level 2/3)', note: 'Protection of vulnerable children and adult patients' },
      { name: 'Cross-Infection Control', note: 'Sterile surgical zone management and personal protective wear' },
      { name: 'Basic Life Support (BLS)', note: 'Certified by American Heart Association' },
    ],
  },
  {
    title: 'Patient Communication & Languages',
    skills: [
      { name: 'English (Fluent / Academic 7.0)', note: 'Clear, articulate explanations for UK patients' },
      { name: 'Tamil (Native / Fluent)', note: 'Effective bilingual communication for diverse communities' },
      { name: 'Dental Phobia & Anxiety Care', note: 'Calm, empathetic chairside reassurance technique' },
      { name: 'Preventive Patient Recalls', note: 'Motivating long-term periodontal maintenance compliance' },
    ],
  },
];

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'case-1',
    category: 'Preventive',
    title: 'Periodontal Therapy & Biofilm Scaling',
    subtitle: 'Ultrasonic Debridement & Lingual Calculus Elimination',
    description: 'Intraoral mirror photograph documenting ultrasonic piezo scaling and comprehensive plaque/tartar debridement.',
    clinicalNotes:
      'Patient presented with generalized marginal gingivitis and localized moderate subgingival calculus on lingual surfaces. Executed full mouth ultrasonic scaling using piezo tips, followed by fine hand instrumentation with Gracey curettes. Plaque index dropped significantly with customized interdental brushing instruction.',
    imageCount: 2,
    imageUrl: '/cases/scaling1.jpg',
    images: [
      {
        url: '/cases/scaling1.jpg',
        label: 'Mandibular Anterior Lingual Calculus Scaling (Pre & Post Treatment)',
        type: 'clinical-photo',
        caption: 'Top: Marked supragingival and subgingival calculus bridge on mandibular anteriors. Bottom: Smooth, debrided tooth surfaces promoting healthy periodontal tissue reattachment.',
      },
      {
        url: '/cases/scaling2.jpg',
        label: 'Lingual Mirror View: Extrinsic Tobacco Stain Elimination',
        type: 'clinical-photo',
        caption: 'Intraoral mirror photograph documenting lingual stained surfaces and thorough elimination of stubborn extrinsic pigments.',
      },
    ],
    svgType: 'scaling',
    procedureSteps: [
      'Pre-procedural chlorhexidine mouth rinse',
      'BPE score assessment and plaque disclosure',
      'Ultrasonic scaling targeting heavy lingual anterior deposits',
      'Selective subgingival curettage and stain removal prophylaxis',
      'Tailored interdental brush sizing and recall scheduling',
    ],
    tags: ['Gingivitis', 'Ultrasonic Scaling', 'Lingual Calculus', 'Stain Elimination', 'BPE Score 2→0'],
  },
  {
    id: 'case-2',
    category: 'Restorative',
    title: 'Anterior Composite Restoration',
    subtitle: 'Class IV Fracture Rebuilding & Aesthetic Embrasure Contouring',
    description: 'Intraoral patient photographs of anterior restorative treatments restoring aesthetics, incisal translucency, and gingival harmony.',
    clinicalNotes:
      'Traumatic incisal edge fracture and margin irregularity on maxillary anterior teeth. Isolated using rubber dam, bevelled enamel margins to optimize micro-mechanical retention, placed multi-shade nanohybrid composite, and finished with multi-step disc polishing to replicate natural enamel luster and embrasures.',
    imageCount: 2,
    imageUrl: '/cases/comp1.jpg',
    images: [
      {
        url: '/cases/comp1.jpg',
        label: 'Anterior Aesthetic Recontouring & Diastema Closure (Pre-op vs Post-op)',
        type: 'clinical-photo',
        caption: 'Upper panel: Anterior spacing and incisal edge discrepancies. Lower panel: Direct composite restoration restoring emergence profile and smile symmetry.',
      },
      {
        url: '/cases/comp2.jpg',
        label: 'Maxillary Diastema Closure & Aesthetic Embrasure Contouring',
        type: 'clinical-photo',
        caption: 'Upper (Pre): Central diastema and irregular embrasures. Lower (Post): Conservative additive composite resin restoring natural interproximal contact.',
      },
    ],
    svgType: 'restorative',
    procedureSteps: [
      'Rubber dam isolation & shade mapping under daylight LED',
      'Conservative bevel preparation on enamel margin',
      'Selective acid etching and 7th gen bonding application',
      'Layered dentin/enamel composite build-up with silicone index',
      'Finishing with fine diamond burs, Sof-Lex discs, and diamond paste',
    ],
    tags: ['Class IV Fracture', 'Nanohybrid Composite', 'Aesthetic Recontouring', 'Rubber Dam'],
  },
  {
    id: 'case-3',
    category: 'Prosthetics',
    title: 'Complete Removable Denture Rehabilitation',
    subtitle: 'Smile Line Restoration & Functional Occlusion',
    description: 'Patient oral cavity and smile rehabilitation records demonstrating vertical dimension restoration and balanced lip support.',
    clinicalNotes:
      'Edentulous maxilla and mandible rehabilitation. Established proper vertical dimension of occlusion (VDO), accurate border moulding with greenstick compound, individualised teeth selection matching patient facial form, achieving balanced occlusion and significant aesthetic rejuvenation.',
    imageCount: 2,
    imageUrl: '/cases/denture1.jpg',
    images: [
      {
        url: '/cases/denture1.jpg',
        label: 'Smile Profile & Vertical Dimension Rehabilitation (Before & After)',
        type: 'clinical-photo',
        caption: 'Upper: Reduced facial height with edentulous maxillary ridge. Lower: Restored vertical dimension of occlusion, facial aesthetics, and balanced smile line.',
      },
      {
        url: '/cases/denture2.jpg',
        label: 'Complete Denture Full Smile & Facial Esthetics Rejuvenation',
        type: 'clinical-photo',
        caption: 'Upper: Edentulous resting profile. Lower: Rejuvenated smile arc with consonant lip support and individualized prosthetic teeth.',
      },
    ],
    svgType: 'denture',
    procedureSteps: [
      'Primary impression with impression compound / irreversible hydrocolloid',
      'Custom tray border moulding and secondary zinc-oxide eugenol impression',
      'Jaw relation record establishing resting facial height and centric occlusion',
      'Try-in appointment verifying phonetics, smile arc, and lip support',
      'Final insertion, pressure-indicating paste inspection, and home-care guidance',
    ],
    tags: ['Complete Dentures', 'Smile Arc Rejuvenation', 'Border Moulding', 'Centric Occlusion'],
  },
  {
    id: 'case-4',
    category: 'Endodontics',
    title: 'Anterior & Posterior Endodontic Therapy',
    subtitle: 'Biomechanical Canal Preparation & Three-Dimensional Obturation',
    description: 'Diagnostic and post-operative intraoral periapical radiographs (IOPA) demonstrating conservative canal instrumentation and hermetic apical sealing.',
    clinicalNotes:
      'Irreversible pulpitis with apical periodontitis. Established working length via electronic apex locator and confirmatory diagnostic radiographs. Prepared canals with rotary NiTi files with continuous 3% NaOCl and 17% EDTA irrigation. Obturated using gutta-percha with roll cone technique and resin sealer.',
    imageCount: 3,
    isRadiograph: true,
    imageUrl: '/cases/endo1.jpg',
    images: [
      {
        url: '/cases/endo1.jpg',
        label: 'Maxillary Anterior Tooth Hermetic Canal Obturation (IOPA Radiograph)',
        type: 'radiograph',
        caption: 'Diagnostic intraoral periapical radiograph verifying continuous, dense single-canal gutta-percha obturation sealed precisely to the root apex.',
      },
      {
        url: '/cases/endo2.jpg',
        label: 'Mandibular Molar Curved Canals Endodontic Treatment (IOPA Radiograph)',
        type: 'radiograph',
        caption: 'Curved mesial and distal root canals instrumented and obturated three-dimensionally maintaining original anatomic canal curvature.',
      },
      {
        url: '/cases/endo3.jpg',
        label: 'Curved Root Canal Apical Seal Verification (IOPA Radiograph)',
        type: 'radiograph',
        caption: 'High-contrast periapical radiograph confirming dense three-dimensional condensation and hermetic apical seal without voids.',
      },
    ],
    svgType: 'endodontic',
    procedureSteps: [
      'Rubber dam application and straight-line coronal access',
      'Apex locator working length verification + confirmatory IOPA',
      'Crown-down rotary NiTi instrumentation with copius NaOCl flush',
      'Sonic activation of irrigation and paper point drying',
      'Cold lateral condensation / continuous wave warm obturation',
    ],
    tags: ['IOPA Radiographs', 'Apical Seal', 'Roll Cone Technique', 'Rotary NiTi'],
  },
  {
    id: 'case-5',
    category: 'Extractions',
    title: 'Atraumatic Surgical Extraction & Fragmentation',
    subtitle: 'Preserving Alveolar Bone Architecture & Controlled Root Retrieval',
    description: 'Clinical intraoral and root retrieval records preserving the buccal cortical plate.',
    clinicalNotes:
      'Severely broken-down root with dilacerated apical curvature. Utilized periotome and luxators to preserve buccal cortical plate. A file-assisted retrieval technique engaged the fractured apical third without extensive alveolar bone removal.',
    imageCount: 1,
    imageUrl: '/cases/ext1.jpg',
    images: [
      {
        url: '/cases/ext1.jpg',
        label: 'Atraumatic File-Assisted Retrieval of Fractured Apical Root Third',
        type: 'clinical-photo',
        caption: 'Clinical record on surgical gauze: Coronal root segment (top) and fractured apical third fragment engaged and retrieved via endodontic hand file (bottom), preserving buccal cortical bone.',
      },
    ],
    svgType: 'extraction',
    procedureSteps: [
      'Profound local anaesthesia (Lidocaine 2% with 1:80,000 epinephrine)',
      'Gingival collar detachment with minimal tissue disruption',
      'Sectioning of roots or endodontic file threading into root canal lumen',
      'Controlled axial traction and removal of apical fragment',
      'Socket debridement, hemostasis with collagen sponge, and post-op instructions',
    ],
    tags: ['Atraumatic Extraction', 'Bone Preservation', 'File-Assisted Technique', 'Socket Management'],
  },
  {
    id: 'case-6',
    category: 'Trauma',
    title: 'Dentoalveolar Fracture Reduction & Stabilisation',
    subtitle: 'Emergency Splinting & Functional Repositioning',
    description: 'Clinical intraoral photographs of acute dental trauma stabilisation with flexible wire splinting and gingival wound repair.',
    clinicalNotes:
      'Patient arrived following acute trauma resulting in subluxation, displaced maxillary central incisors, and soft tissue lacerations. Gently repositioned displaced teeth under local anaesthesia and applied a flexible arch bar / orthodontic wire splint allowing physiologic mobility to safeguard periodontal ligament vitality, accompanied by meticulous gingival suturing.',
    imageCount: 1,
    imageUrl: '/cases/fracture1.jpg',
    images: [
      {
        url: '/cases/fracture1.jpg',
        label: 'Acute Dentoalveolar Fracture Reduction & Flexible Arch Bar Wire Splinting (Before & After)',
        type: 'clinical-photo',
        caption: 'Upper: Acute subluxation with displaced central incisors and gingival trauma. Lower: Anatomic reduction, flexible wire splinting, and interdental sutures.',
      },
    ],
    svgType: 'trauma',
    procedureSteps: [
      'Immediate neurovascular and radiographic trauma assessment',
      'Gentle digital repositioning into original anatomic socket position',
      'Placement of semi-rigid orthodontic wire / composite resin splint',
      'Occlusal clearance inspection preventing premature contact points',
      'Two-week trauma monitoring and pulp sensibility tracking',
    ],
    tags: ['Dental Trauma', 'Arch Bar Splinting', 'Surgical Suturing', 'Periodontal Ligament Healing'],
  },
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'v-4',
    title: 'Tooth Fragment Reattachment',
    topic: 'Conservative Trauma Dentistry · Part 1',
    url: 'https://www.youtube.com/watch?v=-66PIYn29uc',
    duration: '9 mins',
    viewsOrTag: 'Part 1 · Fragment Reattachment',
  },
  {
    id: 'v-3',
    title: 'Post placement after Fractured Fragment reattachment',
    topic: 'Restorative & Trauma Care · Part 2 (Sequel)',
    url: 'https://www.youtube.com/watch?v=3USkAjdSE3k',
    duration: '11 mins',
    viewsOrTag: 'Part 2 (Sequel) · Post Placement',
  },
  {
    id: 'v-1',
    title: 'Esthetic management of anterior teeth with open apex and questionable prognosis',
    topic: 'Anterior Apexification & Aesthetics',
    url: 'https://www.youtube.com/watch?v=dMpTsHRNzyI',
    duration: '14 mins',
    viewsOrTag: 'Clinical Presentation',
  },
  {
    id: 'v-2',
    title: 'Roll cone technique obturation demo',
    topic: 'Endodontics Technique Demo',
    url: 'https://www.youtube.com/watch?v=R3UUMzraepM',
    duration: '8 mins',
    viewsOrTag: 'Practical Demonstration',
  },
  {
    id: 'v-5',
    title: 'Dentoalveolar fracture reduction and fixation',
    topic: 'Oral Surgery & Trauma Management',
    url: 'https://www.youtube.com/watch?v=ueMEVfBs4rc',
    duration: '16 mins',
    viewsOrTag: 'Surgical Splinting Guide',
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    topic: 'Skin & Beauty · Patient Education',
    title: 'Non-ablative Laser Treatment for Skin',
    publisher: 'iCliniq Medical Editorial',
    summary:
      'A thorough, patient-facing overview of non-ablative laser procedures, mechanism of collagen stimulation, pre-treatment preparation, and recovery timelines written for mainstream clarity.',
    url: 'https://www.icliniq.com/articles/skin-and-beauty/non-ablative-laser-treatment-for-skin',
  },
  {
    id: 'art-2',
    topic: 'Healthcare Communication & Ethics',
    title: 'Role of Social Media in Cosmetic Dermatology',
    publisher: 'iCliniq Medical Editorial',
    summary:
      'Explores the ethical nuances, patient expectation management, and communication responsibilities of modern clinicians when navigating cosmetic trends and social media influence.',
    url: 'https://www.icliniq.com/articles/skin-and-beauty/role-of-social-media-in-cosmetic-dermatology',
  },
];
