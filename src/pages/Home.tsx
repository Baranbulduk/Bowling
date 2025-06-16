import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/booking");
    }, 4000);
  }, [navigate]);

  return (
    <div className="app">
      <section className="home-container">
        <img src={Logo} alt="Logo" />
        <h1 className="home-title">STRAJK</h1>
        <h1 className="slogan">Bowling</h1>
      </section>
    </div>
  );
}

export default Home;
