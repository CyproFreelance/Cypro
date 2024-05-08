import React from "react";
import '../Hero/hero.css'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="footop flex justify-around items-start mb-6">
                <div className="footimg flex items-center">
                    <img src="/logo.webp" alt="" className="w-36" />
                    <div className="navright">
                        <a href="#">
                            <h3 className="text-2xl font-semibold">
                                CYPRO<span className="bg-clip-text text-transparent font-[900] bg-gradient-to-r from-[#FF1D60] to-[#C71869]">STUDIO</span>
                            </h3>
                        </a>
                    </div>
                </div>
                <div className="footcolum1 flex flex-col items-start justify-center ">
                    <h1 className="foot-header font-[700] text-[#de1268]">Other Pages</h1>
                    <h3>
                        <a href="/" className="hover:text-[#CCA2FD]">Home</a>
                    </h3>
                    <h3>
                        <a href="/" className="hover:text-[#CCA2FD]">Testimonial</a>
                    </h3>
                    <h3>
                        <a href="/contact" className="hover:text-[#CCA2FD]">Contact</a>
                    </h3>
                </div>
                <div className="footcolum1 flex flex-col items-start justify-center">
                    <h1 className="foot-header text-[#de1268]">Plans</h1>
                    <h3>
                        <a href="/works" className="hover:text-[#CCA2FD]">Works</a>
                    </h3>
                    <h3>
                        <a href="/blogs" className="hover:text-[#CCA2FD]">Blogs</a>
                    </h3>
                    <h3>
                        <a href="/contact" className="hover:text-[#CCA2FD]">Order</a>
                    </h3>
                </div>
                <div className="footcolum1 flex flex-col items-start justify-center">
                    <h1 className="foot-header text-[#de1268]">Social</h1>
                    <p>Support Us on Socials</p>
                    <div className="box-socials-foot flex gap-3">
                        <a href="https://dsc.gg/cyprostudios" target="_blank">
                            <i className="ri-discord-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/CyproFreelance">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="https://twitter.com/CyproFreelance">
                            <i className="ri-twitter-x-line"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/cypro-studios-044805267/">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="line mb-6 border-t border-white/30"></div>
            <div className="footbootom flex justify-between items-center">
                <h4 className="text-sm max-md:hidden">
                    Designed and Developed by{" "}
                    <a href="https://proxyxdz.netlify.app/" className="text-[#FF2E58] font-semibold">Proxy</a>
                </h4>
                <h4 className="text-sm">
                    All Rights Reserved{" "}
                    <a href="https://dsc.gg/cyprostudios" className="text-[#FF2E58] font-semibold">Cypro Studio</a>
                </h4>
            </div>
        </footer>
    );
};

export default Footer;
