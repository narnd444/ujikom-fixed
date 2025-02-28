const BenefitSection =()=>{
    return(
       <section className="h-max pb-10 w-full flex flex-col space-y-5 bg-custom-slate" id="benefit">
        <div className="flex w-full h-max p-5 pl-10 justify-between items-center space-x-5 font-Poppins font-semibold">
             <h1 className="text-3xl text-black w-80">
                <span className="px-1 bg-secondary">Benefit</span> yang kami berikan untuk anda
             </h1>
             <img src="/assets/vector/lamp.svg" className="h-44"/>
        </div>
        <div className="flex space-x-20 items-center h-96 w-full px-10 justify-center flex-wrap">
            <div className="h-full w-80 flex flex-col px-10 p-5 space-y-1 bg-slate-600 rounded-3xl">
                <img src="/assets/content-landing/benefit1.svg" className=""/>
                <h1 className="text-lg ">PEMBELAJARAN DARING</h1>
                <p className="text-sm font-Outfit font-l">Pembelajaran dilakukan secara daring agar dapat belajar dimana saja, sehingga mengefisiensi kan biiaya transportasi.</p>
            </div>
            <div className="h-full w-80 flex flex-col px-10 p-5 space-y-1 bg-blue-400 rounded-3xl">
                <img src="/assets/content-landing/benefit2.svg" className="my-5"/>
                <h1 className="text-lg">PEMBELAJARAN DARING</h1>
                <p className="text-sm font-Outfit font-l">Pembelajaran dilakukan secara daring agar dapat belajar dimana saja, sehingga mengefisiensi kan biiaya transportasi.</p>
            </div>
            <div className="h-full w-80 flex flex-col px-10 p-5 space-y-1 bg-yellow-400 rounded-3xl">
                <img src="/assets/content-landing/benefit3.svg" className="my-5"/>
                <h1 className="text-lg ">PEMBELAJARAN DARING</h1>
                <p className="text-sm font-Outfit font-l">Pembelajaran dilakukan secara daring agar dapat belajar dimana saja, sehingga mengefisiensi kan biiaya transportasi.</p>
            </div>
        </div>

       </section>
    )
}
export default BenefitSection;