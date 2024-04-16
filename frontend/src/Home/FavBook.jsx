
import FavBookImg from "../assets/favoritebook.jpg";
import { useNavigate } from "react-router-dom";


const FavBook = () => {
  
    const navigate = useNavigate();

    return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="md:w-1/2 flex justify-center">
            <img src={FavBookImg} className="rounded w-10/12" alt="" />

        </div>
        <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold my-2 md:my-5  md:w-3/4 leading-snug ">Find Your favorite <span className="font-bold text-blue-600">Book here!!</span></h2>
            <p className="mb-10 text-lg md:w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus enim iusto perspiciatis quas et ad sunt blanditiis. Eos quo nulla pariatur molestias quaerat eum asperiores hic repellendus explicabo distinctio omnis, ducimus porro rerum tempore eligendi atque, eius, non earum neque aspernatur ipsam obcaecati quibusdam architecto! Repellendus aperiam sunt aut.</p>

            {/* stats */}
            <div className="flex flex-col sm:flex-row justify-between  gap-6 md:w-3/4 my-14">
                <div className="p-3">
                    <h3 className="text-3xl font-bold">800+</h3>
                    <p className="text-gray-700 font-semibold pt-1">Book Listing</p>
                </div>
                <div className="p-3">
                    <h3 className="text-3xl font-bold">550+</h3>
                    <p className="text-gray-700 font-semibold pt-1">Registerd Users</p>
                </div>
                <div className="p-3">
                    <h3 className="text-3xl font-bold">1200+</h3>
                    <p className="text-gray-700 font-semibold pt-1">PDF Down</p>
                </div>
            </div>

            <button onClick={()=> navigate("/shop")} className="bg-blue-700 mt-12 block text-white font-semibold px-5 py-2 rounded hover:bg-black transitio-all duration-300">Explore More</button>
        </div>
       
    </div>
  )
}

export default FavBook