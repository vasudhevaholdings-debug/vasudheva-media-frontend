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

  return (
    <section className="premium-section  py-5" style={{ 
        background: 'linear-gradient(135deg, #44493a 0%, #9b5a8c 40%, #60A5FA 70%, #E0F2FE 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
      <Container>
        {/* Section Heading */}
        <h2 className="section-heading text-center mb-5">
          A Media Institution with Multiple Roles
        </h2>

        {/* 6-Card Grid */}
        <Row className="g-4">
          {/* Card 1 - Media Company */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm" style={{ overflow: 'hidden',backgroundColor: '#bfe5e9' }}>
              <div style={{ height: '6px', background: cardStyles[0].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[0].title }}>
                  As a Media Company
                </h5>
                <p className="small">
                  Creates films, audio-visual formats, communication content and original 
                  media properties designed for depth, clarity and long-term relevance.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 - Communication Institution */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm" style={{ overflow: 'hidden',backgroundColor: '#e2c1e7' }}>
              <div style={{ height: '6px', background: cardStyles[1].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[1].title }}>
                  As a Communication Institution
                </h5>
                <p className="small">
                  Designs structured narratives, positioning systems and public 
                  communication strategies for institutions, ideas and individuals.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 - Cultural Enterprise */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm" style={{ overflow: 'hidden',backgroundColor: '#f9c0c0' }}>
              <div style={{ height: '6px', background: cardStyles[2].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[2].title }}>
                  As a Cultural Enterprise
                </h5>
                <p className="small">
                  Engages with memory, identity, heritage and contemporary culture to 
                  produce media that is rooted yet forward-looking.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 - Knowledge Platform */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm" style={{ overflow: 'hidden',backgroundColor: '#c0e9c0' }}>
              <div style={{ height: '6px', background: cardStyles[3].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[3].title }}>
                  As a Knowledge Platform
                </h5>
                <p className="small">
                  Translates complex ideas, systems and institutions into accessible, 
                  intelligible and impactful media formats.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 5 - IP Engine */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm" style={{ overflow: 'hidden',backgroundColor: '#f9e2c0' }}>
              <div style={{ height: '6px', background: cardStyles[4].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[4].title }}>
                  As an Intellectual Property Engine
                </h5>
                <p className="small">
                  Builds formats, frameworks, media properties and narrative systems that 
                  have long-term strategic and institutional value.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 6 - Social & Narrative Institution */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm" style={{ overflow: 'hidden' ,backgroundColor: '#c0d9f9' }}>
              <div style={{ height: '6px', background: cardStyles[5].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[5].title }}>
                  As a Social and Narrative Institution
                </h5>
                <p className="small">
                  Works with how society understands ideas, people and institutions — 
                  shaping public meaning through responsible communication.
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
          >
            Explore What We Do
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default IdentityGrid;