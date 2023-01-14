import Sliders from "../components/Sliders";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import TrendingProducts from "../components/TrendingProducts";

export default function Home() {
  return (
    <>
      <main>
        <Sliders />
        <TrendingProducts />
        <Categories />
        <Contact />
      </main>
    </>
  );
}
