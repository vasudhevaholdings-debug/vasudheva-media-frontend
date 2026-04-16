import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DifferentiatorsSection = () => {
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },
    { accent: '#8B5CF6', title: '#4C1D95' },
    { accent: '#EC4899', title: '#831843' },
    { accent: '#14B8A6', title: '#115E59' },
    { accent: '#F59E0B', title: '#92400E' },
    { accent: '#22C55E', title: '#166534' },
  ];

  // Pastel background colors for each card
  const cardBgColors = [
    '#bfe5e9', '#e2c1e7', '#f9c0c0',
    '#c0e9c0', '#f9e2c0', '#c0d9f9'
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
          {[
            { title: "Research-backed media", desc: "Every communication output is grounded in understanding — not assumption." },
            { title: "Culture-rooted communication", desc: "Work reflects awareness of social context, identity and cultural continuity." },
            { title: "Strategy-led execution", desc: "Media is aligned with narrative, audience, purpose and institutional meaning." },
            { title: "Institutional depth", desc: "Designed for serious organisations, not just campaigns or short-term output." },
            { title: "Cross-domain integration", desc: "Bridges media, knowledge, education, publishing and systems thinking." },
            { title: "Long-term orientation", desc: "Focus on building formats, properties and communication ecosystems — not just deliverables." },
          ].map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card 
                className="identity-card h-100 border-0 shadow-sm"
                style={{ 
                  overflow: 'hidden',
                  backgroundColor: cardBgColors[index]   // ← This was missing
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