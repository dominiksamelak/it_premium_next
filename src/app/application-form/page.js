"use client";
import "@/styles/applicationform.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import FAQ from "@/components/FAQ.js";

// Temporary debug log
console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(
  "Supabase Key exists:",
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ApplicationForm() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState(null);
  const [remainingCharacters, setRemainingCharacters] = useState(1000);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    zipcode: "",
    city: "",
    equipment: "",
    manufacturer: "",
    model: "",
    serialnumber: "",
    details: "",
    acceptedTerms: false,
  });

  const generateOrderNumber = async () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // JavaScript months are 0-based
    const currentYear = now.getFullYear();

    // Get the count of orders for the current month
    const { count, error } = await supabase
      .from("orders")
      .select("*", { count: "exact", head: true })
      .gte(
        "created_at",
        new Date(currentYear, currentMonth - 1, 1).toISOString()
      )
      .lt("created_at", new Date(currentYear, currentMonth, 1).toISOString());

    if (error) {
      console.error("Error getting order count:", error);
      return null;
    }

    // Generate the order number
    const orderCount = (count || 0) + 1;
    const paddedOrderCount = orderCount.toString().padStart(2, "0");
    const paddedMonth = currentMonth.toString().padStart(2, "0");

    return `${paddedOrderCount}/${paddedMonth}/${currentYear}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    if (name === "details") {
      setRemainingCharacters(1000 - value.length);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newOrderNumber = await generateOrderNumber();

      if (!newOrderNumber) {
        throw new Error("Failed to generate order number");
      }

      // Insert the form data into Supabase
      const { data, error } = await supabase
        .from("orders")
        .insert([
          {
            order_number: newOrderNumber,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            street: formData.street,
            zipcode: formData.zipcode,
            city: formData.city,
            equipment: formData.equipment,
            manufacturer: formData.manufacturer,
            model: formData.model,
            serialnumber: formData.serialnumber,
            details: formData.details,
          },
        ])
        .select();

      if (error) throw error;

      // Send email using Supabase Edge Function
      console.log('Sending email with data:', {
        order_number: newOrderNumber,
        ...formData,
      });

      const { data: emailData, error: emailError } = await supabase.functions.invoke(
        "send-order-email",
        {
          body: {
            orderData: {
              order_number: newOrderNumber,
              ...formData,
            },
          },
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,  
          },
        }
      );

      if (emailError) {
        console.error("Failed to send email:", emailError);
        // Show error to user but continue with form submission
        alert("Zgłoszenie zostało przyjęte, ale wystąpił problem z wysłaniem potwierdzenia email. Prosimy o kontakt telefoniczny.");
      } else {
        console.log("Email sent successfully:", emailData);
      }

      // Store the order data in localStorage
      localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, orderNumber: newOrderNumber })
      );

      router.push("/confirmation");
    } catch (error) {
      console.error("Submission failed:", error);
      // You might want to show an error message to the user here
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setFormData({ ...formData, phone: value });
  };

  return (
    <div>
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
                <option value="" disabled hidden>
                  Typ sprzętu*
                </option>
                <option value="Laptop">Laptop</option>
                <option value="Komputer stacjonarny">
                  Komputer stacjonarny
                </option>
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
            </div>
            <p>Pozostało {remainingCharacters} znaków</p>
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
              <span>
                <a
                  href="https://drive.google.com/file/d/1mBFIYIlnMhH3YcbUOwoK84c7DmLAbWL9/view?usp=sharing"
                  download
                >
                  Zapoznałem i zgadzam się z regulaminem IT-Premium Centrum
                  Serwisowe
                </a>
              </span>
            </label>

            <div className="form-buttons">
              <button type="submit" disabled={!formData.acceptedTerms}>
                Wyślij
              </button>
            </div>
          </div>
        </form>
      </div>
      <FAQ />
    </div>
  );
}
