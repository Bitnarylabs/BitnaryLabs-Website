export interface LeadSubmission {
  id: string;
  name: string;
  businessName?: string;
  mobile: string;
  workNeeded: string;
  description: string;
  preferredContact: "WhatsApp" | "Phone Call" | "Email" | string;
  status: "New" | "Contacted" | "In Discussion" | "Converted" | "Closed";
  notes?: string;
  createdAt: string;
}

export const STORAGE_KEY = "bitnarylabs_leads";

export const initialMockLeads: LeadSubmission[] = [
  {
    id: "lead-101",
    name: "Vikram Malhotra",
    businessName: "Malhotra Electronics & Spares",
    mobile: "+91 98201 44521",
    workNeeded: "Inventory software",
    description: "Looking to manage 4 warehouses across NCR and integrate barcode scanning on mobile with GST invoice generation.",
    preferredContact: "WhatsApp",
    status: "New",
    notes: "High intent client. Follow up with StockSense live demo.",
    createdAt: "2026-10-18T10:30:00Z",
  },
  {
    id: "lead-102",
    name: "Ananya Iyer",
    businessName: "Kavya Wellness & Organics",
    mobile: "+91 97112 88904",
    workNeeded: "E-Commerce Website",
    description: "Need a high speed D2C Shopify alternative with Razorpay & Shiprocket sync for 120 SKU natural skincare line.",
    preferredContact: "Phone Call",
    status: "In Discussion",
    notes: "Sent proposal for Growth E-Commerce package. Awaiting feedback.",
    createdAt: "2026-10-17T14:15:00Z",
  },
  {
    id: "lead-103",
    name: "Rajeshwar Rao",
    businessName: "Apex Logistics India Pvt Ltd",
    mobile: "+91 94450 12390",
    workNeeded: "HR software",
    description: "Need automated attendance and salary calculation for 65 field drivers and warehouse personnel.",
    preferredContact: "Email",
    status: "Contacted",
    notes: "Shared PeopleDesk brochure and biometric integration spec sheet.",
    createdAt: "2026-10-16T09:40:00Z",
  },
  {
    id: "lead-104",
    name: "Pooja Singhania",
    businessName: "Singhania Law Chambers",
    mobile: "+91 99880 77123",
    workNeeded: "Corporate Website",
    description: "Refined, minimalistic corporate platform reflecting our corporate litigation and M&A practice.",
    preferredContact: "WhatsApp",
    status: "Converted",
    notes: "Advance received. Project initiated in Studio pipeline.",
    createdAt: "2026-10-15T16:20:00Z",
  },
  {
    id: "lead-105",
    name: "Siddharth Verma",
    businessName: "FinTech Orbit",
    mobile: "+91 98334 11200",
    workNeeded: "Landing Page",
    description: "Fast-loading landing page for our upcoming SaaS beta launch with email waitlist capture and GA4 setup.",
    preferredContact: "WhatsApp",
    status: "New",
    notes: "Needs delivery in 5 days.",
    createdAt: "2026-10-19T08:15:00Z",
  }
];

export function getStoredLeads(): LeadSubmission[] {
  if (typeof window === "undefined") return initialMockLeads;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMockLeads));
      return initialMockLeads;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read leads from localStorage", err);
    return initialMockLeads;
  }
}

export function saveStoredLeads(leads: LeadSubmission[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch (err) {
    console.error("Failed to save leads to localStorage", err);
  }
}

export function addLead(newLead: Omit<LeadSubmission, "id" | "status" | "createdAt">): LeadSubmission {
  const current = getStoredLeads();
  const entry: LeadSubmission = {
    ...newLead,
    id: "lead-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
    status: "New",
    createdAt: new Date().toISOString(),
  };
  const updated = [entry, ...current];
  saveStoredLeads(updated);
  return entry;
}
