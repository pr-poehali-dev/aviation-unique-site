
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-600 mb-8">Страница не найдена</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Извините, запрашиваемая страница в настоящее время находится в разработке или не существует.
        </p>
        <Button asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home size={16} />
            <span>Вернуться на главную</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
