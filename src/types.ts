export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  timeline: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LeadFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  adPlatform: string;
  mainChallenge: string;
  goals: string[];
  monthlyBudget: string;
  bestTime: string;
  referralSource: string;
  additionalInfo: string;
}
