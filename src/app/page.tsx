import HeroSection from "./components/HeroSection/page";
import CtaSection from "./components/CtaSection/page";
import LLCFormation from "./components/LLCFormationSection/page";
import HowItWorks from "./components/hotItWorks/page";
import WhyChooseUs from "./components/WhyChooseUs/page";
import TablePage from "./components/TabloPage/page";
import PricingPage from "./components/PricingPage/page";
import TrustedPage from "./components/TrustedPage/page";
import TrustedPartners from "./components/TrustedPartners/page";
import UsInMedia from "./components/UsInMedia/page";
import FAQ from "./components/FAQ/page";
import SameDayStart from "./components/SameDayStart/page";
export default function Home() {
  return (
    <div className="min-h-screen">
     <HeroSection/>
     <CtaSection/>
     <LLCFormation/>
     <HowItWorks/>
     <WhyChooseUs/>
     <TablePage/>
     <PricingPage/>
     <TrustedPage/>
     <TrustedPartners/>
     <UsInMedia/>
     <FAQ/>
     <SameDayStart/>
    </div>
  );
}
