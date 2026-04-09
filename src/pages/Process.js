import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Process = () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>
                Our Process
              </p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                A structured, research-led process
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                We do not rush into production.<br />
                Every project is approached with depth, clarity and long-term institutional thinking.
              </p>
              <div className="mt-5">
                <Button as={Link} to="/services" variant="dark" className="me-3">Explore Services</Button>
                <Button as={Link} to="/contact" variant="outline-dark">Start a Project</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT PROCESS MEANS ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What Our Process Means</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            Our process is not a checklist. It is a disciplined, research-backed methodology designed to create meaningful, responsible and enduring communication systems.
          </p>
          <p className="lead text-center mt-4">
            It ensures that every output is rooted in understanding, aligned with purpose, and built for long-term value.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — PROCESS PHILOSOPHY ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Guided by “Nurture the Next…”</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '700px' }}>
            The process is rooted in our institutional philosophy — to cultivate depth over noise, clarity over confusion, and responsibility over virality.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 5 — PROCESS ARCHITECTURE ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Our 7-Stage Process Architecture</h2>
          <Row className="g-4">
            {/* STAGE 1 */}
            <Col md={6} lg={3}>
              <Card className="calm-card p-4 h-100 text-center">
                <div className="mb-3">
                  <span className="badge bg-primary rounded-circle px-3 py-2">01</span>
                </div>
                <h5>Research &amp; Understanding</h5>
                <p className="small">Deep immersion into context, audience, history and institutional goals.</p>
              </Card>
            </Col>

            {/* STAGE 2 */}
            <Col md={6} lg={3}>
              <Card className="calm-card p-4 h-100 text-center">
                <div className="mb-3">
                  <span className="badge bg-primary rounded-circle px-3 py-2">02</span>
                </div>
                <h5>Strategy &amp; Narrative Design</h5>
                <p className="small">Building the core narrative architecture and positioning system.</p>
              </Card>
            </Col>

            {/* STAGE 3 */}
            <Col md={6} lg={3}>
              <Card className="calm-card p-4 h-100 text-center">
                <div className="mb-3">
                  <span className="badge bg-primary rounded-circle px-3 py-2">03</span>
                </div>
                <h5>Format &amp; System Design</h5>
                <p className="small">Designing the right formats and delivery systems for maximum impact.</p>
              </Card>
            </Col>

            {/* STAGE 4 */}
            <Col md={6} lg={3}>
              <Card className="calm-card p-4 h-100 text-center">
                <div className="mb-3">
                  <span className="badge bg-primary rounded-circle px-3 py-2">04</span>
                </div>
                <h5>Production &amp; Execution</h5>
                <p className="small">Careful, high-quality creation of media and communication assets.</p>
              </Card>
            </Col>

            {/* STAGE 5 */}
            <Col md={6} lg={3}>
              <Card className="calm-card p-4 h-100 text-center">
                <div className="mb-3">
                  <span className="badge bg-primary rounded-circle px-3 py-2">05</span>
                </div>
                <h5>Distribution &amp; Engagement</h5>
                <p className="small">Strategic rollout and audience connection across platforms.</p>
              </Card>
            </Col>

            {/* STAGE 6 */}
            <Col md={6} lg={3}>
              <Card className="calm-card p-4 h-100 text-center">
                <div className="mb-3">
                  <span className="badge bg-primary rounded-circle px-3 py-2">06</span>
                </div>
                <h5>Feedback &amp; Iteration</h5>
                <p className="small">Continuous learning and refinement based on real-world response.</p>
              </Card>
            </Col>

            {/* STAGE 7 */}
            <Col md={6} lg={3}>
              <Card className="calm-card p-4 h-100 text-center">
                <div className="mb-3">
                  <span className="badge bg-primary rounded-circle px-3 py-2">07</span>
                </div>
                <h5>Evolution &amp; Long-term Value</h5>
                <p className="small">Building assets that continue to serve the institution for years.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 6 — HOW WE WORK ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">How the Process Actually Works</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '700px' }}>
            The process is iterative, collaborative and adaptive. We move forward only when the previous stage has delivered clarity and alignment.
          </p>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to begin a process that creates lasting meaning?</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/formats" variant="outline-light" size="lg">Explore Formats</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Process;