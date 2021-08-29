import React from 'react';
import { AiFillGitlab, AiFillLinkedin, } from 'react-icons/ai';
import {TiSocialGithub } from 'react-icons/ti'
import {FaHandPointUp} from 'react-icons/fa'
import { SocialIcons, Span } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import Link from 'next/link'
const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:444-444-4444">444-444-4444</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@seymadev.com">
            contact@seymadev.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2021, Templated and Coded by Seyma</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://google.com">
          <AiFillGitlab size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <TiSocialGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons>
        <Link href="/"> 
          <FaHandPointUp size="3rem" />
        </Link>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    
  );
};

export default Footer;
