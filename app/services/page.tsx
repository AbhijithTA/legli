import Link from 'next/link';

import NavbarComponent from '@/components/NavbarComponent'
import Footer from '@/components/FooterComponent'

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const ServicesPage = () => {
  return (
    <>
    <NavbarComponent />
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8">
              Welcome to Amazon Attestation and Documents Clearing, your trusted partner for a
              comprehensive range of document-related services in the UAE. We specialize in providing
              efficient, hassle-free solutions to meet your specific needs. With a commitment to excellence
              and a deep understanding of the intricacies of document processing, we ensure that your
              requirements are met promptly and professionally.
            </p>
            <a href="tel:+971 56 540 0666">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition duration-300">
              Call Us Now
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Workspace Solutions */}
          <div className="service-card bg-pink-100 rounded-lg overflow-hidden shadow-lg">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-pink-600 mr-3">
                  <BuildingIcon />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Workspace Solutions</h2>
              </div>
              <p className="text-slate-700 mb-6">
                Welcome to Amazon Attestation and Documents Clearing, where we offer tailored workspace solutions to meet the unique needs of individuals and businesses in the UAE. Our commitment to providing flexible and customizable workspace solutions sets us apart, allowing you to work with ease and efficiency.
              </p>
              <Link href="/workspace-solutions" className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700">
                Learn more
                <span className="ml-2">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
            <div className="h-64 bg-gray-200">
              <img 
                src="/images/Services1.jpg" 
                alt="Workspace Solutions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Document Processing */}
          <div className="service-card bg-pink-100 rounded-lg overflow-hidden shadow-lg">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-pink-600 mr-3">
                  <DocumentIcon />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Document Processing</h2>
              </div>
              <p className="text-slate-700 mb-6">
                At Amazon Attestation and Documents Clearing, we take pride in offering a comprehensive suite of document processing services designed to meet your unique needs. With a deep understanding of the intricacies of document requirements and government procedures in the UAE, we are your trusted partner for efficient, reliable, and hassle-free document processing.
              </p>
              <Link href="/document-processing" className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700">
                View our services
                <span className="ml-2">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
            <div className="h-64 bg-gray-200">
              <img 
                src="/images/4140061.jpg" 
                alt="Document Processing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Specialized Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <div className="text-blue-600">
                  <DocumentIcon />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-blue-800">Document Attestation</h3>

              <p className="text-slate-600 text-center">
                Professional attestation services for all types of documents required for UAE official processes.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-blue-800">Visa Processing</h3>
              <p className="text-slate-600 text-center">
                Streamlined visa application and processing for individuals and businesses in the UAE.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <div className="text-blue-600">
                  <CalendarIcon />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-blue-800">PRO Services</h3>
              <p className="text-slate-600 text-center">
                Comprehensive Public Relations Officer services to handle government transactions efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-slate-900 text-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Contact our team today to discuss your document processing needs and how we can assist you.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/contactUs"> 
      <button className="bg-white text-slate-900 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300">
        Contact Us
      </button>
      </Link>
      <button className="border border-white text-white hover:bg-slate-800 font-medium py-3 px-8 rounded-md transition duration-300">
        View All Services
      </button>
    </div>
  </div>
</div>

      
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-lg flex items-center">
          <ChatIcon />
          Let's Chat!
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ServicesPage;