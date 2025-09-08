import "./HeroSection.css";
import Image from "next/image";
import { RedSvgIcon, BlueSvgIcon, SmallRedSvgIcon } from "./SvgIcon";
function HeroSection() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
        {/* Sol kolon */}
        <div className="hero-content align-start">
          <h1 className="hero-title">
            FORM YOUR
            <br />
            <span className="font-bold">U.S. COMPANY</span>
          </h1>
          <hr className="hr-herosection" />
          <p className="hero-subtitle">
            Join 1,000+ entrepreneurs who built their U.S. businesses with us.
            <br />
          </p>
          <p className="hero-subtitle mt-8">
            <span className="font-semibold">Same-day (even same-hour) </span>
            formations, transparent pricing, and every service your company
            needs — from tax IDs to banking, compliance, and tax returns.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="gap-4">
              <Image
                className="boss-shaking mb-4"
                src="/boss-shaking-hand-thanking-worker-good-job-1.png"
                alt="Hero Section Image"
                width={434}
                height={434}
              />
              <Image
                className="laptop-image ml-auto"
                src="/brunette-woman-typing-email-laptop-computer-while-sitting-home-selective-focus-hand-1.png"
                alt="Hero Section Image"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col gap-4">
              <RedSvgIcon />
              <BlueSvgIcon />
              <SmallRedSvgIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
