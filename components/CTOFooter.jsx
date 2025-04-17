'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTAHero = () => {
  return (
    <section className="w-full bg-white">
      {/* Top Banner */}
      <div className="py-12 px-4 bg-slate-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            One-Stop Solution for All Your Document Processing Needs in the UAE
          </h2>
          <Link
            href="/contactUs"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white py-3 px-8 rounded-md font-medium transition-colors"
          >
            Call for Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Section - Split Content */}
      <div className="w-full">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative h-72 md:h-auto overflow-hidden">
            <Image
              src="/images/CtoHero.jpg"
              alt="Document processing services"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-emerald-700 text-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Your One-Stop Solution for Seamless Document Processing in the UAE
            </h3>
            
            <div className="space-y-4 text-emerald-50">
              <p>
                Whether you need document attestation, visa processing, business setup assistance, 
                or any other document-related service, Amazon Attestation and Documents Clearing is 
                your trusted partner.
              </p>
              <p>
                Experience a hassle-free and efficient approach to document processing in the UAE. 
                Contact us today to discover how we can simplify your journey. Your satisfaction is 
                our priority.
              </p>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAHero;