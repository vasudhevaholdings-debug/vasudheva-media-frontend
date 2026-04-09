import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WhoWeServe = () => {
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
                Who we work with — and where we create meaningful<br />
                communication impact
              </h1>
              <p className="lead mx-auto mb-4" style={{ maxWidth: '720px', color: '#CBD5E1' }}>
                VASUDHEVA Media works with institutions, organisations, creators, and public-facing actors across diverse sectors where communication, narrative and media play a critical role.
              </p>
              <p className="fw-medium" style={{ letterSpacing: '1px', color: '#67E8F9' }}>
                From education to business, from culture to governance—wherever communication shapes perception, we engage.
              </p>
              <div className="mt-5">
                <Button as={Link} to="#sectors" variant="light" size="lg" className="me-3">Explore Sectors</Button>
                <Button as={Link} to="/contact" variant="outline-light" size="lg">Start a Project</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — WHAT THIS PAGE IS ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>
            Understanding relevance
          </h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            This page is designed to help you understand whether VASUDHEVA Media is relevant to your context.<br />
            Rather than presenting generic services, this section:
          </p>

          <Row className="g-4 justify-content-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <Col md={8}>
              <ul className="list-unstyled" style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
                <li className="mb-3">• maps our capabilities to real-world sectors</li>
                <li className="mb-3">• translates communication into practical application</li>
                <li className="mb-3">• and helps you identify where and how we can create value for you</li>
              </ul>
            </Col>
          </Row>

          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            If your work involves ideas, institutions, people or public communication — this page will help you locate your relevance.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — WHO WE TYPICALLY WORK WITH ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>
            Who we typically work with
          </h2>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px', color: '#334155' }}>
            While our work is adaptable, we most commonly engage with the following types of institutions and individuals:
          </p>

          <Row className="g-4">
            {[
              "Educational Institutions",
              "Businesses and Startups",
              "NGOs and Social Organisations",
              "Cultural and Heritage Institutions",
              "Public Policy and Governance",
              "Political and Civic Communication",
              "Creators, Authors and Experts"
            ].map((segment, i) => (
              <Col md={6} lg={4} key={i} className="mb-4">
                <Card 
                  className="h-100 border-0 shadow-sm text-center p-4" 
                  style={{ backgroundColor: '#1E2937', color: 'white' }}
                >
                  <Card.Body>
                    <h5 style={{ color: '#67E8F9' }}>{segment}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 5 — SECTOR CARDS ==================== */}
      <section id="sectors" className="premium-section" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#E0F2FE' }}>Explore by sector</h2>

          <Row className="g-4">
            {/* Education */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Education</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For institutions shaping learning and knowledge</strong>
                  </p>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>We work with:</p>
                  <ul className="list-unstyled small mb-3" style={{ color: '#CBD5E1' }}>
                    <li>• schools, colleges and universities</li>
                    <li>• coaching institutions and ed-tech platforms</li>
                  </ul>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>Focus areas:</p>
                  <ul className="list-unstyled small mb-4" style={{ color: '#CBD5E1' }}>
                    <li>• institutional communication</li>
                    <li>• educational media</li>
                    <li>• brand and narrative building</li>
                  </ul>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Education Solutions →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Business & Startups */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Business &amp; Startups</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For organisations building products, brands and markets</strong>
                  </p>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>We work with:</p>
                  <ul className="list-unstyled small mb-3" style={{ color: '#CBD5E1' }}>
                    <li>• founders</li>
                    <li>• startups</li>
                    <li>• growth-stage companies</li>
                  </ul>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>Focus areas:</p>
                  <ul className="list-unstyled small mb-4" style={{ color: '#CBD5E1' }}>
                    <li>• brand narrative</li>
                    <li>• communication strategy</li>
                    <li>• content systems</li>
                  </ul>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Business Solutions →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* NGOs & Social Sector */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>NGOs &amp; Social Sector</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For organisations working on social impact</strong>
                  </p>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>We work with:</p>
                  <ul className="list-unstyled small mb-3" style={{ color: '#CBD5E1' }}>
                    <li>• NGOs</li>
                    <li>• development organisations</li>
                    <li>• mission-driven institutions</li>
                  </ul>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>Focus areas:</p>
                  <ul className="list-unstyled small mb-4" style={{ color: '#CBD5E1' }}>
                    <li>• impact communication</li>
                    <li>• storytelling</li>
                    <li>• awareness campaigns</li>
                  </ul>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Social Sector Solutions →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Cultural & Heritage */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Cultural &amp; Heritage Institutions</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For organisations preserving and expressing culture</strong>
                  </p>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>We work with:</p>
                  <ul className="list-unstyled small mb-3" style={{ color: '#CBD5E1' }}>
                    <li>• museums</li>
                    <li>• cultural bodies</li>
                    <li>• heritage institutions</li>
                  </ul>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>Focus areas:</p>
                  <ul className="list-unstyled small mb-4" style={{ color: '#CBD5E1' }}>
                    <li>• cultural storytelling</li>
                    <li>• documentation</li>
                    <li>• contemporary communication</li>
                  </ul>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Cultural Solutions →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Public Policy & Governance */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Public Policy &amp; Governance</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For institutions shaping public systems and policy</strong>
                  </p>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>We work with:</p>
                  <ul className="list-unstyled small mb-3" style={{ color: '#CBD5E1' }}>
                    <li>• government bodies</li>
                    <li>• policy organisations</li>
                    <li>• public communication systems</li>
                  </ul>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>Focus areas:</p>
                  <ul className="list-unstyled small mb-4" style={{ color: '#CBD5E1' }}>
                    <li>• public communication</li>
                    <li>• policy explanation</li>
                    <li>• awareness systems</li>
                  </ul>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Governance Solutions →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Political & Civic */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Political &amp; Civic Communication</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For campaigns and public engagement efforts</strong>
                  </p>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>We work with:</p>
                  <ul className="list-unstyled small mb-3" style={{ color: '#CBD5E1' }}>
                    <li>• political actors</li>
                    <li>• civic initiatives</li>
                    <li>• public campaigns</li>
                  </ul>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>Focus areas:</p>
                  <ul className="list-unstyled small mb-4" style={{ color: '#CBD5E1' }}>
                    <li>• narrative strategy</li>
                    <li>• campaign communication</li>
                    <li>• audience engagement</li>
                  </ul>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Political Communication →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Creators & Experts */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Creators, Authors &amp; Experts</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For individuals building intellectual and creative presence</strong>
                  </p>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>We work with:</p>
                  <ul className="list-unstyled small mb-3" style={{ color: '#CBD5E1' }}>
                    <li>• authors</li>
                    <li>• educators</li>
                    <li>• researchers</li>
                    <li>• independent creators</li>
                  </ul>
                  <p className="small mb-2" style={{ color: '#94A3B8' }}>Focus areas:</p>
                  <ul className="list-unstyled small mb-4" style={{ color: '#CBD5E1' }}>
                    <li>• content systems</li>
                    <li>• personal brand</li>
                    <li>• knowledge dissemination</li>
                  </ul>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Creator Solutions →</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If you see your context here, let’s work together</h2>
          <p className="lead mt-3 mb-5" style={{ maxWidth: '700px', margin: '0 auto', color: '#CBD5E1' }}>
            If your work involves ideas, institutions, people, communication or public engagement — we can help bring clarity, structure and meaning to it.
          </p>
          <div>
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Start a Project</Button>
            <Button as={Link} to="/what-we-do" variant="outline-light" size="lg">Explore Services</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhoWeServe;