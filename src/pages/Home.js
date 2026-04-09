import HeroSection from '../sections/HeroSection';
import InstitutionalIntro from '../sections/InstitutionalIntro';
import IdentityGrid from '../sections/IdentityGrid';
import PhilosophySection from '../sections/PhilosophySection';
import WhyExistSection from '../sections/WhyExistSection';
import WhatWeDoSection from '../sections/WhatWeDoSection';
import DifferentiatorsSection from '../sections/DifferentiatorsSection';
import FeaturedWork from '../sections/FeaturedWork';
import Serve from '../sections/Serve';
import InsightsPreview from '../sections/InsightsPreview';
import CollaborationPreview from '../sections/CollaborationPreview';
import TrustStrip from '../sections/TrustStrip';
import FinalCTABand from '../sections/FinalCTABand';
const Home = () => {
  return (
    <>
      <HeroSection />
      <InstitutionalIntro />
      <IdentityGrid/>
      <PhilosophySection/>
      <WhyExistSection/>
      <WhatWeDoSection/>
      <DifferentiatorsSection/>
      <FeaturedWork/>
      <Serve/>
      <InsightsPreview/>
      <CollaborationPreview/>
      <TrustStrip/>
      <FinalCTABand/>
      
      {/* More sections will be added here step by step */}
    </>
  );
};

export default Home;