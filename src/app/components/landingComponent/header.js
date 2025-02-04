import { RiSearch2Line } from "react-icons/ri";
const Header =()=>{
    return (
        <header className="flex fixed w-full h-max p-6 px-10 justify-between items-center space-x-5 font-Outfit z-30">
            <img src="/assets/logo/logokl.svg" className="h-14"></img>
            <nav className="space-x-5 flex text-black text-xs items-center rounded-full p-1 px-2 bg-slate-200 ">
                <a href="" className="bg-white rounded-full p-1 px-3 ">Home</a>
                <a href="" className="bg-white rounded-full p-1 px-3 ">Fitur</a>
                <a href="" className="bg-white rounded-full p-1 px-3 ">Benefit</a>
                <a href="" className="bg-white rounded-full p-1 px-5 ">CS</a>
            </nav>
            <div className="flex space-x-5">
                <button className="p-1 text-sm rounded-full bg-primary px-8">Daftar</button>
                <form>
                <input className="p-1 bg-transparent rounded-full border text-slate-800 border-primary w-28 px-2" type="search" placeholder="Cari disini.."></input>
                </form>
            </div>
        </header>
    )
}
export default Header;