import Button from "./Button";
import ClientVideo from "./ClientVideo";

function Hero() {
  return (
    <section className="section--hero">
      <div className="hero container--hero grid grid--2-cols grid--align-v">
        <HeroText />

        <div className="hero__video-wrapper flex">
          <ClientVideo className="hero__video" />
        </div>
      </div>
    </section>
  );
}

function HeroText() {
  return (
    <div className="hero__text">
      <h1 className="heading heading--primary">
        individualized fitness for adults 50+ years old
      </h1>

      <p className="hero__description">
        providing adults age 50+ <br />
        <span className="hero__emphasize">comprehensive, </span>
        <span className="hero__emphasize">effective, </span> and
        <span className="hero__emphasize"> safe </span> <br />
        exercise programs & post-surgical training programs.
      </p>

      <Button className="btn--main margin-bottom-sm">Contact me</Button>
    </div>
  );
}

export default Hero;
