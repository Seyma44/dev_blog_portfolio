import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding > 
      <LeftSection>
        <SectionTitle main center>
            Wellcome to<br />
            My Personal Website 
        </SectionTitle>
        <SectionText>
        Şeyma is a front-end developer, specializing in using interfaces such as 
        Atomic Architecture, React, and Canvas to create interactive experiences for her web developer portfolio’s viewers.
        </SectionText>
        <Button onClick={()=> window.location = '#footer'} >Contact</Button> 
      </LeftSection>
    </Section>
  </>
);

export default Hero;