import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function Layout({ children, menu, footer }) {
  return (
    <>
      <Navigation menu={menu} />
      <div className="main-content">{children}</div>
      <Footer footer={footer} />
    </>
  );
}
