import Layout from "../../layout/Layout";
import Section1 from "./Section1";
import "../../../styles/Home.css";
import AboutHome from "./AboutHome";
import MenuHome from "./MenuHome";
import HomePromotion from "./HomePromotion";
import HomeShop from "./HomeShop";
import HomeBlog from "./HomeBlog";
import HomeContact from "./HomeContact";
function Home() {
  return (
    <>
      <Layout>
        <Section1 />
        <AboutHome />
        <MenuHome />
        <HomePromotion />
        <HomeShop />
        <HomeBlog />
        <HomeContact />
      </Layout>
    </>
  );
}

export default Home;
