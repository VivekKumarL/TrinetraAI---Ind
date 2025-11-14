"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

// ✅ New calendar library
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoList = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      {/* Calendar Picker */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full flex items-center gap-2">
            <CalendarIcon />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-2 w-auto">
          <DatePicker
            selected={date}
            onChange={(d: Date | null) => {
              setDate(d);
              setOpen(false);
            }}
            inline
          />
        </PopoverContent>
      </Popover>

      {/* Todo List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {[...Array(12)].map((_, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={`item${i}`} checked={i % 2 === 0} />
                <label
                  htmlFor={`item${i}`}
                  className="text-sm text-muted-foreground"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
