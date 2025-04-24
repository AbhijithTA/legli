// components/AboutUs.jsx
"use client";

import React from "react";
import Image from "next/image";
import { Clock, Award, Users, FileText } from "lucide-react";
import NavbarComponent from "@/components/NavbarComponent";
import Footer from "@/components/FooterComponent";

const AboutUs = () => {
  return (
    <>
      <NavbarComponent />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-navy-blue text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About Our Company
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Providing trusted document clearance and court services since
                  2023
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
                <img
                  src="/images/aboutUsHero.jpg"
                  alt="Descriptive text"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <style jsx>{`
            .bg-navy-blue {
              background-color: #0a192f;
            }
          `}</style>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/aboutUs.jpg"
                    alt="Description of image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6 text-navy-blue">
                  Our Story
                </h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2023, our document clearance company was
                  established with a mission to simplify the complex world of
                  legal documentation and court services. What began as a small
                  team of dedicated professionals has grown into a trusted
                  partner for individuals and businesses throughout the region.
                </p>
                <p className="text-gray-700">
                  With expertise in court services and document processing,
                  we've built our reputation on efficiency, accuracy, and
                  exceptional customer service. Our team brings years of
                  industry knowledge to help navigate bureaucratic challenges
                  and streamline documentation processes.
                </p>
              </div>
            </div>
          </div>
          <style jsx>{`
            .text-navy-blue {
              color: #0a192f;
            }
          `}</style>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-blue mb-4">
                Our Expertise
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We specialize in court services and document processing, helping
                our clients navigate complex legal requirements with ease and
                confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-navy-blue p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FileText size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy-blue">
                  Court Services
                </h3>
                <p className="text-gray-700">
                  Our team specializes in court documentation services,
                  providing expert assistance for legal proceedings and document
                  filings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-navy-blue p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Clock size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy-blue">
                  Quick Processing
                </h3>
                <p className="text-gray-700">
                  We understand that time matters. Our streamlined processes
                  ensure fast and efficient document handling and processing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-navy-blue p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy-blue">
                  Expert Guidance
                </h3>
                <p className="text-gray-700">
                  Our experienced team provides knowledgeable advice to help you
                  navigate complex documentation requirements with confidence.
                </p>
              </div>
            </div>
          </div>
          <style jsx>{`
            .bg-navy-blue {
              background-color: #0a192f;
            }
            .text-navy-blue {
              color: #0a192f;
            }
            .text-green-400 {
              color: #4ade80;
            }
          `}</style>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-bold mb-6 text-navy-blue">
                  Why Choose Us
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-navy-blue p-2 rounded-full mr-3 mt-1">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-navy-blue">
                        Industry Expertise
                      </h3>
                      <p className="text-gray-700">
                        Our team brings specialized knowledge of court systems
                        and document requirements to every case.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-navy-blue p-2 rounded-full mr-3 mt-1">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-navy-blue">
                        Client-Centered Approach
                      </h3>
                      <p className="text-gray-700">
                        We prioritize your needs, providing personalized service
                        and clear communication throughout the process.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-navy-blue p-2 rounded-full mr-3 mt-1">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-navy-blue">
                        Efficiency & Reliability
                      </h3>
                      <p className="text-gray-700">
                        Count on us for timely processing and accurate results,
                        every time.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-navy-blue p-8 rounded-lg shadow-lg text-white">
                  <div className="text-center mb-6">
                    <Users size={48} className="text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Our Commitment</h3>
                  </div>
                  <p className="mb-6">
                    We're committed to making document clearance and court
                    services accessible, understandable, and stress-free. Our
                    team works tirelessly to ensure your documentation needs are
                    handled with the utmost care and professionalism.
                  </p>
                  <div className="text-center">
                    <a href="/contactUs">
                    <button className="bg-green-400 hover:bg-green-500 text-navy-blue py-3 px-6 rounded-lg font-medium transition-colors">
                      Contact Our Team
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .bg-navy-blue {
              background-color: #0a192f;
            }
            .text-navy-blue {
              color: #0a192f;
            }
            .text-green-400 {
              color: #4ade80;
            }
            .bg-green-400 {
              background-color: #4ade80;
            }
            .hover\\:bg-green-500:hover {
              background-color: #22c55e;
            }
          `}</style>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;