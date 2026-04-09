import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedWork = () => {
  // Beautiful accent colors for the 4 cards
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },   // Blue
    { accent: '#8B5CF6', title: '#4C1D95' },   // Purple
    { accent: '#EC4899', title: '#831843' },   // Pink
    { accent: '#14B8A6', title: '#115E59' },   // Teal
  ];

  return (
    <section className="premium-section py-5">
      <Container fluid className="px-4 px-lg-5">

        {/* Section Heading */}
        <h2 className="section-heading text-center mb-4">
          Selected Work and Proof of Capability
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '820px' }}>
          Our work spans institutions, ideas and communication systems — 
          combining storytelling, strategy and execution.
        </p>

        {/* 4 Featured Work Cards */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col md={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[0].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[0].title }}>
                  Institutional Film for Educational Organisation
                </h5>
                <p className="small">
                  A narrative-driven film designed to communicate vision, pedagogy and 
                  institutional identity.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[1].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[1].title }}>
                  Educational Video Series on Conceptual Learning
                </h5>
                <p className="small">
                  Structured knowledge translation into engaging and accessible visual 
                  formats.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[2].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[2].title }}>
                  Brand Communication System for Institution
                </h5>
                <p className="small">
                  End-to-end narrative, positioning and communication architecture.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col md={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[3].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[3].title }}>
                  Digital Content Architecture Project
                </h5>
                <p className="small">
                  Design of scalable content and audience systems for sustained 
                  engagement.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Buttons */}
        <div className="text-center mt-5">
          <Button 
            as={Link} 
            to="/work" 
            variant="dark" 
            size="lg" 
            className="me-3 mb-3 mb-md-0"
          >
            Explore Our Work
          </Button>
          <Button 
            as={Link} 
            to="/work" 
            variant="outline-dark" 
            size="lg"
          >
            View Case Studies
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default FeaturedWork;