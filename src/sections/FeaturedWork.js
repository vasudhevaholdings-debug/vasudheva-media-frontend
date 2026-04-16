import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const FeaturedWork = () => {
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },
    { accent: '#8B5CF6', title: '#4C1D95' },
    { accent: '#EC4899', title: '#831843' },
    { accent: '#14B8A6', title: '#115E59' },
  ];

  // Pastel background colors for cards
  const cardBgColors = [
    '#bfe5e9',   // Light Blue
    '#e2c1e7',   // Light Purple
    '#f9c0c0',   // Light Pink
    '#c0e9c0'    // Light Teal
  ];

  const works = [
    {
      title: "Institutional Film for Educational Organisation",
      desc: "A narrative-driven film designed to communicate vision, pedagogy and institutional identity."
    },
    {
      title: "Educational Video Series on Conceptual Learning",
      desc: "Structured knowledge translation into engaging and accessible visual formats."
    },
    {
      title: "Brand Communication System for Institution",
      desc: "End-to-end narrative, positioning and communication architecture."
    },
    {
      title: "Digital Content Architecture Project",
      desc: "Design of scalable content and audience systems for sustained engagement."
    }
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
          {works.map((item, index) => (
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