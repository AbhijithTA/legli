import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const HeroComponent = () => {
  const services = [
    'Business Setup & License Renewal',
    'Document Attestation',
    'Visa Processing',
    'Emirates ID & Medical Typing',
    'PRO Services',
    'Tas-heel Services',
  ];

  return (
    <div className="bg-gradient-to-br from-white to-emerald-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 leading-tight">
              Streamlined Document Solutions in the UAE
            </h1>
            <p className="text-xl text-gray-700">
              Your trusted partner for attestation and document clearing services
              across all seven emirates.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/services"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-md font-medium text-center transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contactUs"
                className="bg-white hover:bg-gray-100 text-emerald-600 border border-emerald-600 py-3 px-6 rounded-md font-medium text-center transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
       
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/heroSection.jpg"
              alt="Business professionals meeting"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 to-transparent p-6">
              <p className="text-white text-lg font-medium">
                We serve individual investors, startups, and enterprises across UAE
              </p>
            </div>
          </div>
        </div>
      </div>
      
    
      <div className="bg-emerald-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl">
            Comprehensive business setup services across all 7 emirates - documentation, licensing, 
            visa services, and bank account opening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;