"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ScanFormProps {
  url: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  urlError?: string;
}

const ScanForm: React.FC<ScanFormProps> = ({ url, onChange, onSubmit, urlError }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="relative sm:w-[420px] mx-auto mt-6">
      <div className="relative">
        <Input
          type="url"
          value={url}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your website URL (http(s)://...)"
          className="rounded-full pr-32 h-12"
        />
        <Button
          type="submit"
          className="absolute right-1 top-1 h-10 rounded-full px-5"
        >
          Scan
        </Button>
      </div>

      {urlError && (
        <p className="text-red-600 text-sm mt-2 pl-2">{urlError}</p>
      )}
    </form>
  );
};

export default ScanForm;
