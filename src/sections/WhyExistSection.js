import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WhyExistSection = () => {
  return (
    <section className="premium-section py-5 bg-light">
      <Container fluid className="px-4 px-lg-5">

        <Row className="justify-content-center">
          <Col lg={10} xl={9}>

            {/* Section Heading */}
            <h2 className="section-heading text-center mb-3">
              Why this institution matters now
            </h2>

            {/* Problem Context */}
            <h5 className="text-center mb-4" style={{ color: '#6b4eff', fontWeight: 600 }}>
              The contemporary communication landscape is increasingly defined by:
            </h5>

            <Row className="justify-content-center mb-4">
              <Col md={9} lg={8}>
                <ul 
                  className="list-unstyled" 
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px' }}
                >
                  <li className="mb-3">• noise without depth,</li>
                  <li className="mb-3">• visibility without meaning,</li>
                  <li className="mb-3">• speed without understanding,</li>
                  <li className="mb-3">• fragmentation without coherence,</li>
                  <li className="mb-3">• and communication without responsibility.</li>
                </ul>
              </Col>
            </Row>

            <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
              Institutions often struggle to express themselves clearly.<br />
              Ideas struggle to reach people meaningfully.<br />
              Culture struggles to find thoughtful representation.
            </p>

            {/* Institutional Response */}
            <h5 className="text-center mb-4" style={{ color: '#6b4eff', fontWeight: 600 }}>
              VASUDHEVA Media exists to respond to this gap by creating:
            </h5>

            <Row className="justify-content-center mb-5">
              <Col md={9} lg={8}>
                <ul 
                  className="list-unstyled" 
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px' }}
                >
                  <li className="mb-3">• research-backed media,</li>
                  <li className="mb-3">• strategy-led communication systems,</li>
                  <li className="mb-3">• culturally grounded narratives,</li>
                  <li className="mb-3">• clear and responsible public expression,</li>
                  <li className="mb-3">• and long-term communication assets.</li>
                </ul>
              </Col>
            </Row>

            {/* Problem → Response Grid - Beautiful Cards */}
            <h5 className="text-center mb-4" style={{ color: '#6b4eff', fontWeight: 600 }}>
              Problem → Response
            </h5>

            <Row className="g-4 mb-5">
              {/* Card 1 */}
              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm overflow-hidden">
                  <div style={{ height: '5px', background: 'linear-gradient(to right, #3B82F6, #6366F1)' }}></div>
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col xs={5} className="text-end pe-3">
                        <strong style={{ color: '#334155' }}>Noise-heavy media</strong>
                      </Col>
                      <Col xs={2} className="text-center">
                        <span style={{ color: '#64748b', fontSize: '1.4rem' }}>→</span>
                      </Col>
                      <Col xs={5} className="ps-3">
                        <strong style={{ color: '#1E40AF' }}>Knowledge-rich communication</strong>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm overflow-hidden">
                  <div style={{ height: '5px', background: 'linear-gradient(to right, #EC4899, #DB2777)' }}></div>
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col xs={5} className="text-end pe-3">
                        <strong style={{ color: '#334155' }}>Shallow branding</strong>
                      </Col>
                      <Col xs={2} className="text-center">
                        <span style={{ color: '#64748b', fontSize: '1.4rem' }}>→</span>
                      </Col>
                      <Col xs={5} className="ps-3">
                        <strong style={{ color: '#831843' }}>Narrative depth</strong>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm overflow-hidden">
                  <div style={{ height: '5px', background: 'linear-gradient(to right, #14B8A6, #0F766E)' }}></div>
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col xs={5} className="text-end pe-3">
                        <strong style={{ color: '#334155' }}>Random content production</strong>
                      </Col>
                      <Col xs={2} className="text-center">
                        <span style={{ color: '#64748b', fontSize: '1.4rem' }}>→</span>
                      </Col>
                      <Col xs={5} className="ps-3">
                        <strong style={{ color: '#115E59' }}>Structured communication systems</strong>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 4 */}
              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm overflow-hidden">
                  <div style={{ height: '5px', background: 'linear-gradient(to right, #F59E0B, #D97706)' }}></div>
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col xs={5} className="text-end pe-3">
                        <strong style={{ color: '#334155' }}>Rootless digital expression</strong>
                      </Col>
                      <Col xs={2} className="text-center">
                        <span style={{ color: '#64748b', fontSize: '1.4rem' }}>→</span>
                      </Col>
                      <Col xs={5} className="ps-3">
                        <strong style={{ color: '#92400E' }}>Culture-aware communication</strong>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* CTA Buttons */}
            <div className="text-center">
              <Button 
                as={Link} 
                to="/about" 
                variant="dark" 
                size="lg" 
                className="me-3 mb-3 mb-md-0"
              >
                Why We Exist
              </Button>
              <Button 
                as={Link} 
                to="/who-we-serve" 
                variant="outline-dark" 
                size="lg"
              >
                Who We Serve
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyExistSection;