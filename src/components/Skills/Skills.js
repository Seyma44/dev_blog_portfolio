import React from 'react';
import { DiNodejs, DiReact, DiJsBadge,DiSass,DiCss3Full,DiHtml5 } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyle';

const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
    <ListItem>
        <picture>
          <DiJsBadge size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Javascript --
          </ListParagraph>
        </ListContainer> 
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js --
          </ListParagraph>
        </ListContainer> 
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejs size="5rem" />
        </picture>
         <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node --
          </ListParagraph>
        </ListContainer> 
      </ListItem>
      <ListItem>
        <picture>
          <DiSass size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            SaSS --
          </ListParagraph>
        </ListContainer> 
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3Full size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            CSS -- 
          </ListParagraph>
        </ListContainer> 
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML -- 
          </ListParagraph>
        </ListContainer> 
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
