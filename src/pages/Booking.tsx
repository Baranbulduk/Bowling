import NavBar from "../components/NavBar.tsx";
import "../style/Home.css";
import Logo from "../assets/logo.png";
import "../style/Booking.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  id: string;
  date: string;
  time: string;
  people: number;
  lanes: number;
  shoes: string[];
  active: boolean;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    date: "",
    time: "",
    people: 1,
    lanes: 1,
    shoes: [""],
    active: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "people") {
      const numberOfPeople = parseInt(value, 10);
      setFormData({
        ...formData,
        people: numberOfPeople,
        shoes: Array(numberOfPeople).fill(""),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleShoeSizeChange = (index: number, value: string) => {
    const newShoes = [...formData.shoes];
    newShoes[index] = value;
    setFormData({ ...formData, shoes: newShoes });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Kombinera datum och tid till en ISO-sträng
    const when = `${formData.date} ${formData.time}`;

    // Generera ett slumpmässigt ID
    const randomId = `id-${Math.random().toString(36).substr(2, 9)}`;

    // Skapa ett objekt för att skicka till servern
    const requestData = {
      id: randomId,
      when: when,
      people: formData.people,
      lanes: formData.lanes,
      shoes: formData.shoes,
      active: true,
    };

    // Skicka data till servern
    fetch("/api", {
      method: "POST",
      headers: {
        "x-api-key": "738c6b9d-24cf-47c3-b688-f4f4c5747662",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log("Response text:", text);
        if (text) {
          const data = JSON.parse(text);
          navigate("/confirmation", { state: data });
        }
      });
  };

  return (
    <div className="app">
      <NavBar />
      <img className="logo-small" src={Logo} alt="Logo" />
      <h2>BOOKING</h2>
      <section className="heading-container">
        <h3 className="heading-title">WHEN, WHAT, WHO</h3>
        <div className="line"></div>
      </section>
      <form onSubmit={handleSubmit}>
        <section className="input-container date-time-container">
          <div className="date-container">
            <label className="input-title date-title">DATE</label>
            <input
              className="input date-time"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="time-container">
            <label className="input-title time-title">TIME</label>
            <input
              className="input date-time"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </section>
        <section className="input-container">
          <label className="input-title people-title">
            NUMBER OF AWESOME PEOPLE
          </label>
          <input
            className="input"
            type="number"
            name="people"
            value={formData.people}
            onChange={handleChange}
            min="1"
            required
          />
          <label className="input-title lanes-title">NUMBER OF LANES</label>
          <input
            className="input"
            type="number"
            name="lanes"
            value={formData.lanes}
            onChange={handleChange}
            min="1"
            required
          />
        </section>
        <section className="heading-container">
          <h3 className="heading-title shoes">SHOES</h3>
          <div className="line"></div>
        </section>
        {formData.shoes.map((shoeSize, index) => (
          <section className="input-container" key={index}>
            <label className="input-title shoe-title">{`SHOE SIZE / PERSON ${
              index + 1
            }`}</label>
            <input
              className="input"
              key={index}
              type="text"
              value={shoeSize}
              onChange={(e) => handleShoeSizeChange(index, e.target.value)}
              placeholder={`Shoe size for person ${index + 1}`}
              required
            />
          </section>
        ))}
        <button className="button" type="submit">
          STRIIIIIIKE!
        </button>
      </form>
    </div>
  );
};

export default Booking;
