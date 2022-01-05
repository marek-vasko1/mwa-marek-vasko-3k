function AppHeader() {
    return(
        <header className="bg ">
            <div className="flex items-center justify-center ">
                <div className=" p-4 grid grid-cols-3  items-center  justify-center gap-2 ">

                    <div className=" p-3 rounded "><h5>Startup Landing</h5></div>
                    <div className="grid grid-cols-4">
                        <div className=" p-3 rounded "><h6>Home</h6></div>
                        <div className=" p-3 rounded "><h6>Features</h6></div>
                        <div className=" p-3 rounded "><h6>Pricing</h6></div>
                        <div className=" p-3 rounded right-0"><h6 className="right-0">Testimonial</h6></div>

                    </div>

                    <div className=" p-3 mr  rounded text-right"><h6>Get Started</h6></div>

                </div>
            </div>


        </header>
        
    );
    
}
export default AppHeader;