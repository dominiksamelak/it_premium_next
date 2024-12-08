"use client"; 
import '@/styles/applicationform.css';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ApplicationForm() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState(null); // State to store order number
  const [remainingCharacters, setRemainingCharacters] = useState(1000);
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
    acceptedTerms: false,
  });

  useEffect(() => {
    // Fetch order number when the component mounts
    fetchOrderNumber();
  }, []);

  const fetchOrderNumber = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getOrderNumber");
      setOrderNumber(response.data.orderNumber); // Update state with the order number
    } catch (error) {
      console.error("Failed to fetch order number:", error);
      setOrderNumber("Brak numeru zlecenia, ale zgłoszenie zostało przyjęte"); // Set fallback value in case of error
    }
  };

  const sendMail = (subject, message) => {
    return axios.get("http://localhost:5000/", {
      params: {
        subject,
        message,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

     if (name === "details") {
    setRemainingCharacters(1000 - value.length); // Calculate remaining characters
  }

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const emailMessage = `
    <strong>Order Number:</strong> ${orderNumber}<br>
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

  try {
    await sendMail(`${formData.model}`, emailMessage);
    console.log("Email sent successfully");

    // Store form data and order number in localStorage
    const formDataWithOrder = { ...formData, orderNumber };
    localStorage.setItem("formData", JSON.stringify(formDataWithOrder));

    // Navigate to confirmation page
    router.push("/confirmation");
  } catch (error) {
    console.error("Failed to send email:", error);
  }
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
          <div className="input-wrapper">
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
        </div>

        <div className="form-group">
          <div className="input-wrapper">
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
        </div>

        <div className="form-group">
          <div className="input-wrapper">
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
        </div>

        <div className="form-group">
          <div className="input-wrapper">
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
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <div className="input-wrapper">
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
          </div>

          <div className="form-group">
            <div className="input-wrapper">
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
        </div>

        <div className="form-group">
          <div className="input-wrapper">
            <select
              id="equipment"
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected hidden>Typ sprzętu*</option>
              <option value="Laptop">Laptop</option>
              <option value="Komputer stacjonarny">Komputer stacjonarny</option>
              <option value="Nośnik danych">Nośnik danych</option>
              <option value="Drukarka">Drukarka</option>
              <option value="Inny sprzęt">Inny sprzęt</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="input-wrapper">
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
        </div>

        <div className="form-group">
          <div className="input-wrapper">
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
        </div>

        <div className="form-group">
          <div className="input-wrapper">
            <input
              type="text"
              id="serialnumber"
              name="serialnumber"
              placeholder="Numer seryjny"
              value={formData.serialnumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-wrapper">
            <textarea
              id="details"
              name="details"
              placeholder="Opis usterki*"
              value={formData.details}
              onChange={handleChange}
              maxLength={1000}
              required
            ></textarea>
            <p>Pozostało {remainingCharacters} znaków</p>
          </div>
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
