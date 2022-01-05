import Geografie from './Geografie.js'


function AppHeader() {
    return (
      <header className="bg w-full fixed">
      <div className="flex lg:items-center lg:justify-center bg-blue-900 text-left">
          <div className=" lg:p-1 grid lg:grid-cols-3   lg:items-center  lg:gap-2 text-left ">
  
              <div className=" p-3 lg:p-3 lg:pt-3 rounded "><h5><a href="#T1">Taiwan</a></h5></div>
              <div className="grid lg:grid-cols-4">
                  <div className=" p-3 lg:pt-3 lg:pr-8 rounded "><h6> <a href="#T2">Geografie</a></h6></div>
                  <div className=" p-3  lg:pt-3 rounded "><h6> <a href="#T3">Allies</a></h6></div>
                  <div className=" p-3  lg:pt-3 rounded "><h6> <a href="#T5"> War</a></h6></div>
                  <div className=" p-3  lg:pt-3 rounded right-0"><h6 className="right-0"> <a href="#T4">Taipei</a> </h6></div>
  
              </div>
  
              <div className=" p-3 lg:p-3 lg:mr lg:text-right"><h6> <a href="https://earth.warfaremc.eu/">World Map</a></h6></div>
  
          </div>
      </div>
  
        
  </header>
    );
  }
  
  export default AppHeader;