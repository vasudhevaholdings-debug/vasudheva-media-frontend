import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Collaborate = () => {
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
                Build with us
              </h1>
              <p className="lead mx-auto mb-4" style={{ maxWidth: '720px', color: '#CBD5E1' }}>
                VASUDHEVA Media is not just a company.<br />
                It is an evolving media, communication and knowledge institution—being built with long-term intent.
              </p>
              <p className="fw-medium" style={{ letterSpacing: '1px', color: '#67E8F9' }}>
                We are building something long-term—and we are open to building it with others.
              </p>
              <div className="mt-5">
                <Button as={Link} to="#pathways" variant="light" size="lg" className="me-3">Explore Opportunities</Button>
                <Button as={Link} to="/contact" variant="outline-light" size="lg">Submit Your Profile</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== SECTION 3 — COLLABORATION PHILOSOPHY ==================== */}
      <section className="premium-section" style={{ backgroundColor: '#F8FAFC' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>
            How we think about collaboration
          </h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: '800px', color: '#334155' }}>
            At VASUDHEVA Media, collaboration is not transactional.
          </p>

          <Row className="g-4 text-start mb-5 justify-content-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <Col md={6}>
              <p className="mb-4 fw-bold" style={{ color: '#EF4444' }}>We do not view collaboration as:</p>
              <ul className="list-unstyled">
                <li className="mb-3">• short-term outsourcing</li>
                <li className="mb-3">• fragmented contribution</li>
                <li className="mb-3">• purely commercial engagement</li>
              </ul>
            </Col>
            <Col md={6}>
              <p className="mb-4 fw-bold" style={{ color: '#10B981' }}>Instead, we see collaboration as:</p>
              <ul className="list-unstyled">
                <li className="mb-3">• a process of building together</li>
                <li className="mb-3">• aligning around ideas, intent and purpose</li>
                <li className="mb-3">• contributing to something that extends beyond individual projects</li>
              </ul>
            </Col>
          </Row>

          <h5 className="text-center mb-4" style={{ color: '#1E40AF' }}>Key Principles of Collaboration</h5>
          <Row className="g-4 text-center">
            <Col md={3}>
              <Card className="h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#1E2937', color: 'white' }}>
                <strong style={{ color: '#67E8F9' }}>1. Alignment over availability</strong>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#1E2937', color: 'white' }}>
                <strong style={{ color: '#67E8F9' }}>2. Depth over speed</strong>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#1E2937', color: 'white' }}>
                <strong style={{ color: '#67E8F9' }}>3. Long-term orientation</strong>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 border-0 shadow-sm p-4" style={{ backgroundColor: '#1E2937', color: 'white' }}>
                <strong style={{ color: '#67E8F9' }}>4. Mutual respect and clarity</strong>
              </Card>
            </Col>
          </Row>

          <p className="lead text-center mt-5" style={{ color: '#334155' }}>
            Collaboration, for us, is a way of building an institution together—not just completing tasks.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 4 — WHO WE COLLABORATE WITH ==================== */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#0F172A' }}>Who we collaborate with</h2>
          <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px', color: '#334155' }}>
            We work with a wide range of individuals and institutions, provided there is alignment in intent, seriousness and approach.
          </p>

          <Row className="g-4">
            {[
              "Institutions and Organisations",
              "Researchers and Thinkers",
              "Creators and Media Professionals",
              "Professionals and Specialists",
              "Students and Early-stage Participants"
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

          <p className="lead text-center mt-5" style={{ color: '#334155' }}>
            We value intent, clarity and seriousness more than labels or formal categories.
          </p>
        </Container>
      </section>

      {/* ==================== SECTION 5 — COLLABORATION PATHWAYS ==================== */}
      <section id="pathways" className="premium-section" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="section-heading text-center mb-5" style={{ color: '#E0F2FE' }}>Ways to collaborate</h2>
          <p className="text-center lead mb-5" style={{ color: '#CBD5E1' }}>
            Depending on your interest, background and intent, there are multiple ways to engage with VASUDHEVA Media.
          </p>

          <Row className="g-4">
            {/* Partner With Us */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Partner With Us</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For institutions, organisations and long-term collaborators</strong>
                  </p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    Work with us on communication systems, media projects, knowledge initiatives and long-term institutional partnerships.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Partnerships →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Work With Us */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Work With Us</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For individuals interested in full-time roles</strong>
                  </p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    Join the core team and contribute to building the institution, executing projects and shaping long-term direction.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">View Open Roles →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Freelancers and Contributors */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Freelancers and Contributors</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For project-based collaboration</strong>
                  </p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    Contribute to specific projects in media production, research, writing, design and communication.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Join as Contributor →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Internships and Fellowships */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Internships and Fellowships</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For learning and structured participation</strong>
                  </p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    Work closely with the team on research, media, communication and institutional projects.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Apply for Internship →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Research and Media Collaborations */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Research and Media Collaborations</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For intellectual and knowledge partnerships</strong>
                  </p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    Collaborate on research projects, publications, media-based knowledge initiatives and educational content.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Explore Research Collaborations →</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Sponsorships and Alliances */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#1E2937' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 style={{ color: '#67E8F9' }}>Sponsorships and Alliances</h5>
                  <p className="small mb-3" style={{ color: '#CBD5E1' }}>
                    <strong>For institutional support and alignment</strong>
                  </p>
                  <p className="small" style={{ color: '#CBD5E1' }}>
                    Support or co-build media properties, knowledge platforms and cultural initiatives.
                  </p>
                  <Button as={Link} to="#" variant="outline-light" size="sm" className="mt-auto">Discuss Alliances →</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">If you resonate with this, let’s connect</h2>
          <p className="lead mt-3 mb-5" style={{ maxWidth: '700px', margin: '0 auto', color: '#CBD5E1' }}>
            Whether you are an institution, a researcher, a creator, or someone looking to contribute meaningfully—we are open to thoughtful collaboration.
          </p>
          <div>
            <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">Submit Your Profile</Button>
            <Button as={Link} to="#" variant="outline-light" size="lg">Partner With Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Collaborate;