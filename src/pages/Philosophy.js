import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Philosophy = () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>
                Philosophy
              </p>
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                A way of thinking about media,<br />communication and institutions
              </h1>
              <p className="lead mx-auto mb-4" style={{ maxWidth: '720px' }}>
                VASUDHEVA Media is not built merely as a company, but as a long-term intellectual and institutional project.
              </p>
              <p className="fw-medium" style={{ letterSpacing: '1px' }}>
                Not driven by trends, but guided by principles.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — FOUNDATIONAL IDEA ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">“Nurture the Next…”</h2>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            At the core of VASUDHEVA Media lies a simple but profound idea:<br />
            To nurture what does not yet fully exist — but must.
          </p>

          <Row className="g-5">
            <Col md={6}>
              <h5 className="mb-4">1. Nurturing Ideas</h5>
              <p className="small">Ideas require time, structure, articulation and expression.</p>
              <ul className="list-unstyled">
                <li className="mb-3">• developed, not rushed</li>
                <li className="mb-3">• refined, not diluted</li>
                <li className="mb-3">• communicated, not buried</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="mb-4">2. Nurturing People</h5>
              <p className="small">People are carriers of thought and capability.</p>
              <ul className="list-unstyled">
                <li className="mb-3">• enable thinking</li>
                <li className="mb-3">• develop expression</li>
                <li className="mb-3">• support intellectual growth</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="mb-4">3. Nurturing Institutions</h5>
              <p className="small">Strong institutions shape society and carry values across time.</p>
              <ul className="list-unstyled">
                <li className="mb-3">• strengthen institutional communication</li>
                <li className="mb-3">• build clarity and coherence</li>
                <li className="mb-3">• enable long-term credibility</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="mb-4">4. Nurturing Culture</h5>
              <p className="small">Culture is a continuously evolving system of meaning.</p>
              <ul className="list-unstyled">
                <li className="mb-3">• shaping narratives</li>
                <li className="mb-3">• preserving meaning</li>
                <li className="mb-3">• evolving identity</li>
              </ul>
            </Col>
          </Row>
          <p className="lead text-center mt-5">This is not short-term work. It is generative, long-term, and responsibility-driven.</p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — OUR WORLDVIEW ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">How we see the world</h2>
          <Row className="g-5">
            <Col md={6}>
              <h5 className="mb-3">4.1 The world is shaped by communication</h5>
              <p className="small">Ideas influence perception → Perception shapes action → Action shapes reality.<br /><strong>Communication is not secondary — it is foundational.</strong></p>
            </Col>
            <Col md={6}>
              <h5 className="mb-3">4.2 Media is not neutral</h5>
              <p className="small">Media frames reality, prioritizes narratives and influences attention.<br /><strong>Media must be created responsibly and consciously.</strong></p>
            </Col>
            <Col md={6}>
              <h5 className="mb-3">4.3 Knowledge must be structured and communicated</h5>
              <p className="small">Knowledge without communication remains inaccessible.<br /><strong>We work at the intersection of knowledge and communication.</strong></p>
            </Col>
            <Col md={6}>
              <h5 className="mb-3">4.4 Institutions matter</h5>
              <p className="small">Societies are shaped by institutions. Weak communication weakens institutions.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 5–9 — PHILOSOPHIES ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Philosophies</h2>

          {/* Philosophy of Media */}
          <div className="mb-5">
            <h5 className="mb-3">Philosophy of Media</h5>
            <p className="small">We see media as a system of meaning creation, a carrier of ideas, a shaper of perception.</p>
            <ul className="list-unstyled">
              <li>• Media should clarify, not confuse</li>
              <li>• Media should inform, not manipulate</li>
              <li>• Media should build, not fragment</li>
              <li>• Media should endure, not vanish instantly</li>
            </ul>
          </div>

          {/* Philosophy of Communication */}
          <div className="mb-5">
            <h5 className="mb-3">Philosophy of Communication</h5>
            <p className="small">Communication is structure, not messaging.</p>
            <ul className="list-unstyled">
              <li>• Clarity is more important than cleverness</li>
              <li>• Depth is more important than virality</li>
              <li>• Coherence is more important than volume</li>
            </ul>
          </div>

          {/* Philosophy of Knowledge */}
          <div className="mb-5">
            <h5 className="mb-3">Philosophy of Knowledge</h5>
            <p className="small">Knowledge must be structured, expressed and made accessible.</p>
          </div>

          {/* Philosophy of Culture */}
          <div className="mb-5">
            <h5 className="mb-3">Philosophy of Culture</h5>
            <p className="small">Culture is a continuously evolving system of meaning.</p>
          </div>

          {/* Philosophy of Institutions */}
          <div className="mb-5">
            <h5 className="mb-3">Philosophy of Institutions</h5>
            <p className="small">Institutions provide continuity, carry values and enable scale.</p>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 10 — CORE PRINCIPLES ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Principles that guide us</h2>
          <Row className="g-4 text-center">
            <Col md={4}><div className="calm-card p-4 h-100"><strong>Clarity</strong><br />We prioritize clarity over complexity.</div></Col>
            <Col md={4}><div className="calm-card p-4 h-100"><strong>Depth</strong><br />We value depth over superficial output.</div></Col>
            <Col md={4}><div className="calm-card p-4 h-100"><strong>Integrity</strong><br />We maintain alignment between intent and execution.</div></Col>
            <Col md={4}><div className="calm-card p-4 h-100"><strong>Responsibility</strong><br />We recognize the impact of communication.</div></Col>
            <Col md={4}><div className="calm-card p-4 h-100"><strong>Cultural Intelligence</strong><br />We respect context, history and meaning.</div></Col>
            <Col md={4}><div className="calm-card p-4 h-100"><strong>Long-term Orientation</strong><br />We build for continuity, not immediacy.</div></Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 11 — FROM PHILOSOPHY TO PRACTICE ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">How philosophy becomes action</h2>
          <Row className="g-4">
            <Col md={6}><div className="calm-card p-4"><strong>In research</strong><br />Structured inquiry • Contextual understanding</div></Col>
            <Col md={6}><div className="calm-card p-4"><strong>In strategy</strong><br />Clarity of objectives • Narrative coherence</div></Col>
            <Col md={6}><div className="calm-card p-4"><strong>In media production</strong><br />Thoughtful execution • Quality over quantity</div></Col>
            <Col md={6}><div className="calm-card p-4"><strong>In engagement</strong><br />Long-term partnerships • Institutional alignment</div></Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 12 — LONG-TERM ORIENTATION ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Thinking beyond the present</h2>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            VASUDHEVA Media is not designed for short-term gains or rapid scaling without depth.<br />
            It is designed for institutional development, intellectual contribution, cultural relevance and long-term impact.
          </p>
          <p className="text-center">We think in years, decades and institutional lifecycles.</p>
        </Container>
      </section>

      {/* ==================== SECTION 13 — CLOSING REFLECTION ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">A work in progress</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            This philosophy is not static. It evolves with experience, reflection and engagement.<br />
            VASUDHEVA Media is not a finished institution — but an evolving one.
          </p>
          <p className="lead text-center mt-5">We are building not just work, but a way of thinking and creating.</p>
        </Container>
      </section>

      {/* ==================== SECTION 14 — CTA BAND ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If this way of thinking resonates, let’s build together</h2>
          <div className="mt-5">
            <Button as={Link} to="/what-we-do" variant="light" size="lg" className="me-3">Explore What We Do</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Collaborate With Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Philosophy;