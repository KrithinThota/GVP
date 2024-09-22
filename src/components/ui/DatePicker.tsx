
import React from "react";
interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholderText?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selected,
  onChange,
  placeholderText,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value ? new Date(event.target.value) : null;
    onChange(date);
  };

  return (
    <input
      type="date"
      value={selected ? selected.toISOString().split("T")[0] : ""}
      onChange={handleChange}
      placeholder={placeholderText}
      className="border rounded p-2"
    />
  );
};

export default DatePicker;
