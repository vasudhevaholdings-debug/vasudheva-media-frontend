import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Reports = () => {
  return (
    <>
      {/* HERO */}
      <section className="premium-section" style={{ backgroundColor: '#f8f9fa',  display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              {/* <p className="text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#6b4eff' }}>Reports &amp; White Papers</p> */}
              <h1 className="section-heading mb-4" style={{ fontSize: '3rem' }}>
                Research, reports and frameworks on media, communication and society
              </h1>
              <p className="lead mx-auto" style={{ maxWidth: '760px' }}>
                A collection of structured research reports, white papers and analytical frameworks that examine systems, institutions and practices.
              </p>
              <p className="text-muted mt-3">Not just ideas — but structured, researched and articulated knowledge.</p>
              <div className="mt-5">
                <Button as={Link} to="/insights/reports" variant="dark" className="me-3">Explore Reports</Button>
                <Button as={Link} to="#categories" variant="outline-dark">Download Reports</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT REPORTS ARE */}
      <section className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">What you will find here</h2>
          <Row className="g-4 justify-content-center">
            <Col md={8}>
              <p className="lead text-center">
                Research reports, white papers, analytical studies and conceptual frameworks.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FEATURED REPORTS */}
      <section className="premium-section bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Featured Reports</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>The State of Media and Communication Systems in India</h5>
                <p className="small text-muted">Research Report</p>
                <p className="small">A comprehensive study of the structure, evolution and dynamics of media and communication systems in India.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Strategic Communication Framework for Institutions</h5>
                <p className="small text-muted">White Paper</p>
                <p className="small">A structured framework for designing communication systems within institutions.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Cultural Communication and Public Engagement</h5>
                <p className="small text-muted">Analytical Study</p>
                <p className="small">An analysis of how cultural institutions communicate with contemporary audiences.</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="calm-card p-4 h-100">
                <h5>Knowledge Systems and Public Understanding</h5>
                <p className="small text-muted">Conceptual Report</p>
                <p className="small">An exploration of how knowledge is created, structured and communicated in modern societies.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="premium-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Explore by category</h2>
          <Row className="g-4">
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Media Systems Research</h5><p className="small">Studies on media structures and ecosystems</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Strategic Communication</h5><p className="small">Frameworks for institutional communication</p></Card></Col>
            <Col md={4}><Card className="calm-card p-4 h-100"><h5>Knowledge Systems</h5><p className="small">Research on knowledge creation and dissemination</p></Card></Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="premium-section text-center bg-dark text-light py-5">
        <Container>
          <h2 className="text-light">Ready to engage with serious research?</h2>
          <div className="mt-5">
            <Button as={Link} to="/insights/reports" variant="light" size="lg" className="me-3">Explore All Reports</Button>
            <Button as={Link} to="/insights" variant="outline-light" size="lg">Back to Insights</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Reports;