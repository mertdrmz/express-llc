import HeroSection from "./components/HeroSection/heroSection";
import CtaSection from "./components/CtaSection/ctaSection";
import LLCFormation from "./components/LLCFormationSection/llcFormation";
import HowItWorks from "./components/hotItWorks/hotItWorks";


export default function Home() {
  return (
    <div >
     <HeroSection/>
     <CtaSection/>
     <LLCFormation/>
     <HowItWorks/>
    </div>
  );
}
