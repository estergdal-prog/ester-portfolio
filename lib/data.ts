export type Language = 'en' | 'he'

export interface BilingualText {
  en: string
  he: string
}

export interface Experience {
  title: BilingualText
  company: string
  period: string
  description: BilingualText
}

export interface SkillGroup {
  category: BilingualText
  skills: string[]
}

export interface EducationItem {
  title: BilingualText
  school: string
  year: string
}

export interface NavLabels {
  navAbout: string
  navExperience: string
  navSkills: string
  navProjects: string
  navEducation: string
  navContact: string
}

export interface SectionLabels {
  hero: {
    name: string
    subtitle: string
    tagline: string
    cta: string
  }
  about: {
    title: string
    content: string
  }
  experience: {
    title: string
  }
  skills: {
    title: string
  }
  education: {
    title: string
  }
  contact: {
    title: string
    phone: string
    email: string
    location: string
    footerText: string
  }
}

export const translations: Record<Language, SectionLabels & NavLabels> = {
  en: {
    navAbout: 'About',
    navExperience: 'Experience',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navEducation: 'Education',
    navContact: 'Contact',
    hero: {
      name: 'Ester Wiseberg',
      subtitle: 'Data & AI Analyst | Financial Analytics Expert',
      tagline: 'Data → Insight → Value',
      cta: 'Contact Me',
    },
    about: {
      title: 'About Me',
      content:
        'Data and Financial Analyst with experience in turning data into business value. Driven by a deep belief in innovation and its power to transform organizations, I combine a strong financial and analytical background with technical expertise. Currently expanding my professional toolkit by developing and integrating advanced AI and automation solutions (Make, Claude Code) to streamline workflows.',
    },
    experience: {
      title: 'Work Experience',
    },
    skills: {
      title: 'Skills',
    },
    education: {
      title: 'Education & Certifications',
    },
    contact: {
      title: 'Get in Touch',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      footerText: '© 2026 Ester Wiseberg. Built with React, Next.js, and Tailwind CSS.',
    },
  },
  he: {
    navAbout: 'אודות',
    navExperience: 'ניסיון',
    navSkills: 'מיומנויות',
    navProjects: 'פרויקטים',
    navEducation: 'השכלה',
    navContact: 'צור קשר',
    hero: {
      name: 'אסתר וייסברג',
      subtitle: 'Data & AI Analyst | מומחית אנליטיקה פיננסית',
      tagline: 'Data → Insight → Value',
      cta: 'צור קשר',
    },
    about: {
      title: 'מי אני?',
      content:
        'אנליסטית Data ופיננסים עם ניסיון בהפיכת נתונים לערך עסקי. מתוך אמונה עמוקה בחדשנות וביכולתה לשנות ארגונים, אני משלבת רקע פיננסי ואנליטי עם מומחיות טכנית. כיום אני מרחיבה את ארגז הכלים המקצועי ולומדת ומשלבת פתרונות AI ואוטומציה מתקדמת (Make, Claude Code) לייעול תהליכי עבודה.',
    },
    experience: {
      title: 'ניסיון תעסוקתי',
    },
    skills: {
      title: 'מיומנויות',
    },
    education: {
      title: 'השכלה וקורסים',
    },
    contact: {
      title: 'צור קשר',
      phone: 'טלפון',
      email: 'אימייל',
      location: 'מיקום',
      footerText: '© 2026 אסתר וייסברג. בנוי עם React, Next.js, ו-Tailwind CSS.',
    },
  },
}

export const experience: Experience[] = [
  {
    title: { en: 'Data Analyst', he: 'Data Analyst' },
    company: 'Amarel (Rafael Subsidiary)',
    period: '2025–2026',
    description: {
      en: 'Characterization, development, and implementation of complex datasets and dashboards in Power BI. Utilized DAX formulas for financial and HR metrics analysis. Automated reports and built dynamic forecasting models in Microsoft Fabric.',
      he: 'אפיון, פיתוח והטמעת דאטה-סטים ודשבורדים מורכבים ב-Power BI. שימוש בנוסחאות DAX לניתוח מדדים פיננסיים ו-HR. אוטומציה של דוחות ובניית מודלים דינמיים לחיזוי במערכת Microsoft Fabric.',
    },
  },
  {
    title: { en: 'Senior Financial Data Analyst', he: 'Senior FP&A' },
    company: 'Amarel (Rafael Subsidiary)',
    period: '2022–2025',
    description: {
      en: 'Divisional financial management, annual budget building, and budget control. PMO - End-to-end control of cross-organizational projects. Developed complex financial models for risk assessment and decision-making.',
      he: 'ניהול כספים חטיבתי, בניית תקציב שנתי ובקרה תקציבית. PMO - בקרת פרויקטים רוחביים מקצה לקצה. פיתוח מודלים פיננסיים מורכבים להערכת סיכונים וקבלת החלטות.',
    },
  },
  {
    title: { en: 'Financial Data Analyst', he: 'FP&A' },
    company: 'Rami Levy',
    period: '2019–2022',
    description: {
      en: 'Financial analysis and production of periodic management reports regarding revenue, expenses, and profitability.',
      he: 'ניתוח פיננסי והפקת דוחות תקופתיים להנהלה בנושא הכנסות, הוצאות ורווחיות.',
    },
  },
  {
    title: { en: 'Financial Data Analyst', he: 'FP&A' },
    company: 'Freesbe',
    period: '2017–2019',
    description: {
      en: 'Built monthly, quarterly, and annual activity summary reports.',
      he: 'בניית דוח סיכום פעילות חודשית, רבעונית ושנתית.',
    },
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: { en: 'Data & BI', he: 'Data & BI' },
    skills: ['Power BI', 'Qlik Sense', 'SQL', 'DAX', 'Excel'],
  },
  {
    category: { en: 'AI & Automation', he: 'AI & Automation' },
    skills: ['Make', 'Fillout', 'Claude Code', 'Custom AI Assistants'],
  },
  {
    category: { en: 'Finance & Data', he: 'Finance & Data' },
    skills: [
      'Priority',
      'Tafnit',
      'Comax',
      'Financial Modeling',
      'Budgeting & Forecasting',
    ],
  },
]

