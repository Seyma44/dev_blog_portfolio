import Link from 'next/link';
import React from 'react';
import { AiFillGitlab, AiFillLinkedin } from 'react-icons/ai';
import {TiSocialGithub } from 'react-icons/ti'
import { DiCode } from 'react-icons/di';
import Head from 'next/head'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Head>
      <title>SeymaDEV</title>
        <meta name='description' content='Portfolio Website' />
        
    </Head>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#f46737",  marginBottom: '20;'}}>
        <Span> Seyma </Span><DiCode size="5rem" /> <Span> DEV </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="#myjourney">
          <NavLink>MyJourney</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="/blog">
          <NavLink>Blog</NavLink>
        </Link>
      </li>          
    </Div2>
      <Div3>
      <SocialIcons href="https://google.com">
          <AiFillGitlab size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <TiSocialGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
    
);

export default Header;
