import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Governance = () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>
                Governance &amp; Trust
              </p>
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Governance, responsibility and trust at the core of how we work
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                VASUDHEVA Media is built on the belief that meaningful work requires not only creativity and thinking, but also structure, discipline and responsibility.
              </p>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                This page outlines how we ensure that our work is reliable, ethical, consistent, and aligned with long-term trust.
              </p>
              <p className="fw-medium mt-4">Trust is not assumed. It is designed and practiced.</p>
              <div className="mt-5">
                <Button as={Link} to="/contact" variant="dark" className="me-3">Start a Project</Button>
                <Button as={Link} to="/work" variant="outline-dark">Explore Our Work</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT TRUST MEANS HERE ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Understanding trust in an institutional context</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            At VASUDHEVA Media, trust is not a claim. It is an outcome of clarity in communication, consistency in delivery, discipline in process, and responsibility in engagement.
          </p>
          <p className="lead text-center mt-4">Trust is built when expectations are clearly defined, commitments are respected, processes are transparent, and outcomes are aligned with intent.</p>
          <p className="lead text-center mt-5">We treat every engagement as a responsibility, not a transaction.</p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — GOVERNANCE PHILOSOPHY ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">How we think about governance</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            Governance is not about control. It is about ensuring alignment between intent, process and outcome.
          </p>
          <Row className="g-4 justify-content-center">
            <Col md={4}><Card className="calm-card p-4 text-center">Lightweight but structured</Card></Col>
            <Col md={4}><Card className="calm-card p-4 text-center">Flexible but disciplined</Card></Col>
            <Col md={4}><Card className="calm-card p-4 text-center">Context-sensitive but principled</Card></Col>
          </Row>
          <p className="lead text-center mt-5">A well-governed system reduces uncertainty, improves quality, and enables long-term relationships.</p>
        </Container>
      </section>

      {/* ==================== SECTION 5 — CORE GOVERNANCE PRINCIPLES ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Principles that guide our work</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4"><strong> Clarity</strong><br />Clear scope • Clear communication • Clear expectations</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong> Integrity</strong><br />Honest representation • Ethical communication • No misleading narratives</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong> Responsibility</strong><br />Ownership • Accountability • Commitment to outcomes</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong> Consistency</strong><br />Repeatable processes • Stable quality • Reliable delivery</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong> Confidentiality</strong><br />Respect for client information • Controlled access</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong> Long-term Orientation</strong><br />Decisions beyond short-term gains • Focus on sustainability</Card></Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 6 — HOW WE OPERATE ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Structured ways of working</h2>
          <Row className="g-4">
            <Col md={3}><Card className="calm-card p-4"> Project Structuring</Card></Col>
            <Col md={3}><Card className="calm-card p-4">Workflow Design</Card></Col>
            <Col md={3}><Card className="calm-card p-4"> Documentation</Card></Col>
            <Col md={3}><Card className="calm-card p-4"> Coordination</Card></Col>
          </Row>
          <p className="lead text-center mt-4">To ensure work is organized, trackable and reliable.</p>
        </Container>
      </section>

      {/* ==================== SECTION 7 — ETHICAL FRAMEWORK ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Ethics in communication and media</h2>
          <Row className="g-4">
            <Col md={3}><Card className="calm-card p-4"><strong> Truthfulness</strong></Card></Col>
            <Col md={3}><Card className="calm-card p-4"><strong> Responsible Communication</strong></Card></Col>
            <Col md={3}><Card className="calm-card p-4"><strong> Cultural Respect</strong></Card></Col>
            <Col md={3}><Card className="calm-card p-4"><strong> Avoidance of Harm</strong></Card></Col>
          </Row>
          <p className="lead text-center mt-5">We recognize that media and communication shape perception — and therefore carry responsibility.</p>
        </Container>
      </section>

      {/* ==================== SECTION 8 — CONFIDENTIALITY & DATA RESPONSIBILITY ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Handling information with care</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '700px' }}>
            We understand that client work often involves sensitive information, strategic insights and proprietary data.
          </p>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4">Restricted access • Need-based sharing</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Secure storage • Controlled communication</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Client retains ownership • No unauthorized use</Card></Col>
          </Row>
          <p className="small text-center mt-4">(NDAs available when required)</p>
        </Container>
      </section>

      {/* ==================== SECTION 9–13 — QUALITY, ACCOUNTABILITY, RISK, ENGAGEMENT, TRUST SIGNALS ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Quality Assurance • Accountability • Risk Management</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4">Multi-layer review • Defined standards • Continuous improvement</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Defined points of contact • Regular updates • Structured issue resolution</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Early problem identification • Structured planning • Contingency awareness</Card></Col>
          </Row>
        </Container>
      </section>

      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Engagement Process Transparency</h2>
          <Row className="g-4 text-center">
            <Col md={2}><div className="calm-card p-3">Step 1<br /><strong>Understanding</strong></div></Col>
            <Col md={2}><div className="calm-card p-3">Step 2<br /><strong>Structuring</strong></div></Col>
            <Col md={2}><div className="calm-card p-3">Step 3<br /><strong>Execution</strong></div></Col>
            <Col md={2}><div className="calm-card p-3">Step 4<br /><strong>Review</strong></div></Col>
            <Col md={2}><div className="calm-card p-3">Step 5<br /><strong>Delivery &amp; Closure</strong></div></Col>
          </Row>
        </Container>
      </section>

      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">A note on reliability</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '760px' }}>
            VASUDHEVA Media is built with seriousness of intent, discipline in execution, and clarity in communication.<br />
            Trust is reinforced through consistency, transparency, accountability and thoughtful engagement.
          </p>
          <p className="text-center lead mt-4">We prefer fewer, well-aligned engagements over high-volume, low-quality work.</p>
        </Container>
      </section>

      {/* ==================== SECTION 14 — CTA BAND ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If trust, clarity and structured work matter to you, let’s begin</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg" className="me-3">Book a Consultation</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Collaborate With Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Governance;