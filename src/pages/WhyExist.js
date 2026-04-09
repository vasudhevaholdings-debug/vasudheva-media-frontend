import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WhyWeExist = () => {
  return (
    <>
      {/* ==================== SECTION 2 — HERO ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>
                Why We Exist
              </p>
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Why institutions like VASUDHEVA Media need to exist
              </h1>
              <p className="lead mx-auto mb-4" style={{ maxWidth: '760px' }}>
                We operate in a world where communication is everywhere — but clarity is rare.<br />
                Where media is abundant — but meaning is diluted.<br />
                Where institutions exist — but struggle to express themselves coherently.
              </p>
              <p className="fw-medium" style={{ letterSpacing: '1px' }}>
                VASUDHEVA Media emerges as a response to these structural gaps.
              </p>
              <p className="mt-4" style={{ fontStyle: 'italic' }}>
                This is not about entering a market. It is about addressing a necessity.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — THE CONTEXT WE OPERATE IN ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Understanding the environment</h2>
          <Row className="g-5">
            <Col md={6}>
              <h5> Information Abundance</h5>
              <ul className="list-unstyled small">
                <li>• Unprecedented access to information</li>
                <li>• Constant content production</li>
                <li>• Accelerated distribution</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5> Attention Fragmentation</h5>
              <ul className="list-unstyled small">
                <li>• Limited attention spans</li>
                <li>• Competing narratives</li>
                <li>• Rapid consumption cycles</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5> Communication Overload</h5>
              <ul className="list-unstyled small">
                <li>• Excessive messaging</li>
                <li>• Lack of prioritization</li>
                <li>• Noise dominating signal</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5> Institutional Complexity</h5>
              <ul className="list-unstyled small">
                <li>• Organisations becoming more complex</li>
                <li>• Multiple stakeholders</li>
                <li>• Layered communication needs</li>
              </ul>
            </Col>
          </Row>
          <p className="lead text-center mt-5">
            Despite advancements in media and technology:<br />
            <strong>Clarity has not improved proportionately.</strong><br />
            <strong>Understanding has not deepened proportionately.</strong>
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — THE PROBLEM LANDSCAPE ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">The deeper problem</h2>
          <Row className="g-5">
            <Col md={6}>
              <h5> Noise without Meaning</h5>
              <ul className="list-unstyled small">
                <li>• Content without context</li>
                <li>• Messaging without depth</li>
                <li>• Communication without structure</li>
              </ul>
              <p className="small text-muted">Result: confusion, fatigue, disengagement</p>
            </Col>
            <Col md={6}>
              <h5> Fragmented Narratives</h5>
              <ul className="list-unstyled small">
                <li>• Inconsistent communication</li>
                <li>• Disconnected platforms</li>
                <li>• No unified narrative</li>
              </ul>
              <p className="small text-muted">Result: weak identity, diluted impact</p>
            </Col>
            <Col md={6}>
              <h5> Strategy–Execution Disconnect</h5>
              <ul className="list-unstyled small">
                <li>• Ideas without strategy</li>
                <li>• Content without grounding</li>
              </ul>
              <p className="small text-muted">Result: inefficiency, misalignment</p>
            </Col>
            <Col md={6}>
              <h5> Knowledge Without Communication</h5>
              <ul className="list-unstyled small">
                <li>• Research remains inaccessible</li>
                <li>• Expertise is not articulated</li>
              </ul>
              <p className="small text-muted">Result: lost value, limited public understanding</p>
            </Col>
            <Col md={6}>
              <h5> Communication Without Responsibility</h5>
              <ul className="list-unstyled small">
                <li>• Manipulation over meaning</li>
                <li>• Virality over value</li>
                <li>• Speed over accuracy</li>
              </ul>
              <p className="small text-muted">Result: erosion of trust, distorted perception</p>
            </Col>
            <Col md={6}>
              <h5> Weak Institutional Voice</h5>
              <ul className="list-unstyled small">
                <li>• Struggle to express identity</li>
                <li>• Lack of narrative consistency</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 5 — WHERE CURRENT SYSTEMS FALL SHORT ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Limitations of existing approaches</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4 h-100"><strong>Traditional Media</strong><br />Limited depth • Reactive</Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><strong>Marketing Agencies</strong><br />Short-term focus • Fragmented</Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><strong>Production Studios</strong><br />Strong execution • Weak strategy</Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><strong>Academic Institutions</strong><br />Strong knowledge • Weak communication</Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><strong>Independent Creators</strong><br />Flexible • Often inconsistent</Card></Col>
          </Row>
          <p className="lead text-center mt-5">Each system solves a part of the problem. None solves it holistically.</p>
        </Container>
      </section>

      {/* ==================== SECTION 6 — THE INSTITUTIONAL GAP ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">What is missing</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            There is a lack of institutions that integrate research, strategy and media with intellectual depth and long-term orientation.
          </p>
          <p className="text-center lead mt-4">
            <strong>The missing layer:</strong><br />
            A thinking-led, system-oriented communication institution.
          </p>
          <p className="text-center mt-5">This is the space VASUDHEVA Media is designed to occupy.</p>
        </Container>
      </section>

      {/* ==================== SECTION 7 — OUR RESPONSE ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">The institutional response</h2>
          <Row className="g-4">
            <Col md={6}><Card className="calm-card p-4"><strong> Bring Clarity</strong><br />Structure communication • Simplify complexity</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong> Build Narratives</strong><br />Develop coherent stories • Align meaning</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong> Integrate Domains</strong><br />Research • Strategy • Narrative • Media</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong> Strengthen Institutions</strong><br />Articulate identity • Build long-term credibility</Card></Col>
            <Col md={6}><Card className="calm-card p-4"><strong> Contribute to Knowledge &amp; Culture</strong><br />Create meaningful media • Engage with ideas</Card></Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 8–9 — PRACTICE &amp; WHY IT MATTERS ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">What this means in practice</h2>
          <Row className="g-4 text-center">
            <Col md={3}><div className="calm-card p-4">For institutions<br /><strong>Clearer systems • Stronger identity</strong></div></Col>
            <Col md={3}><div className="calm-card p-4">For organisations<br /><strong>Structured narratives</strong></div></Col>
            <Col md={3}><div className="calm-card p-4">For society<br /><strong>Better public understanding</strong></div></Col>
            <Col md={3}><div className="calm-card p-4">For knowledge systems<br /><strong>Improved accessibility</strong></div></Col>
          </Row>
        </Container>
      </section>

      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Why this matters</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            Communication shapes perception, decision-making and behaviour.<br />
            Poor communication leads to misunderstanding, inefficiency and distrust.<br />
            Strong communication enables clarity, alignment and progress.
          </p>
          <p className="lead text-center mt-5">This is not a functional problem. This is a structural societal problem.</p>
        </Container>
      </section>

      {/* ==================== SECTION 10 — IF GAP IGNORED ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Consequences of inaction</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            If these problems persist: noise will increase, clarity will decrease, institutions will weaken, trust will erode.
          </p>
          <p className="text-center lead mt-4">A society where information exists — but understanding does not.</p>
        </Container>
      </section>

      {/* ==================== SECTION 11 — LONG-TERM INTENT ==================== */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Long-term intent</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px' }}>
            VASUDHEVA Media is not built only to solve current problems.<br />
            It is built to create systems that evolve, intellectual infrastructure, and long-term communication quality.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 12 — CLOSING ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Closing statement</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '760px' }}>
            VASUDHEVA Media exists not because media is growing — but because meaning is declining.<br />
            It exists not because communication is increasing — but because clarity is missing.
          </p>
          <p className="lead text-center mt-5">This institution exists to bridge that gap.</p>
        </Container>
      </section>

      {/* ==================== SECTION 13 — CTA BAND ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If you see this problem, you are already part of the conversation</h2>
          <div className="mt-5">
            <Button as={Link} to="/what-we-do" variant="light" size="lg" className="me-3">Explore What We Do</Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/collaborate" variant="outline-light" size="lg">Collaborate With Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhyWeExist;