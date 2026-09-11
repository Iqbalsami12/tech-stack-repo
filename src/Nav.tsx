import Logo from "./assets/logo-text.png"
const Nav = () => {
    return (
        <div className="mt-[30px] bg-white sticky top-0 z-10 py-4">
            <nav className="flex justify-around items-center">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li className="text-pink-500"><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-primary rounded-3xl ">Sign In</button>
                    <button className="btn btn-secondary  rounded-3xl">Sign Up</button>
                    
                    
                </div>
            </nav>
        </div>
    );
};

export default Nav;