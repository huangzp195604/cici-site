export type PageTab = 'home' | 'about' | 'portfolio' | 'articles';

export interface ServiceItem {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  type: 'web' | 'uiux' | 'product' | 'research' | 'motion' | 'cta';
}

export interface ExperienceItem {
  id: string;
  period: string;
  periodZh: string;
  role: string;
  roleZh: string;
  company: string;
  description: string;
  descriptionZh: string;
  highlights: string[];
  iconType: 'refresh' | 'layers' | 'sparkle' | 'code';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  quoteZh: string;
  author: string;
  role: string;
  company: string;
  avatarColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleZh: string;
  client: string;
  category: 'web' | 'uiux' | 'mobile' | 'system';
  categoryLabel: string;
  categoryLabelZh: string;
  summary: string;
  summaryZh: string;
  accentColor: string;
  illustrationType: 'studio' | 'venture' | 'fintech' | 'health' | 'ecommerce' | 'craft';
  year: string;
  role: string;
  deliverables: string[];
  challenge: string;
  challengeZh: string;
  solution: string;
  solutionZh: string;
  metrics: { label: string; labelZh: string; value: string }[];
  content: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  titleZh: string;
  category: 'Resources' | 'Articles' | 'News' | 'Tutorial';
  categoryZh: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  summary: string;
  summaryZh: string;
  illustrationType: 'palette' | 'typography' | 'exercises' | 'system' | 'prototyping';
  featured?: boolean;
  content: {
    heading: string;
    body: string;
  }[];
  tags: string[];
}
