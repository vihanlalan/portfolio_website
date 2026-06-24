import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Directional Prediction",
    category: "ML Classifier for Finance",
    tools: "LightGBM, SVM, OHLCV Features, Walk-Forward Validation",
    image: "/images/callhq.png",
    link: "https://github.com/vihanlalan/stock_price_predictor",
  },
  {
    title: "Dynamic Portfolio",
    category: "Risk-Constrained Rebalancing",
    tools: "Mean-Variance, Risk-Parity, Momentum, CPPI",
    image: "/images/whatsapp.png",
    link: "https://github.com/vihanlalan/portfolio_rebalancing",
  },
  {
    title: "Adaptive Market Hypothesis",
    category: "TBMD-AEH Implementation",
    tools: "Python, Quantitative Indicators, Time-Series",
    image: "/images/broki.png",
    link: "https://github.com/vihanlalan/tbmd-aeh",
  },
  {
    title: "Board Strategy Simulator",
    category: "AI-Powered Boardroom Chatbot",
    tools: "Llama 3.3 70B, Groq API, Node.js, Supabase, React",
    image: "/images/orrdr.png",
    link: "https://github.com/vihanlalan/ecell-chatbot",
  },
  {
    title: "Verifiable AI",
    category: "Blockchain-Assisted Federated Learning",
    tools: "Smart Contracts, Distributed Systems, Python",
    image: "/images/preview1.png",
    link: "https://github.com/vihanlalan/verifiable-ai",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
