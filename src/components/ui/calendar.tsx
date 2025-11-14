import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={(d) => setDate(d)}
      className="p-2 border rounded"
    />
  );
};

export { Calendar };
