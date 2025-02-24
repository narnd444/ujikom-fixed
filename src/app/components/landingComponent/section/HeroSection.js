import { FaArrowRight } from "react-icons/fa";
const heroSection =()=>{
    return(
        <section className="h-screen w-full flex flex-col  p-10 bg-custom-slate" id="home">
            <div className="relative h-full w-full flex flex-col justify-center items-center font-Arial mt-28">
                <img src="/assets/vector/arrow1.svg" className="absolute h-32 top-0 right-44"></img>
                <img src="/assets/vector/arrow2.svg" className="absolute h-32 top-20 left-40"></img>
                <img src="/assets/vector/world.svg" className="absolute h-32 bottom-0 right-56"></img>
                <div className="text-wraper flex flex-col space-y-2 p-2">
                <h1 className="text-black text-6xl text-center">
                Tempat terbaik belajar
                </h1>
                <h1 className="text-black text-6xl text-center">
                    <span className="text-secondary font-Delicious ">Matematika</span> dan <span className="text-primary font-Delicious ">Bahasa Inggris</span>
                </h1>
                <h1 className="text-black text-6xl text-center">
                    untuk <span className="bg-secondary px-1">anak-anak</span>
                </h1>
                </div>
                <div className="pharagraf font-Outfit max-w-[470px] text-center">
                    <p className="text-sm text-black">K-Learns merupakan website e-learnning yang diperunutkan untuk anak-anak usia dibawah 10 tahun.  Dalam website ini anda dapat memberikan materi pelajaran Matematika ataupun Bahasa inggris kepada anak anda.</p>
                </div>
                <button className="flex bg-primary p-2 px-4 mt-5 rounded-full items-center shadow-md">Mulai Sekarang<FaArrowRight className="mt-1 p-2 ml-4 h-8 w-8 bg-white rounded-full text-black"/></button>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-start mt-5">
                <h1 className="text-black flex w-full justify-center">Or</h1>
                <div className=" flex flex-col space-y-3 w-full justify-center mt-2">
                    <h1 className="text-black w-full flex justify-center">Free Demo Test</h1>
                    <div className="flex place-items-center w-full justify-center  space-x-5">
                        <a className="w-44 flex justify-center p-3 px-5 bg-slate-500 rounded-lg">Materi Demo</a>
                        <a className="w-44 flex justify-center p-3 px-5 bg-slate-500 rounded-lg">Metode Belajar</a>
                        <a className="w-44 flex justify-center p-3 px-5 bg-slate-500 rounded-lg">Kuis Demo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default heroSection;