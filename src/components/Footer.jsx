import React,{useState} from "react";
import { Col, Nav, Navbar } from 'react-bootstrap';
import { Linkedin,Github,EnvelopeAt,EnvelopeAtFill,Telephone,TelephoneFill,BalloonHeartFill } from 'react-bootstrap-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Footer(){
  let currentYear = new Date().getFullYear();
  console.log(currentYear);
  const [mailCopied, setMailCopied] = useState(false);
  const [phoneCopied,setPhoneCopied] = useState(false);
  
  function handleMailCopy(){
    setMailCopied(true);
    setTimeout(() => setMailCopied(false), 400);
  }
  function handlePhoneCopy(){
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 400);
  }

    return( <Navbar className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 mb-0 border-top">
    <Col md={4} className="d-flex align-items-center">
      <Navbar.Brand href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 ms-2">
      <BalloonHeartFill width="24" height="24" />
      </Navbar.Brand>
      <span className="mb-3 mb-md-0 text-muted">© {currentYear} Peerawat Orankitvanit</span>
    </Col>

    <Nav className="col-md-4 justify-content-end list-unstyled d-flex">
      <Nav.Item className="ms-3">
      <Nav.Link href="https://www.linkedin.com/in/peerawatoran/" className="text-muted">
            <Linkedin width="24" height="24" />
          </Nav.Link>
      </Nav.Item>
      <Nav.Item className="ms-1">
      <Nav.Link href="https://github.com/aunpeerawat" className="text-muted">
            <Github width="24" height="24" />
          </Nav.Link>
      </Nav.Item>
      <Nav.Item className="ms-1">
      <CopyToClipboard text="peerawat.okn@gmail.com" onCopy={handleMailCopy}>
      <Nav.Link className="text-muted">
            {mailCopied ? (
          <EnvelopeAtFill width="24" height="24" />
        ) : (
          <EnvelopeAt width="24" height="24" />
        )}
        {mailCopied && <span style={{ marginLeft: '5px' }}>Copied!</span>}
          </Nav.Link>
          </CopyToClipboard>
      </Nav.Item>
      <Nav.Item className="ms-1">
      <CopyToClipboard text="0886933977" onCopy={handlePhoneCopy}>
      <Nav.Link className="text-muted">
            {phoneCopied ? (
          <TelephoneFill width="24" height="24" />
        ) : (
          <Telephone width="24" height="24" />
        )}
        {phoneCopied && <span style={{ marginLeft: '5px' }}>Copied!</span>}
          </Nav.Link>
          </CopyToClipboard>
      </Nav.Item>
    </Nav>
  </Navbar>);
}

export default Footer;