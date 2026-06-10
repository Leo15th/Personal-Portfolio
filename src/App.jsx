// import Nav Bar
import Nav from "./components/Nav"
// import Home
import Home from "./components/Home"
//import About
import About from "./components/About"
//import Projects
import Projects from "./components/Projects"
// import Contact
import Contact from "./components/Contact"
// impoer Footer
import Footer from "./components/Footer"
export default function App(){
  return(
    <>
    <Nav/>
    <section id="home" className="scroll-mt-12"><Home/></section>
    <section id="about" className="scroll-mt-12"><About/></section>
    {/* <section id="skills" className="scroll-mt-12"><Skill/></section> */}
    <section id="projects" className="scroll-mt-12"><Projects/></section>
    <section id="contact" className="scroll-mt-12"><Contact/></section>
    <section><Footer/></section>
    </>
  )
}