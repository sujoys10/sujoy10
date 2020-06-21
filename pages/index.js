import Head from 'next/head'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Section from '../components/Section'
import Projects from '../Containers/Projects'
import Blogs from '../Containers/Blogs'
import Skills from '../Containers/Skills'
import About from '../Containers/About'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sujoy</title>
        <link rel="icon" href="/favicon.png" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet">
        </link>
      </Head>
      <div>
        <Intro id="into" />
        <Section link="skills" title="skills">
          <Skills />
        </Section>
        <Section link="projects" title="projects">
          <Projects />
        </Section>
        <Section link="blogs" title="blogs">
          <Blogs />
        </Section>
        <Section link="about" title="about me">
          <About />
        </Section>
      </div>
    </Layout>
    
  )
}
