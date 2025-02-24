const FiturSection =()=>{
    return(
        <section className="h-max w-full bg-custom-slate" id="fitur">
            <div className="w-full h-max py-10 bg-blue-700 rounded-3xl space-y-12 flex flex-col justify-center">
                <div className="flex relative w-full items-start h-max justify-center">
                    <h1 className="mt-8 text-5xl max-w-[600px] text-center">
                        Ayo gabung sekarang!
                        dan nikmati berbagai
                        fitur-fitur nya 
                    </h1>
                    <img src="/assets/vector/rocket.svg" className="absolute right-6 top-5 h-48"></img>
                </div>
                <div className="flex space-x-20 pb-5 w-full justify-center">
                    <div className="flex flex-col space-y-3 items-center">
                        <img src="/assets/content-landing/fitur.png" className="rounded-xl h-72 object-cover"></img>
                        <h1>Materi E-Learning</h1>
                    </div>
                    <div className="flex flex-col space-y-4 items-center">
                        <h1>Via Zoom Learning</h1>
                        <img src="/assets/content-landing/fitur2.png" className="rounded-xl h-72 object-cover"></img>
                    </div>
                    <div className="flex flex-col space-y-3 items-center">
                        <img src="/assets/content-landing/fitur3.png" className="rounded-xl h-72 object-cover"></img>
                        <h1>Materi E-Learning</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FiturSection;