
import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

export const CountrySwitcher = ({ 
  variant = "dark",
  className = "",
  showLabel = false
}: { 
  variant?: "light" | "dark" 
  className?: string
  showLabel?: boolean
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
        className={`w-[70px] border-none bg-transparent focus:ring-0 ${textColor} ${className}`}
      >
        <SelectValue>
          <div className="flex items-center">
            <span className="text-lg">{selectedCountry.flag}</span>
            {showLabel && <span className="ml-2">{selectedCountry.label}</span>}
          </div>
        </SelectValue>
        {open ? (
          <ChevronUp className={`h-4 w-4 ${iconColor}`} />
        ) : (
          <ChevronDown className={`h-4 w-4 ${iconColor}`} />
        )}
      </SelectTrigger>
      <SelectContent className="bg-white text-gray-800 max-h-[200px] w-[200px]">
        <ScrollArea className="h-[150px]">
          {countries.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              className="cursor-pointer py-2"
            >
              <div className="flex items-center">
                <span className="mr-2 text-lg">{option.flag}</span>
                <span>{option.value === "uae" ? "UAE" : option.label}</span>
                {country === option.value && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </div>
            </SelectItem>
          ))}
        </ScrollArea>
      </SelectContent>
    </Select>
  );
};
