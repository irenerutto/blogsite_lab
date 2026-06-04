import "./About.css";

function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" className="about-img" />
      <p>{about}</p>
    </aside>
  );
}

export default About;