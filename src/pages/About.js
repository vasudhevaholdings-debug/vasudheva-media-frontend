import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* ==================== SECTION 2 — ABOUT HERO ==================== */}
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
                Building a research-backed, culture-rooted<br />
                media and communication institution for the future.
              </h1>
              <p className="lead mx-auto mb-4" style={{ maxWidth: '720px', color: '#CBD5E1' }}>
                VASUDHEVA Media is a multidisciplinary institution that integrates media production, 
                strategic communication, cultural storytelling and knowledge systems into a unified practice.
              </p>
              <p className="lead mx-auto" style={{ maxWidth: '720px', color: '#CBD5E1' }}>
                It is designed not as a conventional agency, but as a long-term institutional project — 
                one that seeks to shape how ideas, organisations and societies communicate, understand and evolve.
              </p>
              <p className="mt-5" style={{ fontStyle: 'italic', fontSize: '1.35rem', color: '#67E8F9' }}>
                Nurture the Next…
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — INSTITUTIONAL DEFINITION ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>
            What is VASUDHEVA Media?
          </h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            VASUDHEVA Media is a media and communication institution that operates at the intersection of 
            creative production, strategic thinking, cultural intelligence and knowledge translation.
          </p>

          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px', color: '#334155' }}>
            It is built to work with institutions, ideas and individuals who seek not just visibility, 
            but clarity, depth and meaningful public expression.
          </p>

          <p className="text-center mb-4 fw-bold" style={{ color: '#1E40AF' }}>
            At its core, the institution brings together multiple roles into a single integrated system:
          </p>

          <Row className="g-4 justify-content-center mb-5">
            <Col md={10}>
              <ul className="list-unstyled text-left" style={{ fontSize: '1.1rem', lineHeight: '1.9', marginLeft: '14%' }}>
                <li className="mb-3">• A media company that produces films, formats and communication outputs</li>
                <li className="mb-3">• A communication partner that designs narratives and positioning systems</li>
                <li className="mb-3">• A cultural enterprise that engages with identity, memory and society</li>
                <li className="mb-3">• A knowledge platform that translates complex ideas into accessible formats</li>
                <li className="mb-3">• An intellectual property builder that creates long-term media and narrative assets</li>
              </ul>
            </Col>
          </Row>

          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            The aim is not to produce more content, but to build better communication ecosystems.
          </p>

          <div className="text-center mt-5">
            <Button as={Link} to="/what-we-do" variant="dark" size="lg" className="me-3">Explore What We Do</Button>
            <Button as={Link} to="/about" variant="outline-dark" size="lg">Read Our Philosophy</Button>
          </div>
        </Container>
      </section>

      {/* ==================== SECTION 4 — WHAT WE ARE / WHAT WE ARE NOT ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#F1F5F9' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>
            What we are — and what we are not
          </h2>
          
          <Row className="g-5">
            {/* What We Are */}
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#0F172A', color: 'white' }}>
                <Card.Body className="p-5">
                  <h4 className="fw-bold mb-4" style={{ color: '#67E8F9' }}>What we are</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">• A research-backed media institution</li>
                    <li className="mb-3">• A strategic communication partner for institutions and ideas</li>
                    <li className="mb-3">• A cultural and intellectual storytelling platform</li>
                    <li className="mb-3">• A system-builder focused on long-term communication architecture</li>
                    <li className="mb-3">• An institution in formation with long-term intent</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* What We Are Not */}
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#F8FAFC' }}>
                <Card.Body className="p-5">
                  <h4 className="fw-bold mb-4" style={{ color: '#EF4444' }}>What we are not</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">• Not just a marketing or advertising agency</li>
                    <li className="mb-3">• Not just a production or content studio</li>
                    <li className="mb-3">• Not a volume-driven content vendor</li>
                    <li className="mb-3">• Not a trend-chasing digital media entity</li>
                    <li className="mb-3">• Not a short-term campaign execution service</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <p className="lead text-center mx-auto mt-5" style={{ maxWidth: '700px', color: '#334155' }}>
            We are designed for serious work, serious ideas and serious institutions.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 5 — IDENTITY ARCHITECTURE ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#E0F2FE' }}>
            A multi-dimensional institution
          </h2>
          <Row className="g-4">
            {[
              { title: "As a Media Company", desc: "We create films, video formats, audio content and communication outputs that are designed not only for visibility, but for clarity, engagement and long-term relevance." },
              { title: "As a Communication Institution", desc: "We design structured narratives, positioning systems and communication frameworks that help institutions express themselves with precision and coherence." },
              { title: "As a Cultural Enterprise", desc: "We work with culture not as decoration, but as a living system of meaning, engaging with identity, memory, heritage and contemporary expression." },
              { title: "As a Knowledge Platform", desc: "We translate complex ideas, disciplines and institutional knowledge into accessible, structured and impactful media formats." },
              { title: "As an Intellectual Property Builder", desc: "We develop formats, frameworks, series, and communication assets that generate long-term intellectual and institutional value." },
              { title: "As a Long-Term Institutional Project", desc: "VASUDHEVA Media is not designed for short-term output cycles. It is conceived as a growing institution, evolving across media, knowledge, culture and communication." }
            ].map((item, i) => (
              <Col md={6} lg={4} key={i} className="mb-4">
                <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                  <Card.Body className="p-4">
                    <h5 style={{ color: '#67E8F9' }}>{item.title}</h5>
                    <p className="small" style={{ color: '#CBD5E1' }}>{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Keep other sections or let me know if you want them updated too */}
    </>
  );
};

export default About;