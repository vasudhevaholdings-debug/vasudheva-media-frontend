import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Serve = () => {
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },
    { accent: '#8B5CF6', title: '#4C1D95' },
    { accent: '#EC4899', title: '#831843' },
    { accent: '#14B8A6', title: '#115E59' },
    { accent: '#F59E0B', title: '#92400E' },
    { accent: '#22C55E', title: '#166534' },
  ];

 
  const cardBgColors = [
    '#bfe5e9',   
    '#e2c1e7',   
    '#f9c0c0',   
    '#c0e9c0',   
    '#f9e2c0',   
    '#c0d9f9'    
  ];

  const sectors = [
    {
      title: "Schools, Colleges and Universities",
      desc: "Helping institutions communicate vision, pedagogy and identity."
    },
    {
      title: "Businesses and Startups",
      desc: "Building brand narratives, communication systems and market positioning."
    },
    {
      title: "NGOs and Social Organisations",
      desc: "Translating purpose-driven work into clear and impactful communication."
    },
    {
      title: "Cultural and Heritage Institutions",
      desc: "Documenting, preserving and communicating identity and memory."
    },
    {
      title: "Public Policy and Governance Actors",
      desc: "Creating structured communication for public engagement and clarity."
    },
    {
      title: "Creators, Authors and Experts",
      desc: "Transforming knowledge and ideas into structured media formats."
    }
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
          {sectors.map((item, index) => (
            <Col md={6} lg={4} key={index}>
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