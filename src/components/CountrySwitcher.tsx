
import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CountrySwitcher = ({ 
  variant = "dark",
  className = ""
}: { 
  variant?: "light" | "dark" 
  className?: string
}) => {
  const { country, setCountry } = useCountry();
  const [open, setOpen] = useState(false);
  
  const textColor = variant === "light" ? "text-white" : "text-gray-800";
  const iconColor = variant === "light" ? "text-white" : "text-gray-500";
  
  const countries = [
    { value: "singapore", label: "Singapore", flag: "🇸🇬" },
    { value: "uae", label: "UAE", flag: "🇦🇪" },
    { value: "australia", label: "Australia", flag: "🇦🇺" }
  ];

  const selectedCountry = countries.find(c => c.value === country) || countries[0];

  return (
    <Select
      value={country}
      onValueChange={(value) => {
        setCountry(value as any);
      }}
      onOpenChange={setOpen}
    >
      <SelectTrigger 
        className={`w-[140px] border-none bg-transparent focus:ring-0 ${textColor} ${className}`}
      >
        <SelectValue>
          <div className="flex items-center">
            <span className="mr-2">{selectedCountry.flag}</span>
            <span>{selectedCountry.label}</span>
          </div>
        </SelectValue>
        {open ? (
          <ChevronUp className={`h-4 w-4 ${iconColor}`} />
        ) : (
          <ChevronDown className={`h-4 w-4 ${iconColor}`} />
        )}
      </SelectTrigger>
      <SelectContent className="bg-white text-gray-800">
        {countries.map((option) => (
          <SelectItem 
            key={option.value} 
            value={option.value}
            className="cursor-pointer"
          >
            <div className="flex items-center">
              <span className="mr-2">{option.flag}</span>
              <span>{option.label}</span>
              {country === option.value && (
                <Check className="ml-auto h-4 w-4" />
              )}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
