import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import Work from './pages/Work';
import Insights from './pages/Insights';
import WhoWeServe from './pages/WhoWeServe';
import Collaborate from './pages/Collaborate';
import Philosophy from './pages/Philosophy';
import WhyWeExist from './pages/WhyExist';
import Mission from './pages/Mission';
import Leadership from './pages/Leadership';
import Governance from './pages/Governance';
import Domain from './pages/Domains';
import Services from './pages/Services';
import Formats from './pages/Formats';
import Process from './pages/Process';
import Articles from './pages/Articles';
import Essays from './pages/Essays';
import Reports from './pages/Reports';
import Frameworks from './pages/Frameworks';
import PartnerWithUs from './pages/Partnerwithus';
import WorkWithUs from './pages/Workwithus';
import Contributors from './pages/Contributor';
import Internship from './pages/Internship';
import StartAProject from './pages/StartAProject';
import BookAConsultation from './pages/BookAConsultation';
import PartnershipInquiries from './pages/PartnershipInquiry';
import MediaPressInquiries from './pages/MediaPressInquiry';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      
        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />   
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/work" element={<Work />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/why-exist" element={<WhyWeExist />} />
        <Route path="/vision-mission-values" element={<Mission />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/domains" element={<Domain />} />
        <Route path="/services" element={<Services />} />
        <Route path="/formats" element={<Formats />} />
        <Route path="/process" element={<Process />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/essays" element={<Essays />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/internships-and-fellowships" element={<Internship />} />
        <Route path="/start-a-project" element={<StartAProject />} />
        <Route path="/book-a-consultation" element={<BookAConsultation />} />
        <Route path="/partnership-inquiries" element={<PartnershipInquiries />} />
        <Route path="/media-press-inquiries" element={<MediaPressInquiries />} />
       
        
        {/* Contact page add karna hai toh yahan daal do baad mein */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;