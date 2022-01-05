import budova1 from './Budova.png'
import budova2 from './Budova2.png'
import pole from './Pole.png'
import radnice from './radnice.png'

function AppTaipei() {
    return (
      <div id="T4" className=" flex items-center justify-center  ">
        <div className="grid grid-cols-3 pt-24">
            <div></div>
            <div className="grid lg:grid-cols-3">
                <div></div>
                <div className= "lg:text-center text-center lg:text-xl lg:px-5 lg:py-3 px-4 py-2 bg-blue-800 lg:rounded-full rounded-full w-full mb-10"> Taipei</div>
                <div></div>
            </div>
            <div></div>
            <div></div>
            <div className="text-center lg:mt-10"><p>V Taipei se nachází rozastevěná radnice, chemička a výskumná laboratoř, palírna. V blízkosti se dále nachází několik polí.</p></div>
            <div></div>
            <div></div>
            <div className="grid mt-10   lg:grid-cols-2 sm:grid-cols-3">

                <div className="lg:p-8 pb-8 w-48 lg:w-full drop-shadow-2xl"><img src={budova1} alt="" /></div>

                <div className="lg:p-8 pb-8  w-48 lg:w-full drop-shadow-2xl"><img src={budova2} alt="" /></div>

                <div className="lg:p-8 pb-8 w-48 lg:w-full drop-shadow-2xl"><img src={pole} alt="" /></div>

                <div className="lg:p-8 pb-8 w-48 lg:w-full drop-shadow-2xl"><img src={radnice} alt="" /></div>

            </div>
            <div></div>

        </div>
      </div>
    );
  }
  
  export default AppTaipei;