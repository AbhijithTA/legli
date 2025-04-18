import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/app/data/services';

type Props = {
  params: { serviceId: string };
};

export default function ServicePage({ params }: Props) {
  const service = services.find(service => service.slug === params.serviceId);


  if (!service) return notFound();

  return (
    <>
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <p className="text-gray-700 mb-10 max-w-2xl">
                {service.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-white border border-gray-300 hover:border-indigo-500 text-gray-800 py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow hover:shadow-md">
                  Schedule Consultation
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 relative rounded-xl overflow-hidden shadow-2xl bg-gray-200">
                {/* Replace this div with the actual image when available */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Service Image Placeholder
                </div>
                {/* Uncomment when images are available */}
                {/* <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                /> */}
              </div>
              {/* Decorative elements */}
              <div className="hidden md:block absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-100 rounded-full z-0"></div>
              <div className="hidden md:block absolute -top-8 -right-8 w-32 h-32 bg-yellow-100 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '200+' },
              { label: 'Happy Clients', value: '95%' },
              { label: 'Years Experience', value: '12+' },
              { label: 'Team Experts', value: '30+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Key Features</h2>
            <p className="text-xl text-gray-600">Our {service.title.toLowerCase()} services are designed to deliver exceptional results that drive your business forward.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features?.map((feature, index) => (
              <div key={index} className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:shadow-md group">
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {/* Feature icon - replace with appropriate icons */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature}</h3>
                <p className="text-gray-600">Our experts ensure this feature is implemented to the highest standards for maximum effectiveness.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Process</h2>
            <p className="text-xl text-gray-600">We follow a structured approach to ensure consistent, high-quality results.</p>
          </div>

          <div className="relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-24 relative">
              {[
                {
                  title: 'Discovery & Analysis',
                  description: 'We start by understanding your business goals, target audience, and project requirements to create a strategic plan.',
                  icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                },
                {
                  title: 'Strategy & Planning',
                  description: 'Based on our findings, we develop a comprehensive strategy that outlines the approach, timeline, and deliverables.',
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                },
                {
                  title: 'Design & Development',
                  description: 'Our team creates and builds your solution using industry best practices and cutting-edge technologies.',
                  icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                },
                {
                  title: 'Testing & Launch',
                  description: 'We thoroughly test all aspects of your project before launch to ensure everything works flawlessly.',
                  icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                },
              ].map((step, index) => (
                <div key={index} className={`relative ${index % 2 === 1 ? 'md:mt-16' : ''}`}>
                  {/* Timeline node */}
                  <div className="hidden md:block absolute -left-2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white z-10"></div>
                  
                  <div className={`bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it – hear what our clients have to say.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                position: 'Marketing Director',
                company: 'TechCorp',
                image: '/testimonials/client1.jpg',
                quote: 'The team delivered exceptional results that exceeded our expectations. Their expertise in this field made a significant impact on our business.'
              },
              {
                name: 'Michael Chen',
                position: 'CEO',
                company: 'InnovateLabs',
                image: '/testimonials/client2.jpg',
                quote: 'Working with this team was a game-changer for our company. Their professional approach and attention to detail resulted in a product that our customers love.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="mr-4 relative">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      {/* Replace with actual image when available */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        Photo
                      </div>
                      {/* Uncomment when images are available */}
                      {/* <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">{testimonial.quote}</blockquote>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Featured Projects</h2>
            <p className="text-xl text-gray-600">Explore some of our best work in {service.title.toLowerCase()}.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-12 bg-gray-200">
                  {/* Replace with actual image when available */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
                  {/* Uncomment when images are available */}
                  {/* <Image
                    src={`/projects/project${project}.jpg`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg">Project Title</h3>
                    <p className="text-gray-200 text-sm">Brief project description</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent hover:bg-indigo-50 text-indigo-600 border border-indigo-200 hover:border-indigo-300 py-3 px-8 rounded-lg font-medium transition-colors duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Related Services</h2>
            <p className="text-xl text-gray-600">Discover other ways we can help your business grow.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.relatedServices?.map((relatedId) => {
              const relatedService = services[relatedId];
              if (!relatedService) return null;
              
              return (
                <Link 
                  href={`/services/${relatedId}`} 
                  key={relatedId}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                    {/* Replace with actual image when available */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Service Image
                    </div>
                    {/* Uncomment when images are available */}
                    {/* <Image
                      src={relatedService.image}
                      alt={relatedService.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-indigo-600 transition-colors duration-300">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.description}</p>
                    <div className="flex items-center text-indigo-600 font-medium">
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our {service.title.toLowerCase()} services.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: `How long does the typical ${service.title.toLowerCase()} project take?`,
                answer: 'The timeline depends on project scope and complexity. Most projects take between 4-12 weeks from kickoff to completion. We provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'We offer flexible pricing options including project-based, retainer, and hourly rates. Each solution is customized to your specific needs and budget. Contact us for a detailed quote.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch. Our team remains available for updates, troubleshooting, and enhancements.'
              },
              {
                question: 'What makes your approach different from other providers?',
                answer: 'Our approach combines deep industry expertise, cutting-edge technologies, and a focus on measurable results. We work collaboratively with you as a partner, not just a service provider.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-12 text-indigo-100">Let's discuss how our {service.title.toLowerCase()} expertise can help you achieve your goals.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-700 hover:bg-gray-100 py-4 px-10 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="bg-transparent hover:bg-indigo-800 border-2 border-white py-4 px-10 rounded-lg font-bold text-lg transition-colors duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(services).map((serviceId) => ({
    serviceId,
  }));
}