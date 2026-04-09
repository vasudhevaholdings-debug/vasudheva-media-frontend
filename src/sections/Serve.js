import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Serve = () => {
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
        <h2 className="section-heading text-center mb-4">
          Who We Serve
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '820px' }}>
          We work with institutions, founders, organisations and individuals who
          seek clarity, depth and meaningful communication.
        </p>

        {/* 6 Sector Cards */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[0].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[0].title }}>
                  Schools, Colleges and Universities
                </h5>
                <p className="small">
                  Helping institutions communicate vision, pedagogy and identity.
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
                  Businesses and Startups
                </h5>
                <p className="small">
                  Building brand narratives, communication systems and market positioning.
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
                  NGOs and Social Organisations
                </h5>
                <p className="small">
                  Translating purpose-driven work into clear and impactful communication.
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
                  Cultural and Heritage Institutions
                </h5>
                <p className="small">
                  Documenting, preserving and communicating identity and memory.
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
                  Public Policy and Governance Actors
                </h5>
                <p className="small">
                  Creating structured communication for public engagement and clarity.
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
                  Creators, Authors and Experts
                </h5>
                <p className="small">
                  Transforming knowledge and ideas into structured media formats.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center mt-5">
          <Button 
            as={Link} 
            to="/who-we-serve" 
            variant="dark" 
            size="lg"
          >
            Explore Sector Solutions
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default Serve;