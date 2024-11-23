"use client"; 
import '@/styles/applicationform.css';
import { useState } from "react";
import axios from "axios";

export default function ApplicationForm() {
  const [subject, setSubject] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    zipcode: '',
    city: '',
    equipment: '',
    manufacturer: '',
    model: '',
    serialnumber: '',
    details: '',
    acceptedTerms: false, // tracks whether the checkbox is checked
  });

  const sendMail = (subject, message) => {
    axios
      .get("http://localhost:5000/", {
        params: {
          subject,
          message,
        },
      })
      .then(() => {
        // success
        console.log("Email sent successfully");
      })
      .catch(() => {
        // failure
        console.log("Failed to send email");
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));

    if (name === "model") {
      setSubject(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the email message
    const emailMessage = `
      <strong>Name:</strong> ${formData.name}<br>
      <strong>Email:</strong> ${formData.email}<br>
      <strong>Phone:</strong> ${formData.phone}<br>
      <strong>Street:</strong> ${formData.street}<br>
      <strong>Zipcode:</strong> ${formData.zipcode}<br>
      <strong>City:</strong> ${formData.city}<br>
      <strong>Equipment:</strong> ${formData.equipment}<br>
      <strong>Manufacturer:</strong> ${formData.manufacturer}<br>
      <strong>Model:</strong> ${formData.model}<br>
      <strong>Serial Number:</strong> ${formData.serialnumber}<br>
      <strong>Details:</strong><br>
      ${formData.details}
    `;

    setSubject(`${formData.model}`);

    sendMail(`${formData.model}`, emailMessage);

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      street: '',
      zipcode: '',
      city: '',
      equipment: '',
      manufacturer: '',
      model: '',
      serialnumber: '',
      details: '',
      acceptedTerms: false, // Reset acceptedTerms to false after submission
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, phone: value });
  };

  return (
    <div className="form-container">
      <h2>Formularz wysyłkowy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Imię i nazwisko*"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adres e-mail*"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Numer telefonu*"
            value={formData.phone}
            onChange={handlePhoneChange}
            pattern="[0-9]*"
            inputMode="numeric"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="street"></label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Ulica*"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="city"></label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Miasto*"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="zipcode"></label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="Kod pocztowy*"
              value={formData.zipcode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="equipment"></label>
          <select
            id="equipment"
            name="equipment"
            placeholder="Typ sprzętu*"
            value={formData.equipment}
            onChange={handleChange}
            required
          >
            <option value="">Wybierz typ sprzętu</option>
            <option value="Laptop">Laptop</option>
            <option value="Komputer stacjonarny">Komputer stacjonarny</option>
            <option value="Nośnik danych">Nośnik danych</option>
            <option value="Drukarka">Drukarka</option>
            <option value="Inny sprzęt">Inny sprzęt</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="manufacturer"></label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            placeholder="Producent*"
            value={formData.manufacturer}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="model"></label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Model*"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="serialnumber"></label>
          <input
            type="text"
            id="serialnumber"
            name="serialnumber"
            placeholder="Numer seryjny"
            value={formData.serialnumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="details"></label>
          <textarea
            id="details"
            name="details"
            placeholder="Opis usterki*"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group-checkbox">
          <label htmlFor="acceptedTerms" className="checkbox-label">
            <input
              type="checkbox"
              id="acceptedTerms"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
            />
            <span className="custom-checkbox"></span>
            Zapoznałem i zgadzam się z regulaminem IT-Premium Centrum Serwisowe
          </label>

          <div className="form-buttons">
            <button type="submit" disabled={!formData.acceptedTerms}>
              Wyślij
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
