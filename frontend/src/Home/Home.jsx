import Banner from "../components/Banner"
import MyFooter from "../components/MyFooter"
import BestSellerBooks from "./BestSellerBooks"
import FavBook from "./FavBook"
import OtherBook from "./OtherBook"
import PromoBanner from "./PromoBanner"
import Review from "./Review"

const Home = () => {
  return (
    <div className="!scroll-smooth">
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBook/>
      <Review/>
      <MyFooter/>
    </div>
  )
}

export default Home