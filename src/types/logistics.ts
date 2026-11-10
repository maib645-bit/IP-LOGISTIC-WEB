export interface LogisticsService {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  keyFeatures: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  routesCoverage: string;
  certifications: string;
  idealFor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
}

export interface QuoteRequest {
  origin: string;
  destination: string;
  transportType: 'maritim' | 'aeri' | 'terrestre' | 'integral';
  loadType: 'fcl' | 'lcl' | 'pallet' | 'express';
  weightKg: number;
  customsNeeded: boolean;
  notes: string;
}

export interface ContactFormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
  privacyAccepted: boolean;
}

export type LegalDocType = 'avis-legal' | 'privacitat' | 'cookies' | null;
