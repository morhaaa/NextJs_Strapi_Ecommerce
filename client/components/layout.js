import Navbar from "./Navbar";
import Footer from "./Footer";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
