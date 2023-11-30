import Subscribe from "../../../SharePages/Subscribe/Subscribe";
import Carosel from "../Carosel/Carosel";
import DealOfTheDaySection from "../DealOfThedaySection/DealOfTheDaySection";
import HomeBanerBottom from "../Home-Baner-Bottom/HomeBanerBottom";
import PopulerProduct from "../PopulerProduct/PopulerProduct";
import ProductCategory from "../ProductCategory/ProductCategory";

const Home = () => {
  return (
    <div>
      <Carosel></Carosel>
      <ProductCategory></ProductCategory>
      <PopulerProduct></PopulerProduct>
      <DealOfTheDaySection></DealOfTheDaySection>
      <HomeBanerBottom></HomeBanerBottom>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
