import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Work = () => {
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
                Work that reflects thinking,<br />narrative and execution
              </h1>
              <p className="lead mx-auto mb-4" style={{ maxWidth: '720px', color: '#CBD5E1' }}>
                VASUDHEVA Media's work is not a collection of isolated outputs.<br />
                It is the visible layer of deeper processes—research, strategic thinking, 
                narrative design and media production—applied across institutions, ideas, culture and society.
              </p>
              <p className="mt-4 fw-medium" style={{ letterSpacing: '1px', color: '#67E8F9' }}>
                From research and narrative to media and impact.
              </p>
              <div className="mt-5">
                <Link to="#featured" className="btn btn-light btn-lg me-3">Explore Case Studies</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">Start a Project</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT THIS WORK REPRESENTS ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>
            What this work represents
          </h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            The work presented here is not designed to showcase volume.<br />
            It is curated to demonstrate how VASUDHEVA Media thinks, designs and executes 
            communication and media systems.
          </p>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px', color: '#334155' }}>
            Each project reflects a layered process:<br />
            understanding institutional context, diagnosing communication challenges, 
            structuring narrative frameworks, and translating them into meaningful media outputs.
          </p>

          <Row className="g-4 text-center mb-5">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#0F172A', color: 'white' }}>
                <Card.Body>
                  <h5 className="fw-bold mb-4" style={{ color: '#67E8F9' }}>This is not:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">• random content production</li>
                    <li className="mb-3">• isolated creative output</li>
                    <li className="mb-3">• trend-driven execution</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#F1F5F9' }}>
                <Card.Body>
                  <h5 className="fw-bold mb-4" style={{ color: '#1E40AF' }}>This is:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">• structured communication work</li>
                    <li className="mb-3">• narrative design in practice</li>
                    <li className="mb-3">• media grounded in purpose and context</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            Every project is best understood as part of a larger communication system, 
            a broader narrative objective, and a long-term institutional direction.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — FEATURED WORK ==================== */}
      <section id="featured" className="premium-section" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#E0F2FE' }}>Featured Work</h2>
          <p className="text-center lead mb-5" style={{ color: '#CBD5E1' }}>
            A selection of work that represents the range, depth and approach of VASUDHEVA Media 
            across domains, sectors and formats.
          </p>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="p-4">
                  <h5 style={{ color: '#67E8F9' }}>Institutional Film — “Reimagining School Identity”</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    A narrative-led institutional film designed to reposition a school’s identity 
                    from operational messaging to a philosophy-driven public presence.
                  </p>
                  <p className="small" style={{ color: '#94A3B8' }}>Sector: Education • Domain: Institutional Storytelling</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="p-4">
                  <h5 style={{ color: '#67E8F9' }}>Communication System — NGO Awareness Architecture</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    Designed a multi-layer communication system combining storytelling, digital 
                    media and public awareness frameworks.
                  </p>
                  <p className="small" style={{ color: '#94A3B8' }}>Sector: Social / NGO • Domain: Strategic Communication</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="p-4">
                  <h5 style={{ color: '#67E8F9' }}>Educational Media Series — “Understanding Economy”</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    A structured video series translating complex economic ideas into accessible, 
                    layered explanations for students and public audiences.
                  </p>
                  <p className="small" style={{ color: '#94A3B8' }}>Sector: Knowledge / Education • Domain: Knowledge Media</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="p-4">
                  <h5 style={{ color: '#67E8F9' }}>Brand Narrative System — Startup Positioning</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    Developed a narrative architecture aligning product, mission and communication 
                    to establish clarity in market positioning.
                  </p>
                  <p className="small" style={{ color: '#94A3B8' }}>Sector: Business / Startup • Domain: Brand Strategy</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Button as={Link} to="/work" variant="light" size="lg" className="me-3">View All Work</Button>
            <Button as={Link} to="/work" variant="outline-light" size="lg">View Case Studies</Button>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 5 — BROWSE / FILTER ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>Browse Work</h2>
          <p className="text-center lead mb-5" style={{ color: '#334155' }}>
            Explore work based on your context, need or interest.
          </p>

          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-4" style={{ backgroundColor: '#1E2937', color: 'white' }}>
                <h5 style={{ color: '#67E8F9' }}>By Domain</h5>
                <p className="small" style={{ color: '#CBD5E1' }}>
                  Media Production, Strategic Communication, Branding, Knowledge Media, Cultural Media, Digital Platforms...
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-4" style={{ backgroundColor: '#1E2937', color: 'white' }}>
                <h5 style={{ color: '#67E8F9' }}>By Sector</h5>
                <p className="small" style={{ color: '#CBD5E1' }}>
                  Education, Businesses and Startups, NGOs, Cultural Institutions, Governance, Creators...
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-4" style={{ backgroundColor: '#1E2937', color: 'white' }}>
                <h5 style={{ color: '#67E8F9' }}>By Format</h5>
                <p className="small" style={{ color: '#CBD5E1' }}>
                  Video, Audio / Podcast, Written / Editorial, Hybrid Systems...
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If this resonates, let’s build something meaningful together</h2>
          <p className="lead mt-3 mb-5" style={{ maxWidth: '700px', margin: '0 auto', color: '#CBD5E1' }}>
            Whether you are an institution, an organisation, a founder, or an idea in formation — 
            we are interested in work that requires depth, clarity and seriousness.
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

export default Work;