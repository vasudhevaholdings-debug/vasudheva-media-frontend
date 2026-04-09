import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VisionMissionValues = () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>
                Vision, Mission &amp; Values
              </p>
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Vision, Mission and Values — The Direction, Discipline and Doctrine of VASUDHEVA Media
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                VASUDHEVA Media is not guided by short-term objectives or isolated projects.<br />
                It is shaped by a long-term vision, driven by a clear mission, and grounded in deeply held values that define how we think, create and operate.
              </p>
              <p className="fw-medium mt-4">
                We do not just produce work. We build with intent, direction and responsibility.
              </p>
              <div className="mt-5">
                <Button as={Link} to="/philosophy" variant="outline-dark" className="me-3">Read Our Philosophy</Button>
                <Button as={Link} to="/what-we-do" variant="dark">Explore What We Do</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT THIS PAGE REPRESENTS ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">A doctrinal foundation</h2>
          {/* <p className="lead mx-auto text-center" style={{ maxWidth: '800px' }}>
            This page is not a symbolic declaration. It is the normative and operational foundation of VASUDHEVA Media.
          </p> */}
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="calm-card p-4 text-center h-100">
                <strong>What we are building</strong>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="calm-card p-4 text-center h-100">
                <strong>Why we are building it</strong>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="calm-card p-4 text-center h-100">
                <strong>How we choose to build it</strong>
              </Card>
            </Col>
          </Row>
          <p className="lead text-center mt-5">
            It serves as a guiding framework for decision-making, a benchmark for evaluating our work, and a filter for collaboration and alignment.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — VISION ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Vision</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            To build a deeply rooted, intellectually rigorous and culturally conscious media and communication institution that shapes how ideas, knowledge and narratives are created, understood and transmitted across society.
          </p>

          <h5 className="text-center mt-5 mb-4">VASUDHEVA Media envisions:</h5>
          <Row className="g-4">
            <Col md={6}><Card className="calm-card p-4">A media ecosystem where depth replaces noise</Card></Col>
            <Col md={6}><Card className="calm-card p-4">A communication landscape where clarity replaces confusion</Card></Col>
            <Col md={6}><Card className="calm-card p-4">A cultural space where meaning replaces superficiality</Card></Col>
            <Col md={6}><Card className="calm-card p-4">A knowledge system where understanding replaces information overload</Card></Col>
          </Row>

          <h5 className="text-center mt-5 mb-4">We aim to contribute to the creation of:</h5>
          <Row className="g-4">
            <Col md={3}><div className="calm-card p-4"><strong>1. Thoughtful Media Systems</strong></div></Col>
            <Col md={3}><div className="calm-card p-4"><strong>2. Strong Institutional Narratives</strong></div></Col>
            <Col md={3}><div className="calm-card p-4"><strong>3. Knowledge-Centered Communication</strong></div></Col>
            <Col md={3}><div className="calm-card p-4"><strong>4. Cultural Continuity and Evolution</strong></div></Col>
          </Row>

          <p className="text-center mt-5 lead">Our vision is long-term, institutional, interdisciplinary and generative.</p>
        </Container>
      </section>

      {/* ==================== SECTION 5 — MISSION ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Mission</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            To design, produce and evolve research-driven, narrative-led and culturally grounded media and communication systems for institutions, ideas and society.
          </p>

          <h5 className="text-center mt-5 mb-4">We operationalize our vision through five interconnected actions:</h5>
          <Row className="g-4">
            <Col md={6}><Card className="calm-card p-4"><strong>1. Understanding</strong><br />Research and Diagnosis</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong>2. Structuring</strong><br />Strategy and Design</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong>3. Creating</strong><br />Media and Content Production</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong>4. Communicating</strong><br />Distribution and Engagement</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong>5. Evolving</strong><br />Long-term Systems Building</Card></Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 6 — VALUES ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Values</h2>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
            Values are not slogans. They are operational commitments that shape how we think, work, collaborate and evaluate ourselves.
          </p>

          <Row className="g-4">
            {[
              { title: "1. Clarity", desc: "Precision in thinking • Clarity in communication • Structure in expression" },
              { title: "2. Depth", desc: "Research is non-negotiable • Insight precedes output" },
              { title: "3. Integrity", desc: "Intellectual honesty • Ethical communication • Responsible representation" },
              { title: "4. Cultural Intelligence", desc: "Sensitivity • Awareness • Authenticity" },
              { title: "5. Responsibility", desc: "Accountability • Awareness of impact • Long-term responsibility" },
              { title: "6. Quality", desc: "High production standards • Disciplined execution" },
              { title: "7. Long-Term Thinking", desc: "Systems over outputs • Institutions over transactions" },
              { title: "8. Collaboration", desc: "Aligned partnerships • Shared purpose • Mutual respect" },
              { title: "9. Learning and Evolution", desc: "Open to new ideas • Committed to growth" }
            ].map((value, i) => (
              <Col md={4} key={i}>
                <Card className="calm-card p-4 h-100">
                  <h5>{value.title}</h5>
                  <p className="small">{value.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 7 — INTEGRATED DOCTRINE ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">How Vision, Mission and Values work together</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '700px' }}>
            Vision defines where we are going<br />
            Mission defines what we are doing<br />
            Values define how we do it
          </p>
          <p className="text-center lead mt-4">Together they create coherence in direction, consistency in action, and integrity in execution.</p>
        </Container>
      </section>

      {/* ==================== SECTION 8 — OPERATIONAL TRANSLATION ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">From doctrine to action</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4"><strong>1. Project Selection</strong><br />Aligned with Vision &amp; Values</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong>2. Process Design</strong><br />Research → Strategy → Narrative → Execution</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong>3. Collaboration Standards</strong><br />Aligned partners only</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong>4. Quality Benchmarks</strong><br />Clarity • Impact • Coherence</Card></Col>
            <Col md={4}><Card className="calm-card p-4"><strong>5. Internal Culture</strong><br />Discipline • Reflection • Responsibility</Card></Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 9 — INSTITUTIONAL COMMITMENT ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">A commitment beyond statements</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            VASUDHEVA Media commits to building with seriousness, thinking with depth, communicating with clarity, and acting with responsibility.
          </p>
          <p className="lead text-center mt-4">
            Vision without execution is empty.<br />
            Mission without integrity is fragile.<br />
            Values without practice are meaningless.
          </p>
          <p className="text-center lead mt-5">Therefore, we continuously align our work with our doctrine.</p>
        </Container>
      </section>

      {/* ==================== SECTION 10 — CTA BAND ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If you align with how we think, let’s work together</h2>
          <div className="mt-5">
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg" className="me-3">Collaborate with Us</Button>
            <Button as={Link} to="/work" variant="outline-light" size="lg">Explore Our Work</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default VisionMissionValues;