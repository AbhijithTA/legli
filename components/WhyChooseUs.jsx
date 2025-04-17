"use client";

import Image from "next/image";
import { MapPin, Users, Award, Phone, MessageSquare } from "lucide-react";

const WhyChooseUsComponent = () => {
  const reasons = [
    {
      icon: <Award className="w-12 h-12 text-emerald-400" />,
      title: "Exceptional Service",
      description:
        "Our dedicated team provides exceptional customer service with a commitment to excellence.",
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-400" />,
      title: "Trusted Experience",
      description:
        "We've built a reputation earning the trust of our valued clients through years of service.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-emerald-400" />,
      title: "UAE-Wide Coverage",
      description:
        "Serving clients across all seven emirates with accessible service no matter where you are.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Our Presence Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-400">
                Our Presence
              </h2>
              <p className="text-lg mb-6">
                We proudly serve clients across the UAE, including Abu Dhabi,
                Dubai, Sharjah, Umm al-Quwain, Fujairah, Ajman, and Ras
                al-Khaimah. No matter where you are, our services are just a
                call away.
              </p>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-emerald-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-emerald-400" />
                  Contact Us:
                </h3>
                <p className="mb-2">
                  For inquiries and assistance, please reach out to us at:
                </p>
                <p className="font-medium text-emerald-300">
                  Call: +971 56 540 0666
                </p>
              </div>
            </div>

            {/* Simple Document Clearance Image */}
            <div className="relative h-96 rounded-2xl border border-slate-700 overflow-hidden bg-slate-850">
              <div className="relative w-full h-full">
                <Image
                  src="/images/whyChooseUs.jpg"
                  alt="Document Clearance Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose
            <span className="text-emerald-400 uppercase pl-2 pr-2">
              Legli Profile
            </span>
            Documents Clearing Services LLC
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-300">
  Our dedicated team at <span className="text-emerald-400 font-semibold">Legli Profile</span> specializes in providing
  exceptional customer service. Over the years, we have built a
  reputation for commitment to excellence, earning the trust of our
  valued clients. With a relentless attitude towards problem-solving,
  we offer innovative solutions to even the most complex challenges.
</p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col items-center text-center group"
            >
              <div className="mb-5 bg-slate-900/50 p-4 rounded-full border border-slate-700 group-hover:border-emerald-500/30 transition-all duration-300 group-hover:shadow-md group-hover:shadow-emerald-500/10">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-300">
                {reason.title}
              </h3>
              <p className="text-slate-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-5 py-3 rounded-full shadow-lg shadow-emerald-500/20 flex items-center justify-center transition-all duration-300 transform hover:scale-105">
          <MessageSquare className="w-5 h-5 mr-2" />
          <span className="font-medium">Let's Chat!</span>
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUsComponent;