"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setStatus(data.success || data.error);
  };

  return (
    <section className="bg-gray-100 shadow rounded p-6">
      <h2 className="text-xl font-bold text-center">お問い合わせ</h2>
      <p className="text-center text-gray-600 mb-4">
        お問い合わせやご質問があれば、こちらのフォームをご利用ください。
      </p>
      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="お名前"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="メッセージ"
          className="w-full p-2 border border-gray-300 rounded h-32"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          送信
        </button>
      </form>
      {status && <p className="mt-4 text-center text-red-500">{status}</p>}
    </section>
  );
}
