import Logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div>

        <div className="flex justify-around mt-12 w-full">
                        <div>
                <img className="h-[40px] w-[140px]" src={Logo} alt="" />
                <p className="text-gray-400">Curated tools, technologies, and resources for developers <br /> building
                    modern software.</p>
                <ul className="flex gap-2.5 ">
                    <li><a className="text-gray-900" href="">Github</a></li>
                    <li><a className="text-gray-900" href="">Twitter</a></li>
                    <li><a className="text-gray-900" href="">LinkedIn</a></li>
                </ul>
            </div>
            <ul>
                <li className="font-bold">PRODUCT</li>
                <li className="text-gray-400 text-[12px]">Home</li>
                <li className="text-gray-400 text-[12px]">Technologies</li>
                <li className="text-gray-400 text-[12px] ">Projects</li>
            </ul>
            <ul>
                <li className="font-bold">COMPANY</li>
                <li><a className="text-gray-400 text-[12px]" href="">About</a></li>
                <li><a className="text-gray-400 text-[12px]" href="">Contact</a></li>
                <li><a className="text-gray-400 text-[12px]" href="">Careers</a></li>
            </ul>
            <ul>
                <li className="font-bold">LEGAL</li>
                <li><a className="text-gray-400 text-[12px]" href="">Privacy Policy</a></li>
                <li><a className="text-gray-400 text-[12px]" href="">Terms of Service</a></li>
                
            </ul>
        </div>

        <div className="flex justify-between mt-10 mx-12">
            <p className="text-gray-400 text-[12px]">&copy;2026 Devstack, All rights reserved </p>
            <ul className="flex gap-4">
                <li><a className="text-gray-400 text-[12px]"  href="">Privacy</a></li>
                <li><a className="text-gray-400 text-[12px]"  href="">terms</a></li>
            </ul>
        </div>

        </div>
        

        

    );
};

export default Footer;