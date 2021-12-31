import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function Layout({ children, menu, footer }) {
  return (
    <>
      <Navigation menu={menu} />
      {children}
      <Footer footer={footer} />
    </>
  );
}
