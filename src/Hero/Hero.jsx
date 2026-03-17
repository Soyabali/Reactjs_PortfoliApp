import srk from "../assets/srk.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">

        {/* Left Content */}
        <div className="hero-text">
          <h1>Soyab Ali</h1>
          <p>Software Engineer | Frontend & App Developer</p>
          <button className="hero-btn">View My Work</button>
        </div>

        {/* Right Decorative Card */}
        <div className="hero-image">
          <img src={srk} alt="Soyab Ali" className="profile-img" />
        </div>

      </div>
    </section>
  );
};

export default Hero;