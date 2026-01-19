import BlurText from "./Elements/BlurText";
import bradPitt from "../assets/brad-pitt.png";
import PixelTransition from "./Elements/PixelTranslation";
import { useTheme } from "../contexts/ThemeContext";
import ShinyText from "./Elements/ShinyText";
import SplitText from "./Elements/SplitText";

const Home = () => {

    const {theme} = useTheme();

    return <div id = "home" className="flex justify-center m-20">
        <PixelTransition
        firstContent={
            <img
            src={bradPitt}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
        }
        secondContent={
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: `${theme === "dark"?"#09090b":"#e5e7eb"}`
            }}
            >
            <p style={{ fontWeight: 900, fontSize: "3rem", color: `${theme !== "dark"?"#09090b":"#e5e7eb"}` }}>Harshith</p>
            </div>
        }
        gridSize={12}
        pixelColor={`${theme ==="dark"?"#09090b":"#e5e7eb"}`}
        once={false}
        animationStepDuration={0.4}
        className="custom-pixel-card m-8"
        />
        <div className="flex flex-col justify-center ">
        <ShinyText
            text="🖳 Software Developer |✨ AI Enthusiast |🧑‍💻 Freelancer"
            speed={2}
            delay={0}
            color={`${theme === "dark"?"#d1d5db":"#09090b"}`}
            shineColor={`${theme === "dark"?"#4b5563":"#d1d5db"}`}
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            />
        <BlurText
            text="Hi,I am Harshith"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-7xl font-semibold mb-1 "
        />
        <div className="font-semibold mb-2">
                    Penultimate CSE Undergrad @ IIT Madras
                </div>
        <span className="w-136">
                <SplitText
                    text="My interests primarily revolve around systems, algorithms, and software engineering. My work includes backend-intensive web platforms and AI/ML problem-solving, and I actively welcome technically challenging opportunities driven by problem depth and my personal curiosity rather than alignment with my tech stack."
                    className="text-md font-light mt-4"
                    delay={10}
                    duration={0.13}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                />
                
        </span>
        </div>
    </div>
};


export default Home;