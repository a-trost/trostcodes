import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Layout({ children, menu }) {
  return (
    <body>
      <Navigation menu={menu} />
      {children}
      <Footer />
    </body>
  );
}