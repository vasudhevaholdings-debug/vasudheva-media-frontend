import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Domains= () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>
                Domains
              </p>
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Our Domains of Work
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                Structured capabilities across media, communication and knowledge systems.
              </p>
              <div className="mt-5">
                <Button as={Link} to="/services" variant="dark" className="me-3">Explore Services</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Start a Project</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT DOMAINS MEAN ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Understanding our domains</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            At VASUDHEVA Media, domains are not departments. They are conceptual and operational fields that define how we approach problems, how we structure solutions, and how we organize work.
          </p>
          <p className="lead text-center mt-4">
            Each domain represents a distinct but interconnected capability layer.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — DOMAIN ARCHITECTURE ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">A layered capability system</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Level 1 — Foundational Domains</strong>
                <p className="small mt-3">Strategic Communication • Knowledge Systems</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Level 2 — Applied Domains</strong>
                <p className="small mt-3">Media Production • Branding and Campaign Systems</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Level 3 — Extended Domains</strong>
                <p className="small mt-3">Cultural and Documentary Media • Publishing-linked Multimedia • Digital Platforms and Audience Systems • Training, Labs and Talent Development</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 5 — CORE DOMAINS GRID ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Core Domains</h2>

          <Row className="g-4">
            {/* DOMAIN 1 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>DOMAIN 1 — MEDIA PRODUCTION</h5>
                <p className="small">Designing and producing high-quality media across formats including video, audio, written and hybrid systems.</p>
              </Card>
            </Col>

            {/* DOMAIN 2 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>DOMAIN 2 — STRATEGIC COMMUNICATION</h5>
                <p className="small">Structuring how institutions, ideas and individuals communicate.</p>
              </Card>
            </Col>

            {/* DOMAIN 3 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>DOMAIN 3 — BRANDING AND CAMPAIGN SYSTEMS</h5>
                <p className="small">Designing identity and communication systems for sustained engagement.</p>
              </Card>
            </Col>

            {/* DOMAIN 4 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>DOMAIN 4 — KNOWLEDGE AND EDUCATIONAL MEDIA</h5>
                <p className="small">Translating complex ideas into accessible, structured and engaging formats.</p>
              </Card>
            </Col>

            {/* DOMAIN 5 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>DOMAIN 5 — CULTURAL AND DOCUMENTARY MEDIA</h5>
                <p className="small">Exploring culture, history, society and identity through media.</p>
              </Card>
            </Col>

            {/* DOMAIN 6 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>DOMAIN 6 — PUBLISHING-LINKED MULTIMEDIA</h5>
                <p className="small">Integrating publishing with multimedia formats.</p>
              </Card>
            </Col>

            {/* DOMAIN 7 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>DOMAIN 7 — DIGITAL PLATFORMS AND AUDIENCE SYSTEMS</h5>
                <p className="small">Design of platforms, content ecosystems and audience engagement frameworks.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Which domain matches your needs?</h2>
          <div className="mt-5">
            <Button as={Link} to="/services" variant="light" size="lg" className="me-3">Explore Services</Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg">Start a Project</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Domains;