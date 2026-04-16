import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const InsightsPreview = () => {
  const cardStyles = [
    { accent: '#3B82F6', title: '#1E40AF' },
    { accent: '#8B5CF6', title: '#4C1D95' },
    { accent: '#EC4899', title: '#831843' },
  ];

  // Pastel background colors for each card
  const cardBgColors = [
    '#bfe5e9',   // Light Blue
    '#e2c1e7',   // Light Purple
    '#f9c0c0'    // Light Pink
  ];

  const insights = [
    {
      title: "Understanding Institutional Communication in the Digital Age",
      desc: "How organisations can move beyond content toward structured communication systems."
    },
    {
      title: "Media as a System of Meaning, Not Just Output",
      desc: "Rethinking media beyond visibility and engagement."
    },
    {
      title: "Designing Communication Systems Instead of Content Output",
      desc: "Why institutions need architecture, not volume."
    }
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
          {insights.map((item, index) => (
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