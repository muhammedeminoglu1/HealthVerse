"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ComplaintPage() {
  const router = useRouter();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [complaints, setComplaints] = useState<string[]>([]);

  const availableComplaints = [
    "Baş Ağrısı",
    "Karın Ağrısı",
    "Boğaz Ağrısı",
    "Öksürük",
    "Ateş",
    "Mide Bulantısı",
    "Sırt Ağrısı",
  ];

  const handleComplaintChange = (complaint: string) => {
    if (complaints.includes(complaint)) {
      setComplaints(complaints.filter((c) => c !== complaint));
    } else {
      setComplaints([...complaints, complaint]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !gender || complaints.length === 0) {
      alert("Lütfen tüm bilgileri doldurun.");
      return;
    }
    router.push("/questions"); // Şimdilik direk yönlendiriyoruz
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-center">Şikayet Formu</h2>

        {/* Yaş Girişi */}
        <input
          type="number"
          placeholder="Yaşınız"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 rounded"
          min="0"
          required
        />

        {/* Cinsiyet Seçimi */}
        <div className="flex items-center gap-6 justify-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="erkek"
              checked={gender === "erkek"}
              onChange={() => setGender("erkek")}
            />
            Erkek
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="kadin"
              checked={gender === "kadin"}
              onChange={() => setGender("kadin")}
            />
            Kadın
          </label>
        </div>

        {/* Şikayet Listesi */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Şikayetleriniz:</h3>
          <div className="grid grid-cols-2 gap-2">
            {availableComplaints.map((complaint) => (
              <label key={complaint} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={complaints.includes(complaint)}
                  onChange={() => handleComplaintChange(complaint)}
                />
                {complaint}
              </label>
            ))}
          </div>
        </div>

        {/* Devam Et Butonu */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-lg"
        >
          Devam Et
        </button>
      </form>
    </div>
  );
}
