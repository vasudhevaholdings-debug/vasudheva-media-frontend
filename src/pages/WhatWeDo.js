import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section 
        className="premium-section text-center" 
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E2937 100%)',
          minHeight: '75vh', 
          display: 'flex', 
          alignItems: 'center',
          color: 'white'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem', color: '#E0F2FE' }}>
                Media, communication and narrative systems<br />
                for institutions, ideas and society.
              </h1>
              <p className="lead mx-auto mb-4" style={{ maxWidth: '720px', color: '#CBD5E1' }}>
                VASUDHEVA Media designs and delivers integrated communication systems that combine 
                research, strategy, storytelling and media production.
              </p>
              <p className="lead mx-auto mb-5" style={{ maxWidth: '720px', color: '#CBD5E1' }}>
                We work across domains—not as isolated services—but as a coherent institutional 
                capability that helps organisations, ideas and individuals communicate with clarity, 
                depth and long-term relevance.
              </p>
              <p className="mt-4 fw-medium" style={{ letterSpacing: '1px', fontSize: '1.1rem', color: '#67E8F9' }}>
                From research to narrative. From strategy to storytelling. From media to meaning.
              </p>
              <div className="mt-5">
                <Link to="#domains" className="btn btn-light btn-lg me-3">Explore Domains</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">Start a Project</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT WE DO ==================== */}
      <section className="premium-section" id="capability" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>
            What We Do
          </h2>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px', color: '#334155' }}>
            VASUDHEVA Media does not operate as a conventional service provider that produces 
            isolated pieces of content.<br /><br />
            Instead, it functions as a communication and media institution that designs, builds 
            and evolves complete communication systems.
          </p>

          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px', color: '#1E40AF', fontWeight: '600' }}>
            Our work is grounded in:
          </p>

          <Row className="g-4 justify-content-center mb-5">
            <Col md={10}>
              <ul className="list-unstyled text-left" style={{ fontSize: '1.1rem', lineHeight: '1.9', marginLeft: '20%' }}>
                <li className="mb-3">• Research — understanding context, audience and institutional reality</li>
                <li className="mb-3">• Strategy — structuring communication with purpose and direction</li>
                <li className="mb-3">• Narrative — shaping meaning, positioning and storytelling</li>
                <li className="mb-3">• Media Production — creating high-quality outputs across formats</li>
                <li className="mb-3">• System Thinking — building long-term communication architecture</li>
              </ul>
            </Col>
          </Row>

          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            We work through a structured capability cycle:<br />
            Understand → Design → Create → Deploy → Evolve
          </p>

          <p className="text-center lead mt-5" style={{ color: '#1E40AF' }}>
            We do not just produce communication—we design how communication works.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — HOW WE WORK ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>How We Work</h2>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '700px', color: '#334155' }}>
            Research → Strategy → Narrative → Production → Distribution → Impact
          </p>

          <Row className="g-4">
            {[
              { num: "1", title: "Research", desc: "We begin by understanding the institution, idea, audience and environment. This includes context analysis, problem diagnosis and communication gaps." },
              { num: "2", title: "Strategy", desc: "We define the communication architecture—what needs to be said, how, to whom and why. This includes positioning, messaging and structural clarity." },
              { num: "3", title: "Narrative", desc: "We translate strategy into storytelling frameworks—developing voice, tone, themes and storylines that carry meaning." },
              { num: "4", title: "Production", desc: "We create media outputs across formats—films, videos, written content, audio, and hybrid formats—ensuring both quality and coherence." },
              { num: "5", title: "Distribution", desc: "We help deploy communication across relevant platforms, channels and audiences." },
              { num: "6", title: "Impact", desc: "We assess how communication shapes perception, understanding and engagement—and refine accordingly." }
            ].map((step) => (
              <Col md={4} key={step.num} className="mb-4">
                <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#0F172A', color: 'white' }}>
                  <Card.Body className="text-center p-4">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                      style={{ 
                        width: '48px', 
                        height: '48px', 
                        backgroundColor: '#67E8F9',
                        color: '#0F172A',
                        fontWeight: 'bold',
                        fontSize: '1.3rem'
                      }}
                    >
                      {step.num}
                    </div>
                    <h5 style={{ color: '#67E8F9' }}>{step.title}</h5>
                    <p className="small" style={{ color: '#CBD5E1' }}>{step.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <p className="lead text-center mt-5" style={{ color: '#334155' }}>
            Communication is not a one-time output—it is a continuous institutional process.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 5 — DOMAINS ==================== */}
      <section className="premium-section" id="domains" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#E0F2FE' }}>Our Domains</h2>
          <p className="text-center lead mb-5" style={{ color: '#CBD5E1' }}>
            VASUDHEVA Media operates across multiple integrated domains.<br />
            Each domain represents a core area of expertise, but they are designed to work together.
          </p>

          <Row className="g-4">
            {[
              { title: "Media Production", desc: "Creation of films, video formats, audio-visual content and media outputs designed for clarity, engagement and long-term value." },
              { title: "Strategic Communication", desc: "Design of communication frameworks, positioning systems and narrative strategies for institutions and ideas." },
              { title: "Branding and Campaign Systems", desc: "Development of brand identity, messaging architecture and structured communication campaigns." },
              { title: "Knowledge and Educational Media", desc: "Translation of complex ideas into structured, accessible and engaging educational formats." },
              { title: "Cultural and Documentary Media", desc: "Creation of culturally grounded storytelling—documentaries, heritage narratives and identity-driven media." },
              { title: "Publishing-linked Multimedia", desc: "Integration of written, visual and audio formats for books, reports, research and intellectual outputs." },
              { title: "Digital Platforms and Audience Systems", desc: "Design of content ecosystems, digital platforms and audience engagement systems." },
              { title: "Training, Labs and Talent Development", desc: "Programs, workshops and labs for building communication capability and media literacy." }
            ].map((domain, i) => (
              <Col md={6} lg={4} key={i} className="mb-4">
                <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                  <Card.Body className="p-4">
                    <h5 style={{ color: '#67E8F9' }}>{domain.title}</h5>
                    <p className="small" style={{ color: '#CBD5E1' }}>{domain.desc}</p>
                    <Link to="#" className="btn btn-sm btn-outline-light mt-3">Explore Domain →</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button as={Link} to="/what-we-do" variant="light" size="lg">Explore All Domains</Button>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 6 — SERVICES ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>Our Services</h2>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '700px', color: '#334155' }}>
            Our services translate domain expertise into practical, actionable solutions for institutions, organisations and individuals.
          </p>

          <Row className="g-4">
            {[
              "Content Strategy", "Institutional Storytelling", "Brand Strategy and Narrative Design",
              "Strategic Communication Consulting", "Campaign Communication Systems", "Media Production Services",
              "Script, Research and Editorial", "Public Education and Awareness Design", "Social Media Systems"
            ].map((service, i) => (
              <Col md={6} lg={4} key={i} className="mb-4">
                <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#F1F5F9' }}>
                  <Card.Body className="p-4 text-center">
                    <h5 style={{ color: '#1E40AF' }}>{service}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button as={Link} to="/what-we-do" variant="dark" size="lg">Explore All Services</Button>
          </div>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Let’s design meaningful media and communication systems together.</h2>
          <p className="lead mt-3 mb-5" style={{ maxWidth: '700px', margin: '0 auto', color: '#CBD5E1' }}>
            If you are building an institution, shaping an idea or seeking structured communication—we would be glad to work with you.
          </p>
          <div>
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg">Book a Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhatWeDo;