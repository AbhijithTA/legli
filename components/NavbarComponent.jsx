"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true 
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contactUs" },
  ];

  const servicesList = [
    { title: "PRO Service", slug: "pro-service" },
    { title: "RTA License and Vehicle Renewal", slug: "rta-license" },
    { title: "Translation Services", slug: "translation-services" },
    { title: "Police Clearance Certificate", slug: "police-clearance" },
    { title: "Ejari Registration", slug: "ejari-registration" },
    { title: "Document Delivery Service", slug: "document-delivery" },
    { title: "LLC Agreement / MOA", slug: "llc-agreement" },
    { title: "Local Service Agent Contract", slug: "local-service-agent" },
    { title: "Business Partnership Contract & Supplement Agreements", slug: "business-partnership-contract" },
    { title: "Legal protection for investor interests", slug: "side-agreement-investors" },
    { title: "Online Medical Booking", slug: "online-medical-booking" },
    { title: "Online Health Card Renewal", slug: "medical-booking" },
    { title: "Online Health Card Renewal", slug: "online-health-card-renewal" },
    { title: "Power of Attorney", slug: "power-of-attorney" },
    { title: "Memorandum of Understanding (MoU)", slug: "memorandum-of-understanding" },
    { title: "Business Sales Agreement", slug: "business-sales-agreement" },
    { title: "Labour & Immigration Services", slug: "labour-immigration-services" },
    { title: "Bank Guarantee", slug: "bank-guarantee-service" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icons/LegliLogo.png"
                alt="Legali Profile Logo"
                width={40}
                height={40}
                className="h-20 w-16 object-contain"
              />
              <span className="text-2xl font-bold text-slate-800 uppercase">
                Legli Profile
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-emerald-600 transition-colors font-medium flex items-center"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </Link>
                  
                  {isServicesDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50 max-h-96 overflow-y-auto">
                      {servicesList.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium flex items-center"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Language + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:+97143300011"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>+971 43300011</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name} className="flex flex-col">
                    <button 
                      className="text-gray-700 hover:text-emerald-600 transition-colors font-medium flex items-center justify-between"
                      onClick={toggleMobileServices}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isMobileServicesOpen && (
                      <div className="pl-4 mt-2 border-l-2 border-emerald-200 flex flex-col space-y-2">
                        {servicesList.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="text-sm text-gray-600 hover:text-emerald-600 py-1"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                href="tel:+97143300011"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Us</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;