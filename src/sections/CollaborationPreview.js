import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CollaborationPreview = () => {
  // Beautiful accent colors for the 4 cards
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },   // Blue
    { accent: '#8B5CF6', title: '#4C1D95' },   // Purple
    { accent: '#EC4899', title: '#831843' },   // Pink
    { accent: '#14B8A6', title: '#115E59' },   // Teal
  ];

  return (
    <section className="premium-section py-5 bg-light">
      <Container fluid className="px-4 px-lg-5">

        {/* Section Heading */}
        <h2 className="section-heading text-center mb-4">
          Build With Us
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '820px' }}>
          We are interested not only in projects, but in building long-term
          collaborations, intellectual partnerships and creative ecosystems.
        </p>

        {/* Pathways - 4 Cards Grid */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col md={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[0].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[0].title }}>
                  Partner With Us
                </h5>
                <p className="small">
                  Collaborate on institutional, strategic or long-term initiatives.
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
                  Work With Us
                </h5>
                <p className="small">
                  Join as part of the core team or extended network.
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
                  Freelancers and Collaborators
                </h5>
                <p className="small">
                  Work on projects across media, research and communication.
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
                  Research and Media Collaborations
                </h5>
                <p className="small">
                  Build joint intellectual and media initiatives.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center mt-5">
          <Button 
            as={Link} 
            to="/collaborate" 
            variant="dark" 
            size="lg"
          >
            Explore Collaboration Pathways
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default CollaborationPreview;