import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science & Engineering</h4>
                <h5>Dwarkadas J. Sanghvi College of Engineering</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science & Engineering with Honours in Data Analytics.
              Relevant coursework: Linear Algebra, Optimization, DSA, and Time-Series Econometrics.
            </p>
          </div>

          {/* Work Experience */}

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>Hyperminds Tech</h5>
              </div>
              <h3>June 2026–Present</h3>
            </div>
            <p>
              Working as a Software Development Engineer Intern, contributing to full-stack development and software engineering projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Consultant</h4>
                <h5>WorldQuant LLC</h5>
              </div>
              <h3>August 2025–Present</h3>
            </div>
            <p>
              Developing quantitative alpha signals, improving risk-adjusted performance
              with backtesting and hyperparameter optimization under realistic constraints.
            </p>
          </div>

          {/* Research Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research</h4>
                <h5>Adaptive Market Hypothesis</h5>
              </div>
              <h3>2026–Ongoing</h3>
            </div>
            <p>
              Focused on modeling and operationalizing the Adaptive Market Hypothesis
              using behavioural and quantitative market indicators.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research</h4>
                <h5>Quantum Walks on S&P 500</h5>
              </div>
              <h3>2026–Ongoing</h3>
            </div>
            <p>
              Researching the application of quantum walk frameworks on S&P 500
              market networks to analyse crash propagation and market instability.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;

