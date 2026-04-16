import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CollaborationPreview = () => {
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },   // Blue
    { accent: '#8B5CF6', title: '#4C1D95' },   // Purple
    { accent: '#EC4899', title: '#831843' },   // Pink
    { accent: '#14B8A6', title: '#115E59' },   // Teal
  ];

  // Pastel background colors for each card
  const cardBgColors = [
    '#bfe5e9',   // Light Blue
    '#e2c1e7',   // Light Purple
    '#f9c0c0',   // Light Pink
    '#c0e9c0'    // Light Teal
  ];

  const pathways = [
    {
      title: "Partner With Us",
      desc: "Collaborate on institutional, strategic or long-term initiatives."
    },
    {
      title: "Work With Us",
      desc: "Join as part of the core team or extended network."
    },
    {
      title: "Freelancers and Collaborators",
      desc: "Work on projects across media, research and communication."
    },
    {
      title: "Research and Media Collaborations",
      desc: "Build joint intellectual and media initiatives."
    }
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
          {pathways.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card 
                className="identity-card h-100 border-0 shadow-sm"
                style={{ 
                  overflow: 'hidden',
                  backgroundColor: cardBgColors[index]
                }}
              >
                {/* Colored Top Bar */}
                <div style={{ height: '6px', background: cardStyles[index].accent }}></div>
                
                <Card.Body className="pt-4">
                  <h5 className="mb-3" style={{ color: cardStyles[index].title }}>
                    {item.title}
                  </h5>
                  <p className="small">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
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