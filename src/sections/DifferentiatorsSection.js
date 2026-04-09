import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DifferentiatorsSection = () => {
  // Beautiful accent colors for each card
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },   // Blue
    { accent: '#8B5CF6', title: '#4C1D95' },   // Purple
    { accent: '#EC4899', title: '#831843' },   // Pink
    { accent: '#14B8A6', title: '#115E59' },   // Teal
    { accent: '#F59E0B', title: '#92400E' },   // Amber
    { accent: '#22C55E', title: '#166534' },   // Green
  ];

  return (
    <section className="premium-section py-5 bg-light">
      <Container fluid className="px-4 px-lg-5">

        {/* Section Heading */}
        <h2 className="section-heading text-center mb-5">
          What makes VASUDHEVA Media different
        </h2>

        {/* 6 Differentiators Grid */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[0].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[0].title }}>
                  Research-backed media
                </h5>
                <p className="small">
                  Every communication output is grounded in understanding — not assumption.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[1].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[1].title }}>
                  Culture-rooted communication
                </h5>
                <p className="small">
                  Work reflects awareness of social context, identity and cultural continuity.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[2].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[2].title }}>
                  Strategy-led execution
                </h5>
                <p className="small">
                  Media is aligned with narrative, audience, purpose and institutional meaning.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[3].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[3].title }}>
                  Institutional depth
                </h5>
                <p className="small">
                  Designed for serious organisations, not just campaigns or short-term output.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 5 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[4].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[4].title }}>
                  Cross-domain integration
                </h5>
                <p className="small">
                  Bridges media, knowledge, education, publishing and systems thinking.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 6 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[5].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[5].title }}>
                  Long-term orientation
                </h5>
                <p className="small">
                  Focus on building formats, properties and communication ecosystems — 
                  not just deliverables.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center mt-5">
          <Button 
            as={Link} 
            to="/what-we-do" 
            variant="dark" 
            size="lg" 
            className="me-3 mb-3 mb-md-0"
          >
            See How We Work
          </Button>
          <Button 
            as={Link} 
            to="/what-we-do" 
            variant="outline-dark" 
            size="lg"
          >
            Explore Our Services
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default DifferentiatorsSection;