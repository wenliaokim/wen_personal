import { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import WelcomePage from './components/WelcomePage/WelcomePage';
import BgIntroduction from './components/BgIntroduction/BgIntroduction';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Navibar from './components/Navibar/Navibar';
import './App.css';

function App() {
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%"
        }
    });
    
    useEffect(() => {
        let slides = document.querySelectorAll(".panel");
		for (let i = 0; i < slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i], {pushFollowers: false})
				.addIndicators()
				.addTo(controller);
		}
    }, [])

    return (
        <div className="App">
            <Navibar />
            <WelcomePage />
            <BgIntroduction />
            <Skills />
            <Projects />
            <Experience />
        </div>
    );
}

export default App;