export const education: EducationItem[] = [
  {
    title: { en: 'AI Solutions Development', he: 'פיתוח פתרונות AI' },
    school: 'Brin by Eden Bibas',
    year: '2026',
  },
  {
    title: {
      en: 'Power BI & Data Visualization Certification',
      he: 'Power BI & Data Visualization Certification',
    },
    school: 'Unique',
    year: '2022',
  },
  {
    title: { en: 'Practical Economist', he: 'כלכלן פרקטי' },
    school: 'Practical Economics Program',
    year: '2015',
  },
  {
    title: {
      en: 'B.A in Economics and Business Administration',
      he: 'B.A בכלכלה ומנהל עסקים',
    },
    school: 'Ariel University',
    year: '2010–2013',
  },
]

export const radarSkillsData = {
  en: [
    { name: 'Power BI', value: 95 },
    { name: 'SQL', value: 88 },
    { name: 'Python', value: 82 },
    { name: 'Data Strategy', value: 90 },
    { name: 'DAX', value: 92 },
    { name: 'AI Integration', value: 85 },
    { name: 'Financial Modeling', value: 93 },
    { name: 'Excel', value: 95 },
  ],
  he: [
    { name: 'Power BI', value: 95 },
    { name: 'SQL', value: 88 },
    { name: 'Python', value: 82 },
    { name: 'Data Strategy', value: 90 },
    { name: 'DAX', value: 92 },
    { name: 'AI Integration', value: 85 },
    { name: 'Financial Modeling', value: 93 },
    { name: 'Excel', value: 95 },
  ],
}

export interface Project {
  title: BilingualText
  description: BilingualText
  impact: string
  metrics: {
    label: BilingualText
    value: number
  }[]
}

export const projects: Project[] = [
  {
    title: { en: 'Interactive Financial Dashboard', he: 'דשבורד פיננסי אינטראקטיבי' },
    description: {
      en: 'Built comprehensive Power BI dashboard tracking KPIs, revenue, expenses, and profitability across divisions.',
      he: 'בניית דשבורד Power BI כולל עם ניטור KPIs, הכנסות, הוצאות ורווחיות בחטיבות שונות.',
    },
    impact: 'Reduced reporting time by 70%',
    metrics: [
      { label: { en: 'Time Saved', he: 'זמן שנשמר' }, value: 70 },
      { label: { en: 'Users', he: 'משתמשים' }, value: 150 },
      { label: { en: 'Data Points', he: 'נקודות נתונים' }, value: 45 },
    ],
  },
  {
    title: { en: 'AI-Powered Report Automation', he: 'אוטומציה של דוחות בעזרת AI' },
    description: {
      en: 'Developed Make.com + Claude AI workflow to auto-generate monthly reports with insights and recommendations.',
      he: 'פיתוח תהליך Make.com + Claude AI להפקה אוטומטית של דוחות חודשיים עם תובנות.',
    },
    impact: 'Automated 40+ monthly reports',
    metrics: [
      { label: { en: 'Reports', he: 'דוחות' }, value: 40 },
      { label: { en: 'Accuracy', he: 'דיוק' }, value: 99 },
      { label: { en: 'Efficiency Gain', he: 'עלייה בדיוק' }, value: 85 },
    ],
  },
  {
    title: { en: 'Budget Forecasting Model', he: 'מודל חיזוי תקציב' },
    description: {
      en: 'Implemented advanced forecasting model in Microsoft Fabric using Python for predictive budget analysis.',
      he: 'הטמעת מודל חיזוי מתקדם ב-Microsoft Fabric בעזרת Python לניתוח תקציב חזוי.',
    },
    impact: 'Improved forecast accuracy by 35%',
    metrics: [
      { label: { en: 'Accuracy', he: 'דיוק' }, value: 92 },
      { label: { en: 'Lead Time', he: 'זמן הובלה' }, value: 60 },
      { label: { en: 'Cost Reduction', he: 'הפחתת עלויות' }, value: 35 },
    ],
  },
]
