import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  // SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import { firstColFooter, secondColFooter } from "./FooterData";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

console.log(firstColFooter, secondColFooter);
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {firstColFooter.map((col) => (
              <FooterLinksItems key={col.linkTitle}>
                <FooterLinkTitle>{col.linkTitle}</FooterLinkTitle>
                {col.footerLink.map((link) => (
                  <FooterLink key={link.name} to={link.path}>
                    {link.name}
                  </FooterLink>
                ))}
              </FooterLinksItems>
            ))}
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            {secondColFooter.map((col) => (
              <FooterLinksItems key={col.linkTitle}>
                <FooterLinkTitle>{col.linkTitle}</FooterLinkTitle>
                {col.footerLink.map((link) => (
                  <FooterLink key={link.name} to={link.path}>
                    {link.name}
                  </FooterLink>
                ))}
              </FooterLinksItems>
            ))}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/">Leku</SocialLogo> */}
            <WebsiteRights>
              Leku &copy; {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Linkedin"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
