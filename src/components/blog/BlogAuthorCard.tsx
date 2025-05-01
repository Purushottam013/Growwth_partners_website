
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface BlogAuthorCardProps {
  author: string;
}

export const BlogAuthorCard = ({ author }: BlogAuthorCardProps) => {
  return (
    <Card className="bg-gray-50 border-0">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <User className="h-6 w-6" />
          </div>
          
          <div>
            <h4 className="font-semibold text-lg">{author}</h4>
            <p className="text-gray-600 text-sm">Author</p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-700">
          Our expert provides insights based on years of experience in the financial industry, helping businesses navigate complex challenges and achieve sustainable growth.
        </p>
      </CardContent>
    </Card>
  );
};
