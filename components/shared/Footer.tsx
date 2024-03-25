import React from "react";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="footop flex justify-around items-start mb-6">
                <div className="footimg flex items-center">
                    <img src="/logo.webp" alt="" className="w-36" />
                    <div className="navright">
                        <a href="#">
                            <h3 className="text-2xl font-semibold">
                                CYPRO<span className="text-[#FF4D00]">STUDIO</span>
                            </h3>
                        </a>
                    </div>
                </div>
                <div className="footcolum1 flex flex-col items-start justify-center">
                    <h1 className="foot-header">Other Pages</h1>
                    <h3>
                        <a href="/" className="hover:text-[#CCA2FD]">Home</a>
                    </h3>
                    <h3>
                        <a href="/testimonial" className="hover:text-[#CCA2FD]">Testimonial</a>
                    </h3>
                    <h3>
                        <a href="/contact" className="hover:text-[#CCA2FD]">Contact</a>
                    </h3>
                </div>
                <div className="footcolum1 flex flex-col items-start justify-center">
                    <h1 className="foot-header">Plans</h1>
                    <h3>
                        <a href="/crypto-vip" className="hover:text-[#CCA2FD]">Crypto VIP</a>
                    </h3>
                    <h3>
                        <a href="/forex" className="hover:text-[#CCA2FD]">Forex</a>
                    </h3>
                    <h3>
                        <a href="/stocks" className="hover:text-[#CCA2FD]">Stocks</a>
                    </h3>
                </div>
                <div className="footcolum1 flex flex-col items-start justify-center">
                    <h1 className="foot-header">Social</h1>
                    <p className="mb-2">Support Us on Socials</p>
                    <div className="box-socials-foot flex gap-3">
                        <a href="https://discord.gg/cryptodox">
                            <i className="ri-discord-fill text-2xl hover:text-[#CCA2FD]"></i>
                        </a>
                        <a href="https://www.instagram.com/cryptodox._/">
                            <i className="ri-instagram-line text-2xl hover:text-[#CCA2FD]"></i>
                        </a>
                        <a href="https://twitter.com/cryptodox_">
                            <i className="ri-twitter-x-line text-2xl hover:text-[#CCA2FD]"></i>
                        </a>
                        <a href="https://tiktok.com/@cryptodox">
                            <i className="ri-tiktok-fill text-2xl hover:text-[#CCA2FD]"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="line mb-6 border-t border-white/30"></div>
            <div className="footbootom flex justify-between items-center">
                <h4 className="text-sm">
                    Designed and Developed by{" "}
                    <a href="https://proxyxdz.netlify.app" className="text-[#FF2E58] font-semibold">Proxy</a>{" "}
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
