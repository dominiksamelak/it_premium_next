"use client";
import { useEffect, useState } from "react";
import "@/styles/confirmation.css";

export default function Confirmation() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  if (!formData) {
    return <div>Loading...</div>; // Show loading state until data is available
  }

  return (
    <div className="confirmation-container">
      <h1 className="confirmation-title">Dziękujemy za zamówienie!</h1>
      <p>Twój numer zamówienia to: <strong>{formData.orderNumber}</strong></p>
      <p>Wkrótce skontaktujemy się z Tobą w sprawie dalszych szczegółów.</p>
      <div className="form-details">
        <h2>Szczegóły zgłoszenia:</h2>
        <p><strong>Imię i nazwisko:</strong> {formData.name}</p>
        <p><strong>Adres e-mail:</strong> {formData.email}</p>
        <p><strong>Numer telefonu:</strong> {formData.phone}</p>
        <p><strong>Ulica:</strong> {formData.street}</p>
        <p><strong>Kod pocztowy:</strong> {formData.zipcode}</p>
        <p><strong>Miasto:</strong> {formData.city}</p>
        <p><strong>Typ sprzętu:</strong> {formData.equipment}</p>
        <p><strong>Producent:</strong> {formData.manufacturer}</p>
        <p><strong>Model:</strong> {formData.model}</p>
        <p><strong>Numer seryjny:</strong> {formData.serialnumber}</p>
        <p><strong>Opis usterki:</strong> {formData.details}</p>
      </div>
    </div>
  );
}
