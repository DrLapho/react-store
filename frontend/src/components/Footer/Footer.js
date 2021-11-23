import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Smart Bank</Col>
        </Row>
      </Container>
    </footer>

    // <FooterContainer>
    //     <FooterWrap>
    //         <FooterLinksContainer>
    //             <FooterLinksWrapper>
    //                 <FooterLinkItems>
    //                     <FooterLinkTitle>About Us </FooterLinkTitle>
    //                         <FooterLink to='/signin'>About</FooterLink>
    //                         <FooterLink to='/signin'>About</FooterLink>
    //                         <FooterLink to='/signin'>About</FooterLink>
    //                         <FooterLink to='/signin'>About</FooterLink>
    //                         <FooterLink to='/signin'>About</FooterLink>

    //                 </FooterLinkItems>
    //             </FooterLinksWrapper>
    //         </FooterLinksContainer>
    //     </FooterWrap>

    // </FooterContainer>
  );
};

export default Footer;
