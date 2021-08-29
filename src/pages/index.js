import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BgAnimation/BackgroundAnimation';
import BackBubble from  '../components/BgAnimation/BackBubble';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Skills/Skills';
import Timeline from '../components/Slider/Slider';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
          <Hero />
          <BackBubble />
      </Section>
      <Projects />
      <Section grid>
          <Technologies />
          <BgAnimation />
      </Section>
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
