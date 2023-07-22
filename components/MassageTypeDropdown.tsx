import React, { ChangeEvent } from "react";

interface MassageDropdownProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const MassageTypeDropdown: React.FC<MassageDropdownProps> = ({ value, onChange }) => {
    const massageItems = [
        {
          value: "",
          text: "Select Massage",
        },
        {
          value: "Swedish Style Massage",
          text: "Swedish Style Massage",
        },
        {
          value: "Pregnancy Massage",
          text: "Pregnancy Massage",
        },
        {
          value: "Luxury Signature Massage",
          text: "Luxury Signature Massage",
        },
        {
          value: "Aromatic Massage",
          text: "Aromatic Massage",
        },
        {
          value: "Deep Tissue Massage",
          text: "Deep Tissue Massage",
        },
        {
          value: "Hot Stone Massage",
          text: "Hot Stone Massage",
        },
        {
          value: "Indian Head Massage",
          text: "Indian Head Massage",
        },
      ];

  return (
    <select
      className="px-3 py-2 bg-white border border-gray-300 rounded"
      id="dropdown"
      name="massage"
      value={value}
      onChange={onChange}
    >
      {massageItems.map((type, index) => (
        <option key={index} value={type.value}>
          {type.text}
        </option>
      ))}
    </select>
  );
};

export default MassageTypeDropdown;
