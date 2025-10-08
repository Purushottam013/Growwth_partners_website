import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FAQ {
  question?: string;
  answer?: string;
}

interface FAQManagerProps {
  faqs: FAQ[];
  onChange: (faqs: FAQ[]) => void;
}

export const FAQManager = ({ faqs, onChange }: FAQManagerProps) => {
  const handleAddFAQ = () => {
    onChange([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveFAQ = (index: number) => {
    onChange(faqs.filter((_, i) => i !== index));
  };

  const handleUpdateFAQ = (index: number, field: "question" | "answer", value: string) => {
    const updated = [...faqs];
    if (updated[index]) {
      updated[index][field] = value;
    }
    onChange(updated);
  };

  // Show at least one empty FAQ field initially
  const displayFaqs = faqs.length === 0 ? [{ question: "", answer: "" }] : faqs;

  return (
    <div className="space-y-4">
      {displayFaqs.map((faq, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-3 bg-muted/30">
          <div className="flex items-center justify-between">
            <Label className="font-semibold">FAQ {index + 1}</Label>
            {displayFaqs.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveFAQ(index)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor={`question-${index}`}>Question</Label>
            <Input
              id={`question-${index}`}
              value={faq.question || ""}
              onChange={(e) => handleUpdateFAQ(index, "question", e.target.value)}
              placeholder="Enter FAQ question"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`answer-${index}`}>Answer</Label>
            <Textarea
              id={`answer-${index}`}
              value={faq.answer || ""}
              onChange={(e) => handleUpdateFAQ(index, "answer", e.target.value)}
              placeholder="Enter FAQ answer"
              rows={3}
            />
          </div>
        </div>
      ))}
      <Button type="button" variant="outline" onClick={handleAddFAQ} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Another FAQ
      </Button>
    </div>
  );
};
