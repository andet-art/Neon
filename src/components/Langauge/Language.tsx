import React, { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "sq", label: "Albanian" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "es", label: "Spanish" },
];

const Language = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLang(e.target.value);
    // You can add your logic here to change app language or store preference
  };

  return (
    <div className="max-w-xs mx-auto p-6 bg-white rounded shadow-md">
      <label htmlFor="language-select" className="block mb-2 font-semibold text-gray-700">
        Select Language
      </label>
      <select
        id="language-select"
        value={selectedLang}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <p className="mt-4 text-center text-gray-600">
        Selected language: <span className="font-semibold">{languages.find(l => l.code === selectedLang)?.label}</span>
      </p>
    </div>
  );
};

export default Language;
