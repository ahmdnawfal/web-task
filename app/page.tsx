import { cookies } from "next/headers";
import { CookieValueTypes, getCookie } from "cookies-next";
import Services from "@/components/services";
import LandingPage from "@/components/landing-page";
import Navbar from "@/components/navbar";
import Customers from "@/components/customers";
import Teams from "@/components/teams";
import Contact from "@/components/contact";
import { TypeTranslations } from "@/lib/type";

export default function Home() {
  const languange = getCookie("language", { cookies }) || "id";

  const translationsId: TypeTranslations = {
    home: "beranda",
    services: "pelayanan",
    customers: "pelanggan",
    teams: "tim",
    contact: "kontak",
  };

  const handleLanguage = (lang: CookieValueTypes, name: string) => {
    if (lang === "en") {
      return name;
    } else if (lang === "id") {
      return translationsId[name] || "";
    }
    return "";
  };

  return (
    <main>
      <Navbar language={languange} />
      <section id={handleLanguage(languange, "home")}>
        <LandingPage language={languange} />
      </section>
      <section id={handleLanguage(languange, "services")}>
        <Services />
      </section>
      <section id={handleLanguage(languange, "customers")}>
        <Customers />
      </section>
      <section id={handleLanguage(languange, "teams")}>
        <Teams />
      </section>
      <footer id={handleLanguage(languange, "contact")}>
        <Contact />
      </footer>
    </main>
  );
}
