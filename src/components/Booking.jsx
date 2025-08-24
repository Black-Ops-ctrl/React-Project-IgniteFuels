import { useState, useEffect } from "react";
import igniteImg from "../assets/images/ignite.png";

export default function Booking() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    city: "",
    address: "",
    service: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const services = [
    "Car Service",
    "Car Wash",
    "Fuel Delivery",
    "Car Inspection",
    "Oil Change",
    "Wheel Care",
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.contact.trim()) newErrors.contact = "Contact number is required";
    else if (!/^\d{11}$/.test(form.contact))
      newErrors.contact = "Contact number must be 11 digits";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.service.trim()) newErrors.service = "Please select a service";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!form.email.includes("@")) newErrors.email = "Email must contain @";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => validate() && alert("Booking Confirmed ✅");

  const isMobile = windowWidth < 768;

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "99vw",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Header */}
      <header
        style={{
          width: "100%",
          color: "black",
          padding: "20px",
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          letterSpacing: "1px",
          marginTop: "50px",
        }}
      >
        Booking
      </header>

      {/* Black Container */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          backgroundColor: "black",
          borderRadius: "24px",
          padding: "20px",
          width: isMobile ? "95%" : "80%",
          maxWidth: "950px",
          color: "white",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        {/* Left Side Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: isMobile ? "20px" : "0",
          }}
        >
          <img
            src={igniteImg}
            alt="Ignite"
            style={{
              width: isMobile ? "250px" : "400px",
              height: isMobile ? "250px" : "400px",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Right Side Form */}
        <div style={{ flex: 1, marginLeft: isMobile ? "0" : "30px", width: "100%" }}>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Booking Form</h2>

          {["firstName", "lastName", "contact", "city", "address"].map((field) => (
            <div key={field} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                name={field}
                placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                value={form[field]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: "none",
                }}
              />
              {errors[field] && (
                <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
                  {errors[field]}
                </div>
              )}
            </div>
          ))}

          {/* Service Dropdown */}
          <div style={{ marginBottom: "10px" }}>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "none" }}
            >
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && (
              <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors.service}</div>
            )}
          </div>

          {/* Email */}
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "none" }}
            />
            {errors.email && (
              <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors.email}</div>
            )}
          </div>

          {/* Confirm Booking Button */}
          <button
            onClick={handleSubmit}
            style={{
              padding: "12px 24px",
              border: "2px solid rgb(255, 255, 255)",
              background: "white",
              color: "black",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "all 0.3s ease",
              marginTop: "10px",
              justifyContent: "center",
              width: "100%",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#000000";
              e.target.style.color = "white";
              e.target.style.borderColor = "#000000";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "black";
              e.target.style.borderColor = "white";
            }}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
