import NavBar from "../components/NavBar.tsx";
import "../style/Home.css";
import Logo from "../assets/Logo.png";
import "../style/Confirmation.css";

import { useLocation } from "react-router-dom";

interface FormData {
  id: string;
  when: string;
  people: number;
  lanes: number;
  shoes: number[];
}

const Confirmation: React.FC = () => {
  const location = useLocation();
  const formData = location.state as FormData;

  if (!formData) {
    return (
      <div
        className="app"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Bebas Neue",
          color: "#EC315A",
          fontSize: "40px",
          fontWeight: "400",
          lineHeight: "48px",
          letterSpacing: "0.03em",
        }}
      >
        <NavBar />
        Inga bokningar än!
      </div>
    );
  }

  const { id, when, people, lanes } = formData;
  const totalPrice = people * 120 + lanes * 100;

  return (
    <div className="app">
      <NavBar />
      <img className="logo-small" src={Logo} alt="Logo" />
      <h2>SEE YOU SOON!</h2>
      <section className="heading-container">
        <h3 className="heading-title">BOOKING DETAILS</h3>
        <div className="line"></div>
      </section>
      <section className="confirmation-container">
        <p className="confirmation-title confirmation-when">WHEN</p>
        <p className="confirmation-input">{when}</p>
        <p className="confirmation-title confirmation-who">WHO</p>
        <p className="confirmation-input">{people}</p>
        <p className="confirmation-title confirmation-lanes">LANES</p>
        <p className="confirmation-input">{lanes}</p>
        <p className="confirmation-title confirmation-booking-number">
          BOOKING NUMBER
        </p>
        <p className="confirmation-input">{id}</p>
      </section>
      <section className="totalprice-container">
        <p className="totalprice-title">total</p>
        <p className="totalprice">{totalPrice}sek</p>
      </section>
      <button className="button button-padding">SWEET, LETS GO!</button>
    </div>
  );
};

export default Confirmation;
