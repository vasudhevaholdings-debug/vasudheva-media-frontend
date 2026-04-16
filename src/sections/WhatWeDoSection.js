import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const WhatWeDoSection = () => {
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },
    { accent: '#8B5CF6', title: '#4C1D95' },
    { accent: '#EC4899', title: '#831843' },
    { accent: '#14B8A6', title: '#115E59' },
    { accent: '#F59E0B', title: '#92400E' },
    { accent: '#22C55E', title: '#166534' },
    { accent: '#6366F1', title: '#312E81' },
    { accent: '#F43F5E', title: '#881337' },
  ];

  return (
    <section className="premium-section py-5">
      <Container fluid className="px-4 px-lg-5">
        
        {/* Section Heading */}
        <h2 className="section-heading text-center mb-4">
          What We Do
        </h2>

        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '820px' }}>
          VASUDHEVA Media works across multiple, interconnected domains of
          media, communication, culture and knowledge — not as isolated
          services, but as an integrated system of capabilities.
        </p>

        {/* Cards Grid */}
        <Row className="g-4">
          {[
            { title: "Media Production", desc: "Films, visual storytelling and media formats designed with narrative depth and purpose." },
            { title: "Strategic Communication", desc: "Narrative design, positioning systems and communication architecture for institutions and ideas." },
            { title: "Branding and Campaign Systems", desc: "Identity, messaging and campaign frameworks that align communication with long-term goals." },
            { title: "Knowledge and Educational Media", desc: "Translation of complex ideas into structured, accessible learning formats." },
            { title: "Cultural and Documentary Media", desc: "Storytelling rooted in memory, heritage, identity and social reality." },
            { title: "Publishing-linked Multimedia", desc: "Integration of written knowledge with audio-visual formats and distribution systems." },
            { title: "Digital Platforms and Audience Systems", desc: "Design of platforms, content ecosystems and audience engagement frameworks." },
            { title: "Training, Labs and Talent Development", desc: "Workshops, labs and learning ecosystems for developing communication and media capability." },
          ].map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card 
                className="identity-card h-100 border-0 shadow-sm"
                style={{ 
                  overflow: 'hidden',
                  backgroundColor: ['#bfe5e9', '#e2c1e7', '#f9c0c0', '#c0e9c0', '#f9e2c0', '#c0d9f9', '#d1d1f9', '#f9d1e2'][index]
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
          <Button as={Link} to="/what-we-do" variant="dark" size="lg" className="me-3">
            Explore All Domains
          </Button>
          <Button as={Link} to="/what-we-do" variant="outline-dark" size="lg">
            View Services
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default WhatWeDoSection;