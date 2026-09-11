import Ban from "./assets/banner-stack.png"
const Banner = () => {
    return (
        <div className="mt-12 container mx-auto flex justify-between items-center ">
            <div className="mw-[700px] flex flex-col gap-6">
                <h1 className='font-extrabold text-6xl'>Build Your Ideal</h1>
                <h1 className='font-extrabold text-6xl bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent'>Development Stack</h1>
                <p className='text-gray-400 max-w-[700px]'>Build smarter, faster, and better with the right technology stack. Explore modern frontend, backend, database, DevOps, and development tools designed to help you choose the technologies that power scalable, reliable, and high-performance digital experiences.
                </p>
                <div>
                    <button className="btn btn-primary bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl">Explore Technologies</button>
                <button className="btn btn-secondary rounded-3xl">Learn More</button>
                </div>
            </div>
            <div>
                <img src={Ban} alt="" />
            </div>
        </div>
    );
};

export default Banner;