import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Leadership = () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>
                Leadership
              </p>
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Leadership grounded in thinking, responsibility and long-term intent
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                VASUDHEVA Media is led with a commitment to building not just a company, but a thoughtful and enduring institution.<br />
                Leadership here is defined by clarity of thought, depth of understanding and responsibility toward the systems we engage with.
              </p>
              <p className="fw-medium mt-4">Not driven by visibility, but by direction.</p>
              <div className="mt-5">
                <Button as={Link} to="/about/philosophy" variant="outline-dark" className="me-3">Read Our Philosophy</Button>
                <Button as={Link} to="/work" variant="dark">Explore Our Work</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT LEADERSHIP MEANS HERE ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Leadership as institutional responsibility</h2>
          <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            At VASUDHEVA Media, leadership is not defined by hierarchy or position.
          </p>
          <Row className="g-4 justify-content-center">
            <Col md={3}><Card className="calm-card p-4 text-center h-100">The ability to think clearly</Card></Col>
            <Col md={3}><Card className="calm-card p-4 text-center h-100">The responsibility to act thoughtfully</Card></Col>
            <Col md={3}><Card className="calm-card p-4 text-center h-100">The discipline to build consistently</Card></Col>
            <Col md={3}><Card className="calm-card p-4 text-center h-100">The commitment to long-term impact</Card></Col>
          </Row>
          <p className="lead text-center mt-5">
            Leadership here is intellectual before operational, structural before symbolic, and responsibility-driven, not authority-driven.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — FOUNDER PROFILE ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Founder</h2>
          <Row className="align-items-center justify-content-center g-5">
            <Col md={4} className="text-center">
              {/* Placeholder for founder image - replace src when you add photo */}
              <div style={{ width: '220px', height: '220px', backgroundColor: '#e9ecef', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', color: '#6c757d' }}>
                Founder Photo<br />(Minimal portrait)
              </div>
            </Col>
            <Col md={8}>
              <h4>Shashank Singh</h4>
              <p className="text-muted">Founder, VASUDHEVA Media Pvt. Ltd.<br />Research-oriented thinker | Communication strategist | Institution builder</p>
              <p>
                Shashank Singh is building VASUDHEVA Media as a long-term institutional project at the intersection of media, communication, knowledge systems and culture.
              </p>
              <p>
                His work is driven by a deep interest in how ideas are formed, how they are communicated, and how they influence individuals, institutions and society.
              </p>
              <p className="small text-muted">His approach is shaped by multidisciplinary thinking, engagement with economic, social and institutional systems, and a focus on research, structure and clarity.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 5 — FOUNDER THINKING ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">How the founder thinks</h2>
          <Row className="g-4">
            <Col md={6}><Card className="calm-card p-4"><strong>Communication as Structure</strong><br />Communication is not messaging. It is the structuring of thought for clarity and understanding.</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong>Media as Meaning</strong><br />Media is not just content — it is a system that shapes perception.</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong>Knowledge as Foundation</strong><br />All meaningful communication must be rooted in knowledge.</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong>Institutions as Carriers of Continuity</strong><br />Institutions preserve values, enable scale and sustain impact.</Card></Col>
          </Row>
          <p className="text-center lead mt-5">"Clarity is not a byproduct. It is a deliberate construction."</p>
        </Container>
      </section>

      {/* ==================== SECTION 6 — LEADERSHIP APPROACH ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">How leadership translates into action</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4">Research-led Decision Making</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Structured Thinking</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Narrative Orientation</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Quality Discipline</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Long-term Alignment</Card></Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 7 — INSTITUTION BUILDING INTENT ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Beyond leadership — building an institution</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            The goal of leadership is not personal visibility. It is institutional development.
          </p>
          <Row className="g-4 justify-content-center">
            <Col md={3}><div className="calm-card p-4 text-center">Building systems, not dependencies</div></Col>
            <Col md={3}><div className="calm-card p-4 text-center">Developing teams, not just executing tasks</div></Col>
            <Col md={3}><div className="calm-card p-4 text-center">Creating frameworks, not just projects</div></Col>
            <Col md={3}><div className="calm-card p-4 text-center">Enabling continuity beyond individuals</div></Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 8 — FUTURE LEADERSHIP STRUCTURE ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">An evolving leadership structure</h2>
          <p className="lead text-center mx-auto">VASUDHEVA Media is in its early stages. Its leadership structure will evolve to include:</p>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4">Domain Leaders (Media, Communication, Research, Culture)</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Strategic Advisors (experts across disciplines)</Card></Col>
            <Col md={4}><Card className="calm-card p-4">Collaborative Leadership (project-based &amp; cross-functional teams)</Card></Col>
          </Row>
          <p className="text-center lead mt-4">To build a multi-dimensional leadership ecosystem, not a centralized authority structure.</p>
        </Container>
      </section>

      {/* ==================== SECTION 9 — ADVISORY / COLLABORATORS ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Advisors and collaborators</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '700px' }}>
            As the institution evolves, it will engage with researchers, practitioners, domain experts and institutional leaders.
          </p>
          <p className="text-center text-muted">(Profiles to be added as advisory network develops)</p>
        </Container>
      </section>

      {/* ==================== SECTION 10 — TRUST SIGNALS ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">A note on credibility</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '760px' }}>
            VASUDHEVA Media is built with seriousness of intent, commitment to depth, and discipline in execution.<br />
            Trust is not claimed — it is built through thinking, work and consistency.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 11 — CTA BAND ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If this leadership approach aligns with your expectations, let’s work together</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg" className="me-3">Collaborate With Us</Button>
            <Button as={Link} to="/work" variant="outline-light" size="lg">Explore Our Work</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Leadership;