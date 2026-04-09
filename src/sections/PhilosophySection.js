import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PhilosophySection = () => {
  return (
    <section className="premium-section py-5">
      <Container fluid className="px-4 px-lg-5">

        {/* Section Heading */}
        <h2 className="section-heading text-center mb-2">
          “Nurturing the Next…”
        </h2>
        
        <p className="text-center text-muted mb-5" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>
          This is not a slogan. It is a direction.
        </p>

        <Row className="justify-content-center">
          <Col lg={10} xl={8}>

            <p className="lead text-center mx-auto mb-4" style={{ maxWidth: '820px' }}>
              VASUDHEVA Media is built on the belief that meaningful communication
              is not merely produced — it is cultivated.
            </p>

            <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '820px' }}>
              To “Nurture the Next” means to consciously participate in the creation of:
            </p>

            <Row className="justify-content-center mb-5">
              <Col md={10} lg={8}>
                <ul 
                  className="list-unstyled" 
                  style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.9',
                    paddingLeft: '20px'
                  }}
                >
                  <li className="mb-3">• the next generation of ideas and narratives,</li>
                  <li className="mb-3">• the next generation of institutions and leaders,</li>
                  <li className="mb-3">• the next generation of media formats and communication systems,</li>
                  <li className="mb-3">• and the next generation of cultural and intellectual possibilities.</li>
                </ul>
              </Col>
            </Row>

            <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '820px' }}>
              It reflects a commitment to:<br />
              depth over noise, clarity over confusion, meaning over visibility,<br />
              and responsibility over virality.
            </p>

            <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '820px' }}>
              In a fragmented and accelerated media environment, nurturing becomes
              an act of intentional creation, care and continuity.
            </p>

            {/* Enhanced Pull Quote Box */}
            <div className="text-center mb-5">
              <blockquote 
                className="mx-auto p-5 rounded-4 shadow-sm"
                style={{ 
                  maxWidth: '720px',
                  background: 'linear-gradient(135deg, #972cad 0%, #29c4d9 100%)',
                  borderLeft: '6px solid #3B82F6',
                  fontStyle: 'italic',
                  fontSize: '1.32rem',
                  lineHeight: '1.65',
                  color: '#1e2937'
                }}
              >
                “We do not just create communication.<br />
                We cultivate what comes next.”
              </blockquote>
            </div>

            {/* CTA Buttons */}
            <div className="text-center">
              <Button 
                as={Link} 
                to="/about" 
                variant="dark" 
                size="lg" 
                className="me-3 mb-3 mb-md-0"
              >
                Read Our Philosophy
              </Button>
              <Button 
                as={Link} 
                to="/about" 
                variant="outline-dark" 
                size="lg"
              >
                Why We Exist
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PhilosophySection;