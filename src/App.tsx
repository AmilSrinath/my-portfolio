import { BrowserRouter } from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Tech,
    Works,
    StarsCanvas,
} from "./components";
import Footer from "./components/footer";

// App
const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />

                {/* Contact */}
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
