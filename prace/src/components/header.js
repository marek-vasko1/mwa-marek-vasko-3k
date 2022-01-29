import Geografie from './Geografie.js'
import picture from './tw.jpg'


function AppHeader() {
    return (
      <header className="bg w-full fixed z-50">
      <div className="flex lg:items-center lg:justify-center bg-blue-900 shadow shadow-blue-900/100 text-left ">
          <div>
              <div className=" lg:p-1 grid lg:grid-cols-5 grid-cols-3   lg:items-center  lg:gap-2 text-left ">
              <div className=" p-3 lg:p-3 lg:pt-3 rounded lg:w-20 w-20 dorpdown "><h5><a href="#T1"><img src={picture} alt="" /></a></h5></div>
              <div></div>
              <div className="grid lg:grid-cols-4 justify-items-end">
                  <div className=" p-3 lg:pt-3 lg:mr-8 rounded text-white hover:decoration-4 hover:font-bold text-right"><h6> <a href="#T2">Geografie</a></h6></div>
                  <div className=" p-3  lg:pt-3 rounded text-white hover:font-bold text-right"><h6> <a href="#T3">Allies</a></h6></div>
                  <div className=" p-3  lg:pt-3 rounded text-white hover:font-bold text-right"><h6> <a href="#T5"> War</a></h6></div>
                  <div className=" p-3  lg:pt-3 rounded right-0 text-white hover:font-bold text-right "><h6 className="right-0"> <a href="#T4">Taipei</a> </h6></div>
  
              </div>
                <div></div>
              <div className=" p-3 lg:p-3 lg:mr lg:text-right text-white lg:hover:font-bold hover:font-semibold "><h6> <a href="https://earth.warfaremc.eu/">World Map</a></h6></div>
  
          </div>
          
          </div>
      </div>
  
        
  </header>
    );
  }
  
  export default AppHeader;