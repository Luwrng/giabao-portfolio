import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
    return (
        <div className="portfolio" id="top">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer copyright="© 2026 Gia Bao" />
        </div>
    );
}

export default App
