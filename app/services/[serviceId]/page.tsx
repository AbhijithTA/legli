import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/data/services";
import NavbarComponent from "@/components/NavbarComponent";
import Footer from "@/components/FooterComponent";

type Props = {
  params: { serviceId: string };
};

export default function ServicePage({ params }: Props) {
  const service = services.find((service) => service.slug === params.serviceId);

  if (!service) return notFound();

  return (
    <>
      <NavbarComponent />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
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
                    src={service.image!}
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

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Key Features
              </h2>
              <p className="text-xl text-gray-600">
                Our {service.title.toLowerCase()} services are designed to
                deliver exceptional results that drive your business forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:shadow-md group"
                >
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {/* Feature icon - replace with appropriate icons */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    Our experts ensure this feature is implemented to the
                    highest standards for maximum effectiveness.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Our Process
              </h2>
              <p className="text-lg text-slate-600">
                A thoughtful approach for exceptional results
              </p>
            </div>

            <div className="relative mt-16">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>

              <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-20 relative">
                {[
                  {
                    title: "Discovery & Analysis",
                    description:
                      "Understanding your goals and requirements to create a strategic foundation.",
                    icon: "search",
                  },
                  {
                    title: "Strategy & Planning",
                    description:
                      "Developing a clear roadmap with defined milestones and deliverables.",
                    icon: "clipboard-list",
                  },
                  {
                    title: "Design & Development",
                    description:
                      "Creating solutions with modern best practices and technologies.",
                    icon: "code",
                  },
                  {
                    title: "Testing & Launch",
                    description:
                      "Thorough quality assurance before a seamless deployment.",
                    icon: "check-circle",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`relative ${index % 2 === 1 ? "md:mt-24" : ""}`}
                  >
                    {/* Timeline node */}
                    <div
                      className={`hidden md:flex absolute top-6 -translate-y-1/2 ${
                        index % 2 === 0
                          ? "right-0 translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      } w-10 h-10 rounded-full bg-white shadow-sm items-center justify-center z-10 border-2 border-white`}
                    >
                      <div className="w-4 h-4 rounded-full bg-sky-600"></div>
                    </div>

                    <div
                      className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative ${
                        index % 2 === 0 ? "md:mr-6 md:text-right" : "md:ml-6"
                      } group`}
                    >
                      <span className="inline-block mb-2 px-3 py-1 text-xs font-medium rounded-full bg-sky-50 text-sky-600">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold mb-3 text-slate-800">
                        {step.title}
                      </h3>
                      <p className="text-slate-600">{step.description}</p>

                      <div className="absolute -top-1 -left-1 w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center md:hidden">
                        {step.icon === "search" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-sky-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        )}
                        {step.icon === "clipboard-list" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-sky-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        )}
                        {step.icon === "code" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-sky-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        )}
                        {step.icon === "check-circle" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-sky-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our{" "}
                {service.title.toLowerCase()} services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: `How long does the typical ${service.title.toLowerCase()} project take?`,
                  answer:
                    "The timeline depends on project scope and complexity. Most projects take between 4-12 weeks from kickoff to completion. We provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "We offer flexible pricing options including project-based, retainer, and hourly rates. Each solution is customized to your specific needs and budget. Contact us for a detailed quote.",
                },
                {
                  question:
                    "Do you provide ongoing support after project completion?",
                  answer:
                    "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch. Our team remains available for updates, troubleshooting, and enhancements.",
                },
                {
                  question:
                    "What makes your approach different from other providers?",
                  answer:
                    "Our approach combines deep industry expertise, cutting-edge technologies, and a focus on measurable results. We work collaboratively with you as a partner, not just a service provider.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-slate-800 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-12 text-slate-200">
                Let's discuss how our expertise can help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-slate-800 hover:bg-gray-100 py-4 px-10 rounded-lg font-bold text-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                  Start Your Project
                </button>
                <button className="bg-transparent hover:bg-slate-700 border-2 border-white py-4 px-10 rounded-lg font-bold text-lg transition-colors duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(services).map((serviceId) => ({
    serviceId,
  }));
}
