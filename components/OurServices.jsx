'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };


  const serviceCategories = [
    {
      title: "Business Setup",
      icon: "/icons/BusinessSetup.png", 
      description: "We offer a range of services to assist all types of companies in setting up their operations in the UAE.",
      services: [
        "Company formation Services",
        "Licensing processing services",
        "Industrial license in Dubai",
        "Commercial license in Dubai",
        "Professional & Civil license",
        "Branch of a Local Company",
        "Representative Office",
        "Trade license renewal",
        "LLC Agreement / Memorandum of Association",
        "LLC Amendment and Share Sale Agreement",
        "Business Partnership Contract & Supplement Agreements",
        "Side agreement protecting investors",
        "Business Sales Agreement"
      ]
    },
    {
      title: "Embassy & MOFA Attestation",
      icon: "/icons/embassyMofa.png", 
      description: "We specialize in attesting a variety of documents, including:",
      services: [
        "Degree Certificate Attestation",
        "Birth Certificate Attestation",
        "Marriage Certificate Attestation",
        "Commercial Documents Attestation",
        "Police Clearance Attestation",
        "Medical Report Attestation",
        "Power of Attorney Attestation",
        "Translation Services",
        "Document Delivery Service"
      ]
    },
    {
      title: "Visa & Work Permit in UAE",
      icon: "/icons/VisaWork.png", 
      description: "We assist with various visa and work permit services, including:",
      services: [
        "Business visa, renewal & cancellation",
        "Visit Visa 30,60,90 Days",
        "Tourist Visa 30,60 days",
        "Family and Dependent Visa",
        "Visa renewal & cancellation",
        "Residence visa and work permit",
        "Maid visa, renewal & cancellation",
        "Labour & Immigration services",
        "Bank Guarantee/E-guarantee deposit service for employment visa"
      ]
    },
    {
      title: "PRO & Government Services",
      icon: "/icons/ProGovernment.png", 
      description: "Professional services to handle your government-related procedures:",
      services: [
        "PRO Service",
        "RTA License and Vehicle Renewal online services",
        "Police Clearance Certificate Online Application",
        "Ejari (Tenancy Contract online Registration)",
        "Local Service Agent Contract",
        "Online medical booking",
        "Online health card renewal",
        "Power of Attorney",
        "Memorandum of Understanding (MoU)"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We offer a range of services to assist all types of companies and individuals with their operations in the UAE.
            Our services include:
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100"
            >
              {/* Card Header */}
              <div className="p-6 text-center border-b border-slate-100">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-emerald-50">
                  <Image 
                    src={category.icon} 
                    alt={category.title} 
                    width={60} 
                    height={60} 
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.slice(0, 5).map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 shrink-0" />
                      <span className="text-slate-700">{service}</span>
                    </li>
                  ))}
                  {category.services.length > 5 && (
                    <li className="text-emerald-600 font-medium text-sm mt-2">
                      +{category.services.length - 5} more services
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Accordion Layout */}
        <div className="md:hidden space-y-4">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-lg overflow-hidden shadow-sm"
            >
              {/* Accordion Header */}
              <button 
                className="w-full flex items-center justify-between p-4 bg-white text-left"
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mr-3 shrink-0">
                    <Image 
                      src={category.icon} 
                      alt={category.title} 
                      width={30} 
                      height={30} 
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-slate-800">{category.title}</h3>
                </div>
                {expandedCategory === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              
              {/* Accordion Content */}
              {expandedCategory === index && (
                <div className="p-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-600 mb-4 text-sm">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 mx-auto max-w-4xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Need assistance with any of our services?</h3>
            <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
              Contact our team of professionals for personalized guidance tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contactUs">
              <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-colors">
                Contact Us
              </button>
              </Link>
              <button className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;