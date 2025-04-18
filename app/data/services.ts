// services.ts
export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  relatedServices: string[];
  icon?: string;
}

export const services: Service[] = [
  {
    id: "pro-service",
    slug: "pro-service",
    title: "PRO Service",
    description: "Professional representation services for businesses and individuals",
    longDescription: "Our PRO services provide comprehensive support for all your government and regulatory requirements. We handle paperwork, submissions, and follow-ups so you can focus on your core activities.",
    features: [
      "Dedicated PRO representative",
      "Document preparation and submission",
      "Government liaison services",
      "Status tracking and updates",
      "Renewal reminders",
      "Express processing options"
    ],
    relatedServices: ["document-delivery", "business-partnership-contract"],
    icon: "M9 12l2 2 4-4"
  },
  {
    id: "rta-license",
    slug: "rta-license",
    title: "RTA License and Vehicle Renewal Online Services",
    description: "Fast and efficient vehicle licensing and renewal services",
    longDescription: "Our RTA license and vehicle renewal service simplifies the process of maintaining your vehicle documentation. We handle all aspects of licensing and renewal to ensure you stay compliant with local regulations.",
    features: [
      "Online application processing",
      "Document verification",
      "Fee calculation and payment assistance",
      "Express processing options",
      "Status tracking",
      "Delivery of completed documents"
    ],
    relatedServices: ["document-delivery", "power-of-attorney"],
    icon: "M9 12l2 2 4-4"
  },
  {
    id: "translation-services",
    slug: "translation-services",
    title: "Translation Services",
    description: "Professional translation services for all document types",
    longDescription: "Our certified translation services provide accurate and legally recognized translations for all your important documents. Our team of professional translators ensures high-quality results with quick turnaround times.",
    features: [
      "Legal document translation",
      "Certified translations",
      "Multi-language support",
      "Technical and specialized content",
      "Rush service available",
      "Digital delivery options"
    ],
    relatedServices: ["document-delivery", "ejari-registration"],
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
  },
  {
    id: "police-clearance",
    slug: "police-clearance",
    title: "Police Clearance Certificate Online Application",
    description: "Streamlined process for obtaining police clearance certificates",
    longDescription: "Our police clearance certificate service handles the entire application process on your behalf. We ensure all documentation is correctly prepared and submitted, reducing delays and complications.",
    features: [
      "Online application submission",
      "Document verification",
      "Status tracking",
      "Express processing options",
      "Digital and physical certificate delivery",
      "Renewal assistance"
    ],
    relatedServices: ["document-delivery", "power-of-attorney"],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
  },
  {
    id: "ejari-registration",
    slug: "ejari-registration",
    title: "Ejari (Tenancy Contract Online Registration)",
    description: "Simplified Ejari registration for property rentals",
    longDescription: "Our Ejari registration service makes the process of registering rental contracts quick and hassle-free. We handle all the documentation and submission requirements to ensure your tenancy is properly registered.",
    features: [
      "Contract verification",
      "Online registration",
      "Document preparation",
      "Fee calculation and payment assistance",
      "Express processing",
      "Digital certificate delivery"
    ],
    relatedServices: ["document-delivery", "power-of-attorney"],
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
  },
  {
    id: "document-delivery",
    slug: "document-delivery",
    title: "Document Delivery Service",
    description: "Secure and reliable document delivery solutions",
    longDescription: "Our document delivery service ensures your important documents reach their destination safely and on time. We offer tracking, insurance, and express options to meet your specific needs.",
    features: [
      "Secure handling",
      "Tracking system",
      "Insurance options",
      "Express delivery",
      "Proof of delivery",
      "International shipping"
    ],
    relatedServices: ["pro-service", "translation-services"],
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  },
  {
    id: "llc-agreement",
    slug: "llc-agreement",
    title: "LLC Agreement / Memorandum of Association",
    description: "Comprehensive LLC formation documentation services",
    longDescription: "Our LLC Agreement and Memorandum of Association service provides professionally drafted documents tailored to your business needs. We ensure all legal requirements are met for successful company formation.",
    features: [
      "Customized document preparation",
      "Legal review and consultation",
      "Compliance verification",
      "Filing assistance",
      "Amendment services",
      "Digital and physical copies"
    ],
    relatedServices: ["llc-amendment", "business-partnership-contract"],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "llc-amendment",
    slug: "llc-amendment",
    title: "LLC Amendment and Share Sale Agreement",
    description: "Professional services for LLC modifications and share transfers",
    longDescription: "Our LLC Amendment and Share Sale Agreement service facilitates changes to your company structure and ownership. We handle all legal documentation and filing requirements to ensure a smooth transition.",
    features: [
      "Document preparation",
      "Legal review",
      "Compliance verification",
      "Filing assistance",
      "Share transfer documentation",
      "Updated certificate issuance"
    ],
    relatedServices: ["llc-agreement", "business-sales-agreement"],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "local-service-agent",
    slug: "local-service-agent",
    title: "Local Service Agent Contract",
    description: "Professional local service agent representation",
    longDescription: "Our Local Service Agent Contract service provides businesses with qualified local representation to meet regulatory requirements. We handle all aspects of the agent relationship to ensure compliance and smooth operations.",
    features: [
      "Agent selection",
      "Contract preparation",
      "Legal compliance review",
      "Documentation filing",
      "Liaison services",
      "Renewal management"
    ],
    relatedServices: ["business-partnership-contract", "pro-service"],
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    id: "business-partnership-contract",
    slug: "business-partnership-contract",
    title: "Business Partnership Contract & Supplement Agreements",
    description: "Comprehensive partnership documentation services",
    longDescription: "Our Business Partnership Contract service provides legally sound documentation for business partnerships. We create customized agreements that protect all parties and clearly define roles, responsibilities, and profit sharing.",
    features: [
      "Customized contract drafting",
      "Legal consultation",
      "Supplement agreement preparation",
      "Compliance verification",
      "Amendment services",
      "Digital and physical copies"
    ],
    relatedServices: ["side-agreement-investors", "business-sales-agreement"],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "side-agreement-investors",
    slug: "side-agreement-investors",
    title: "Side Agreement Protecting Investors",
    description: "Legal protection for investor interests",
    longDescription: "Our Side Agreement service creates legally binding documents that provide additional protection for investors beyond standard contracts. We ensure your interests are secured with clear terms and conditions.",
    features: [
      "Customized agreement drafting",
      "Legal consultation",
      "Risk assessment",
      "Investor protection clauses",
      "Compliance verification",
      "Digital and physical copies"
    ],
    relatedServices: ["business-partnership-contract", "business-sales-agreement"],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "online-medical-booking",
    slug: "online-medical-booking",
    title: "Online Medical Booking",
    description: "Convenient healthcare appointment scheduling services",
    longDescription: "Our Online Medical Booking service simplifies the process of scheduling healthcare appointments. We provide access to a network of qualified healthcare providers with real-time availability.",
    features: [
      "24/7 booking platform",
      "Healthcare provider network",
      "Appointment reminders",
      "Medical record integration",
      "Follow-up scheduling",
      "Insurance verification"
    ],
    relatedServices: ["online-health-card-renewal"],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  },
  {
    id: "online-health-card-renewal",
    slug: "online-health-card-renewal",
    title: "Online Health Card Renewal",
    description: "Streamlined health card renewal services",
    longDescription: "Our Online Health Card Renewal service makes maintaining your healthcare coverage simple and convenient. We handle the entire renewal process to ensure continuous access to healthcare services.",
    features: [
      "Online application submission",
      "Document verification",
      "Status tracking",
      "Renewal reminders",
      "Express processing",
      "Digital and physical card delivery"
    ],
    relatedServices: ["online-medical-booking", "document-delivery"],
    icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
  },
  {
    id: "power-of-attorney",
    slug: "power-of-attorney",
    title: "Power of Attorney",
    description: "Professional power of attorney documentation services",
    longDescription: "Our Power of Attorney service provides legally valid documentation that enables your chosen representative to act on your behalf. We ensure all requirements are met for official recognition.",
    features: [
      "Document preparation",
      "Legal consultation",
      "Notarization services",
      "Registration assistance",
      "Authentication services",
      "Digital and physical copies"
    ],
    relatedServices: ["document-delivery", "memorandum-of-understanding"],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "memorandum-of-understanding",
    slug: "memorandum-of-understanding",
    title: "Memorandum of Understanding (MoU)",
    description: "Professional MoU preparation services",
    longDescription: "Our Memorandum of Understanding service creates professionally drafted documents that outline agreements between parties before formal contracts. We ensure clarity and protection for all parties involved.",
    features: [
      "Customized document preparation",
      "Legal consultation",
      "Term negotiation assistance",
      "Compliance verification",
      "Amendment services",
      "Digital and physical copies"
    ],
    relatedServices: ["business-partnership-contract", "business-sales-agreement"],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "business-sales-agreement",
    slug: "business-sales-agreement",
    title: "Business Sales Agreement",
    description: "Comprehensive business sale documentation services",
    longDescription: "Our Business Sales Agreement service provides legally sound documentation for buying and selling businesses. We ensure all aspects of the transaction are properly documented to protect all parties involved.",
    features: [
      "Customized agreement drafting",
      "Asset and liability documentation",
      "Term negotiation assistance",
      "Due diligence support",
      "Closing document preparation",
      "Legal compliance verification"
    ],
    relatedServices: ["llc-amendment", "business-partnership-contract"],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "labour-immigration-services",
    slug: "labour-immigration-services",
    title: "Labour & Immigration Services",
    description: "Comprehensive labor and immigration solutions",
    longDescription: "Our Labour and Immigration Services provide end-to-end support for all employment and visa requirements. We handle documentation, applications, and follow-ups to ensure compliance with local regulations.",
    features: [
      "Visa application processing",
      "Labor card issuance",
      "Work permit arrangements",
      "Status change assistance",
      "Renewal services",
      "Legal compliance verification"
    ],
    relatedServices: ["bank-guarantee-service", "document-delivery"],
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    id: "bank-guarantee-service",
    slug: "bank-guarantee-service",
    title: "Bank Guarantee/E-guarantee Deposit Service for Employment Visa",
    description: "Simplified bank guarantee services for visa requirements",
    longDescription: "Our Bank Guarantee service facilitates the process of obtaining the financial guarantees required for employment visas. We work with banking partners to streamline the process and minimize delays.",
    features: [
      "Bank coordination",
      "Document preparation",
      "Application submission",
      "Status tracking",
      "Guarantee release assistance",
      "Legal compliance verification"
    ],
    relatedServices: ["labour-immigration-services", "document-delivery"],
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
  }
];  