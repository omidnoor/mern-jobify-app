import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="Jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            loko fit synth chillwave. Wayfarers chia distillery raw denim deep
            v. Twee gorpcore pitchfork, franzen narwhal gentrify cred kombucha
            raw denim kickstarter chillwave sustainable. Mixtape cold-pressed
            cloud bread cornhole next level.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <div className="">
          <img src={main} alt="Jobify" className="img main-img" />
        </div>
      </div>
    </main>
  );
};
export default Landing;
