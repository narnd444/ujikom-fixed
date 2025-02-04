import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer =()=>{
    return (
        <footer className="relative flex space-x-5 items-start justify-between w-full h-max py-6 bg-primary font-Poppins rounded-t-3xl">
            <div className="left-side flex space-x-4 items-start h-full pl-10 mt-3">
                <h1 className="font bold text-xl text-white w-40">MAU TAU INFORMASI LEBIH LANJUT?</h1>
                <hr className="h-20 border-white border"/>
                <div className="flex flex-col space-y-2">
                    <div className="flex space-x-1 items-center text-white">
                        <FaWhatsapp />
                        <p>+12 4041198</p>
                    </div>
                    <div className="flex space-x-1 items-center text-white">
                        <FaInstagram />
                        <p>@klearnfkids</p>
                    </div>
                    <div className="flex space-x-1 items-center text-white">
                        <FaFacebook />
                        <p>K-Learn ID</p>
                    </div>
                </div>
                <hr className="h-20 border-white border"/>
                <div className="flex flex-col space-y-1 ">
                    <h1 className="text-white">Didukung Oleh:</h1>
                    <div className="flex space-x-5 items-start">
                        <div className="flex flex-col space-y-2">
                            <img src="/assets/logo/sponsorship/Kitabisa.svg"/>
                            <img src="/assets/logo/sponsorship/qoala.svg" className="h-5"/>
                        </div>
                            <img src="/assets/logo/sponsorship/prudent.svg" />
                        <div className="flex flex-col justify-start items-start space-y-2">
                            <img src="/assets/logo/sponsorship/bca.svg"/>
                            <img src="/assets/logo/sponsorship/qoala.svg" className="h-5"/>
                        </div>
                    </div>
                </div>
                <hr className="h-20 border-white border"/>
                <h1 className="font bold text-2xl text-white w-32">Yuk Daftar Sekarang</h1>
            </div>
            <img src="/assets/vector/pattern.svg" className="absolute h-32 top-0 opacity-30  right-0"/>
        </footer>
    )
}
export default Footer;