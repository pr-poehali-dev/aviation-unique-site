
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Plane, Building, Users, ShoppingBag, Award, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Навигация */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto py-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="flex items-center gap-2 font-medium text-primary">
                    <Plane className="h-5 w-5" />
                    <span>АвиаЭкспресс</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>О компании</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/founders" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <Building className="h-4 w-4" />
                      <span>Учредители</span>
                    </Link>
                    <Link to="/management" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                      <Users className="h-4 w-4" />
                      <span>Руководство</span>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/services" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Услуги и товары</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/quality" className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md">
                    <Award className="h-4 w-4" />
                    <span>Качество</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero секция */}
      <section className="bg-[url('/placeholder.svg')] bg-cover bg-center py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">АвиаЭкспресс</h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8 drop-shadow-md">
            Ваш надежный партнер в мире авиации. Предоставляем широкий спектр услуг и товаров высочайшего качества.
          </p>
          <Button size="lg" asChild>
            <Link to="/services">Наши услуги</Link>
          </Button>
        </div>
      </section>

      {/* О компании */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">О нашей компании</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Учредители
                </CardTitle>
                <CardDescription>Основатели нашей компании</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Компания основана группой профессионалов авиационной отрасли с более чем 20-летним опытом работы.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link to="/founders">Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Руководство
                </CardTitle>
                <CardDescription>Наша команда управления</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Компанией руководят опытные менеджеры с глубокими знаниями специфики авиационной отрасли.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link to="/management">Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Качество
                </CardTitle>
                <CardDescription>Наши стандарты</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Мы придерживаемся самых высоких стандартов качества во всех аспектах нашей деятельности.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link to="/quality">Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Услуги и товары */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши услуги и товары</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                Техническое обслуживание
              </h3>
              <p className="mb-4">Предоставляем полный спектр услуг по техническому обслуживанию воздушных судов различных типов.</p>
              <img src="/placeholder.svg" alt="Техническое обслуживание" className="w-full h-48 object-cover rounded-md mb-4" />
              <Button variant="outline" asChild>
                <Link to="/services">Подробнее</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                Авиационные запчасти
              </h3>
              <p className="mb-4">Поставляем сертифицированные запчасти для воздушных судов от ведущих мировых производителей.</p>
              <img src="/placeholder.svg" alt="Авиационные запчасти" className="w-full h-48 object-cover rounded-md mb-4" />
              <Button variant="outline" asChild>
                <Link to="/services">Подробнее</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Качество */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Гарантия качества</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="/placeholder.svg" alt="Качество" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Сертификаты и стандарты</h3>
              <p className="mb-4">
                Наша компания сертифицирована по международным стандартам ISO 9001:2015. Все наши специалисты проходят регулярное повышение квалификации и аттестацию.
              </p>
              <p className="mb-6">
                Мы гарантируем полное соответствие всех наших услуг и товаров требованиям авиационных властей и международным стандартам безопасности.
              </p>
              <Button asChild>
                <Link to="/quality">Узнать больше о наших стандартах</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Plane className="h-5 w-5" />
                АвиаЭкспресс
              </h3>
              <p>Ваш надежный партнер в авиации</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p>Адрес: г. Москва, ул. Авиационная, 10</p>
              <p>Телефон: +7 (999) 123-45-67</p>
              <p>Email: info@aviaexpress.ru</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/founders" className="hover:underline">Учредители</Link>
                </li>
                <li>
                  <Link to="/management" className="hover:underline">Руководство</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">Услуги и товары</Link>
                </li>
                <li>
                  <Link to="/quality" className="hover:underline">Качество</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p>&copy; 2023 АвиаЭкспресс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
