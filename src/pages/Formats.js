import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Formats = () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>
                Formats
              </p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Formats as Communication Systems
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                We do not create isolated content.<br />
                We design complete communication formats — structured systems that carry meaning across time, platforms and audiences.
              </p>
              <div className="mt-5">
                <Button as={Link} to="/services" variant="dark" className="me-3">Explore Services</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Start a Project</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT FORMATS MEAN ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What Formats Mean at VASUDHEVA Media</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            Formats are not content types. They are complete communication systems — each with its own medium, form and delivery architecture — designed to translate complex ideas into clear, enduring and responsible expression.
          </p>
          <p className="lead text-center mt-4">
            Every format is built for depth, clarity and long-term institutional value.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — FORMAT ARCHITECTURE ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Three-Layer Format Architecture</h2>
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Layer 1 — Medium</strong>
                <p className="small mt-3">The primary channel through which the message travels (video, audio, written, hybrid, etc.).</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Layer 2 — Form</strong>
                <p className="small mt-3">The structural shape and narrative logic that organises the content.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="calm-card p-4 h-100">
                <strong>Layer 3 — System</strong>
                <p className="small mt-3">The distribution, audience engagement and evolution framework that keeps the format alive.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 5 — CORE FORMATS GRID ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Core Formats</h2>

          <Row className="g-4">
            {/* FORMAT 1 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>1. Institutional Narrative Films</h5>
                <p className="small">Long-form, research-driven films that communicate vision, pedagogy, identity and institutional purpose.</p>
              </Card>
            </Col>

            {/* FORMAT 2 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>2. Educational Video Series &amp; Learning Systems</h5>
                <p className="small">Structured, modular series that translate complex knowledge into accessible and engaging formats.</p>
              </Card>
            </Col>

            {/* FORMAT 3 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>3. Documentary &amp; Cultural Storytelling Formats</h5>
                <p className="small">In-depth explorations of memory, heritage, identity and contemporary culture.</p>
              </Card>
            </Col>

            {/* FORMAT 4 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>4. Strategic Communication Campaigns</h5>
                <p className="small">Multi-format systems designed for positioning, narrative coherence and sustained public engagement.</p>
              </Card>
            </Col>

            {/* FORMAT 5 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>5. Hybrid Multimedia Knowledge Assets</h5>
                <p className="small">Formats that integrate publishing, video, audio and interactive elements into unified knowledge systems.</p>
              </Card>
            </Col>

            {/* FORMAT 6 */}
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>6. Audience Engagement Platforms</h5>
                <p className="small">Digital-native formats with built-in distribution, feedback and evolution architecture.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 6 — HOW FORMATS ARE DESIGNED ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">How We Design Formats</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '700px' }}>
            Every format begins with deep research and institutional understanding, moves through narrative architecture, and is executed with responsibility and long-term orientation.
          </p>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Need a format that carries lasting meaning?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/services" variant="outline-light" size="lg">See All Services</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Formats;