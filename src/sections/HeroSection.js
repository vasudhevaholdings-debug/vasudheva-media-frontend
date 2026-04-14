import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="premium-section text-center py-5"
      style={{ 
        
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
     
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #431e35 0%, #e81ccc 40%, #fafa60 70%, #E0F2FE 100%)',
          zIndex: 1
        }}
      />

     
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/images/orange-smooth-wave-lines.jpg')`,
          backgroundSize: 'cover',           
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
          mixBlendMode: 'overlay',          
          opacity: 0.85                      
        }}
      />

      {/* 3. Dark Overlay for Text Readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.45)',
          zIndex: 3
        }}
      />

      {/* Main Content */}
      <Container style={{ position: 'relative', zIndex: 4 }}>
        <Row className="justify-content-center">
          <Col >

            <p className="text-uppercase mb-3 description hero-tagline" style={{ 
              letterSpacing: '3px', 
              color: '#BAE6FD', 
              fontWeight: '600' ,
              fontSize: '1.1rem'
            }}>
              Nurturing the Next…
            </p>
            
            <h1 className="section-heading mb-4" style={{ fontSize: '2.8rem', lineHeight: '1.2' }}>
              Research-backed media, communication and cultural storytelling
              for institutions, ideas and society.
            </h1>

            <p className="lead mb-5 mx-auto hero-description" style={{ 
              
              color: '#E0F2FE',
              
            }}>
              VASUDHEVA Media is a multidisciplinary media and communication
              institution that works at the intersection of media production, strategic
              communication, knowledge systems and cultural storytelling.<br/>
              We partner with institutions, founders, educators, organisations and
              public-facing entities to design meaningful narratives, build
              communication systems, and translate complex ideas into
              powerful, responsible and enduring media.
            </p>

            <p 
              className="fw-light text-uppercase mb-5 mx-auto hero-tertiary" 
              style={{ 
                letterSpacing: '8px', 
                fontSize: '1.05rem',
                color: '#BAE6FD',
                opacity: 0.95 
              }}
            >
              Media. Meaning. Culture. Institutions.
            </p>

            <div>
              <Button 
                as={Link} 
                to="/contact" 
                size="lg" 
                className="cta-button me-3 mb-3 mb-md-0"
                style={{ padding: '14px 36px', fontWeight: '600' }}
              >
                Start a Project
              </Button>
              <Button 
                as={Link} 
                to="/work" 
                variant="outline-light" 
                size="lg"
                style={{ padding: '14px 36px', fontWeight: '600' }}
              >
                Explore Our Work
              </Button>
            </div>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;