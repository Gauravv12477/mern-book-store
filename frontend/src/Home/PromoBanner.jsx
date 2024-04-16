import { useNavigate } from "react-router-dom";
import bookPic from "../assets/awardbooks.png"
const PromoBanner = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 leading-snug">2023 National Book Award for Fiction Shortlist</h2>
                    <button onClick={() => navigate("/shop")} className="bg-blue-700 mt-12 block text-white font-semibold px-5 py-2 rounded hover:bg-black transitio-all duration-300">Get Promo Code</button>
                </div>
                <div>
                    <img src={bookPic} className="w-96" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PromoBanner