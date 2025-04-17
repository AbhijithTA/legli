import Image from "next/image";
import NavbarComponent from '@/components/NavbarComponent'
import HeroComponent from '@/components/HeroComponent'
import WhyChooseUsComponent from '@/components/WhyChooseUs'
import ServicesSection from '@/components/OurServices'
import CTAHero from '@/components/CTOFooter'
import Footer from '@/components/FooterComponent'

export default function Home() {
  return (
    <>
    <NavbarComponent />
    <HeroComponent />
    <WhyChooseUsComponent />
    <ServicesSection />
    <CTAHero />
    <Footer />
    </>
  );
}
