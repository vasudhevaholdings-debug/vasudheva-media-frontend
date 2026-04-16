import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const IdentityGrid = () => {
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },
    { accent: '#8B5CF6', title: '#4C1D95' },
    { accent: '#EC4899', title: '#831843' },
    { accent: '#14B8A6', title: '#115E59' },
    { accent: '#F59E0B', title: '#92400E' },
    { accent: '#22C55E', title: '#166534' },
  ];

  // Pastel background colors
  const cardBgColors = [
    '#bfe5e9', '#e2c1e7', '#f9c0c0',
    '#c0e9c0', '#f9e2c0', '#c0d9f9'
  ];

  
  const icons = [
    "/images/1.png",           // Card 1
    "/images/2.png",           // Card 2
    "/images/3.png",     // Card 3
    "/images/4.png",      // Card 4
    "/images/5.png",               // Card 5
    "/images/6.png"         // Card 6
  ];

  const cardsData = [
    {
      title: "As a Media Company",
      desc: "Creates films, audio-visual formats, communication content and original media properties designed for depth, clarity and long-term relevance."
    },
    {
      title: "As a Communication Institution",
      desc: "Designs structured narratives, positioning systems and public communication strategies for institutions, ideas and individuals."
    },
    {
      title: "As a Cultural Enterprise",
      desc: "Engages with memory, identity, heritage and contemporary culture to produce media that is rooted yet forward-looking."
    },
    {
      title: "As a Knowledge Platform",
      desc: "Translates complex ideas, systems and institutions into accessible, intelligible and impactful media formats."
    },
    {
      title: "As an Intellectual Property Engine",
      desc: "Builds formats, frameworks, media properties and narrative systems that have long-term strategic and institutional value."
    },
    {
      title: "As a Social and Narrative Institution",
      desc: "Works with how society understands ideas, people and institutions — shaping public meaning through responsible communication."
    }
  ];

  return (
    <section className="premium-section py-5" style={{ 
      background: 'linear-gradient(135deg, #44493a 0%, #9b5a8c 40%, #60A5FA 70%, #E0F2FE 100%)',
      position: 'relative', overflow: 'hidden'
    }}>
      <Container>
        <h2 className="section-heading text-center mb-5">
          A Media Institution with Multiple Roles
        </h2>

        <Row className="g-4">
          {cardsData.map((card, index) => (
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

                <Card.Body className="pt-4 text-center">
                  
                  <img 
                    src={icons[index]} 
                    alt={card.title}
                    className="card-icon mb-3"
                    style={{ width: '65px', height: '65px', objectFit: 'contain',padding: '10px',borderRadius: '25% 30%', backgroundColor: '#ecd7a1', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />

                  <h5 className="mb-3" style={{ color: cardStyles[index].title }}>
                    {card.title}
                  </h5>
                  <p className="small">{card.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button as={Link} to="/what-we-do" variant="dark" size="lg">
            Explore What We Do
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default IdentityGrid;