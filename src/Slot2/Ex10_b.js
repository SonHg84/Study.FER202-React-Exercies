import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex10 = () => {
  const koreanStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fafafa',
    color: '#333',
    minHeight: '100vh',
    paddingBottom: '50px'
  };

  const cardStyle = {
    border: 'none',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    transition: 'transform 0.3s ease'
  };

  const heroStyle = {
    backgroundColor: '#fff',
    borderRadius: '24px',
    padding: '60px 40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
    marginBottom: '40px',
    marginTop: '20px'
  };

  return (
    <div style={koreanStyle}>
      {/* Navigation */}
      <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: '700', letterSpacing: '1px' }}>
            PORTFOLIO.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="px-3">Giới thiệu</Nav.Link>
              <Nav.Link href="#skills" className="px-3">Kỹ năng</Nav.Link>
              <Nav.Link href="#certs" className="px-3">Chứng chỉ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        {/* Hero Section */}
        <div style={heroStyle} id="about" className="text-center text-md-start">
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <div 
                style={{
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e9ecef',
                  margin: '0 auto',
                  backgroundImage: 'url("https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/480537947_606501605480347_3756940618442408698_n.jpg?stp=dst-jpg_tt6&cstp=mx828x828&ctp=s828x828&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFOEIa-2UyejJdHMwLj_vHRJE1IrmU77T8kTUiuZTvtP1KbpoGQ5aNqabiPos4uJCjU6wuMSFYHQfC0mLsyGw5P&_nc_ohc=QTKWNLMRK48Q7kNvwHRhiiD&_nc_oc=Adp3hsI4G5fpjmYI4M8g0nyZkuCBop3oRKMJpSIbzjucXJTw_GXnfG1EfqoUKzu3yqY&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=frsgb5849BDm6HFw8ngmdA&_nc_ss=7a2a8&oh=00_AQL0M98JOq6G6_0C7aMBQUuMKI5rhdkB3-RjvKzNTst1BA&oe=6AB267EC")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                }}
              ></div>
            </Col>
            <Col md={8}>
              <Badge bg="light" text="secondary" className="mb-2 px-3 py-2 rounded-pill border">
                HE191304
              </Badge>
              <h1 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>HOÀNG VĂN SƠN</h1>
              <h5 className="text-muted mb-4 fw-light">
                Sinh viên năm 4 | Ngành Software Engineering | Đại học FPT
              </h5>
              <p className="lead fs-6 text-secondary" style={{ lineHeight: '1.8' }}>
                Xin chào! Mình là một nhà phát triển phần mềm với niềm đam mê tạo ra các giải pháp công nghệ 
                thanh lịch và hiệu quả. Mình luôn hướng tới sự tối giản trong thiết kế (Minimalism) và cấu trúc 
                mã nguồn sạch (Clean Code). Mục tiêu của mình là trở thành một Fullstack Developer xuất sắc.
              </p>
            </Col>
          </Row>
        </div>

        {/* Skills Section */}
        <h3 id="skills" className="fw-bold mb-4 mt-5 text-center" style={{ color: '#2c3e50' }}>Kỹ Năng Nổi Bật</h3>
        <Row>
          <Col md={6} className="mb-4">
            <Card style={cardStyle} className="h-100 p-4">
              <Card.Body>
                <h5 className="fw-bold mb-4">Front-end Development</h5>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted fw-semibold">ReactJS / NextJS</span>
                    <span className="text-muted">90%</span>
                  </div>
                  <ProgressBar variant="info" now={90} style={{ height: '6px' }} />
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted fw-semibold">JavaScript / TypeScript</span>
                    <span className="text-muted">85%</span>
                  </div>
                  <ProgressBar variant="info" now={85} style={{ height: '6px' }} />
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted fw-semibold">HTML / CSS / Bootstrap</span>
                    <span className="text-muted">95%</span>
                  </div>
                  <ProgressBar variant="info" now={95} style={{ height: '6px' }} />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card style={cardStyle} className="h-100 p-4">
              <Card.Body>
                <h5 className="fw-bold mb-4">Back-end & Database</h5>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted fw-semibold">Node.js / Express</span>
                    <span className="text-muted">80%</span>
                  </div>
                  <ProgressBar variant="secondary" now={80} style={{ height: '6px' }} />
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted fw-semibold">Java / Spring Boot</span>
                    <span className="text-muted">75%</span>
                  </div>
                  <ProgressBar variant="secondary" now={75} style={{ height: '6px' }} />
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted fw-semibold">SQL Server / MongoDB</span>
                    <span className="text-muted">85%</span>
                  </div>
                  <ProgressBar variant="secondary" now={85} style={{ height: '6px' }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Certifications Section */}
        <h3 id="certs" className="fw-bold mb-4 mt-5 text-center" style={{ color: '#2c3e50' }}>Chứng Chỉ & Thành Tích</h3>
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card style={cardStyle} className="text-center p-4 h-100">
              <Card.Body>
                <div className="fs-1 mb-3">🏆</div>
                <Card.Title className="fw-bold fs-5">AWS Certified Cloud Practitioner</Card.Title>
                <Card.Text className="text-muted small">
                  Amazon Web Services<br/>Cấp: Tháng 8, 2023
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={cardStyle} className="text-center p-4 h-100">
              <Card.Body>
                <div className="fs-1 mb-3">🏅</div>
                <Card.Title className="fw-bold fs-5">IELTS Academic 7.5</Card.Title>
                <Card.Text className="text-muted small">
                  British Council<br/>Cấp: Tháng 5, 2023
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={cardStyle} className="text-center p-4 h-100">
              <Card.Body>
                <div className="fs-1 mb-3">💻</div>
                <Card.Title className="fw-bold fs-5">Top 5 FPT Hackathon 2023</Card.Title>
                <Card.Text className="text-muted small">
                  FPT University<br/>Dự án: Hệ thống quản lý học tập thông minh
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <footer className="text-center pt-5 pb-4 text-muted border-top mt-5" style={{ backgroundColor: '#fff' }}>
        <small>© 2026 Hoang Van Son. Crafted with React & Bootstrap.</small>
      </footer>
    </div>
  );
};

export default Ex10;
