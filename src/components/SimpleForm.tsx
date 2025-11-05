import { useState } from "react";

type FormState = {
  name: string;
  email: string;
};

export default function SimpleForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "" });

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    alert(`ข้อมูลที่กรอก\nชื่อ: ${form.name}\nอีเมล: ${form.email}`);
  };

  const handleClear = () => setForm({ name: "", email: "" });

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Workshop 5.2 — Form Component</h2>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: 8 }}>
          ชื่อ (Name)
          <input
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            placeholder="กรอกชื่อ"
            style={{
              width: "100%",
              marginTop: 6,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #d1d5db",
            }}
          />
        </label>

        <label style={{ display: "block", margin: "12px 0 8px" }}>
          อีเมล (Email)
          <input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="you@example.com"
            style={{
              width: "100%",
              marginTop: 6,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #d1d5db",
            }}
          />
        </label>

        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "10px 12px",
              border: "1px solid #2563eb",
              background: "#2563eb",
              color: "white",
              borderRadius: 10,
              cursor: "pointer",
            }}
          >
            Submit
          </button>

          <button
            type="button"
            onClick={handleClear}
            style={{
              flex: 1,
              padding: "10px 12px",
              border: "1px solid #e5e7eb",
              background: "#f3f4f6",
              borderRadius: 10,
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>
      </form>

      <div style={{ marginTop: 18 }}>
        <h3 style={{ margin: "12px 0 6px" }}>ผลลัพธ์แบบ Real-time</h3>
        <p style={{ margin: 0 }}>
          <strong>ชื่อ: </strong>
          {form.name || <em style={{ color: "#9ca3af" }}>ยังไม่กรอก</em>}
        </p>
        <p style={{ margin: 0 }}>
          <strong>อีเมล: </strong>
          {form.email || <em style={{ color: "#9ca3af" }}>ยังไม่กรอก</em>}
        </p>
      </div>
    </div>
  );
}
