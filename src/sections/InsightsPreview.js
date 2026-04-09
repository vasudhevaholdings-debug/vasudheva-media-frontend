import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InsightsPreview = () => {
  // Beautiful accent colors for the 3 cards
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },   // Blue
    { accent: '#8B5CF6', title: '#4C1D95' },   // Purple
    { accent: '#EC4899', title: '#831843' },   // Pink
  ];

  return (
    <section className="premium-section py-5">
      <Container fluid className="px-4 px-lg-5">

        {/* Section Heading */}
        <h2 className="section-heading text-center mb-4">
          Ideas, Notes, Frameworks and Public Thinking
        </h2>

        {/* Intro */}
        <p className="lead text-center mx-auto mb-5" style={{ maxWidth: '820px' }}>
          VASUDHEVA Media is not only a practice but also a thinking institution.<br />
          We publish reflections, essays, frameworks and research on media,
          communication, culture and knowledge.
        </p>

        {/* Featured Insights */}
        <h5 className="text-center mb-4" style={{ color: '#6b4eff', fontWeight: 600 }}>
          Featured Insights
        </h5>

        <Row className="g-4">
          {/* Card 1 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[0].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[0].title }}>
                  Understanding Institutional Communication in the Digital Age
                </h5>
                <p className="small">
                  How organisations can move beyond content toward structured
                  communication systems.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[1].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[1].title }}>
                  Media as a System of Meaning, Not Just Output
                </h5>
                <p className="small">
                  Rethinking media beyond visibility and engagement.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div style={{ height: '6px', background: cardStyles[2].accent }}></div>
              <Card.Body className="pt-4">
                <h5 className="mb-3" style={{ color: cardStyles[2].title }}>
                  Designing Communication Systems Instead of Content Output
                </h5>
                <p className="small">
                  Why institutions need architecture, not volume.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Buttons */}
        <div className="text-center mt-5">
          <Button 
            as={Link} 
            to="/insights" 
            variant="dark" 
            size="lg" 
            className="me-3 mb-3 mb-md-0"
          >
            Explore Insights
          </Button>
          <Button 
            as={Link} 
            to="/insights" 
            variant="outline-dark" 
            size="lg"
          >
            Read Reports
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default InsightsPreview;