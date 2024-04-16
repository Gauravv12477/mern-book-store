import BannerCard from "../Home/BannerCard"



const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
            {/* left side */}
            <div className="md:w-1/2 space-y-8 h-full">
                <h2 className="text-5xl font-bold leading-snug text-black">Buy and Sell your Books 
                <span className="text-blue-700">for the Best Prices.</span></h2>
                <p className="md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus similique illo, harum tempore doloremque numquam voluptatum repudiandae hic animi impedit, illum quis deserunt rem! Voluptate, ipsa. Distinctio laboriosam totam repudiandae excepturi possimus nostrum saepe porro, ipsum quisquam hic officia vero ducimus? Magni nihil odit omnis reiciendis velit a reprehenderit explicabo!</p>
                <div>
                    <input type="search" name="search" id="search" placeholder="search a book" className="py-2 px-2 rounded-s-sm outline-none" />
                    <button className="bg-blue-700 px-6 py-2 m-1 text-white font-medium hover:bg-black transition-all ease-in duratoion-200">Search</button>
                </div>
            </div>
            {/* right side */}
                <BannerCard>Banner</BannerCard>
            <div>
                
            </div>
        </div>

    </div>
  )
}

export default Banner