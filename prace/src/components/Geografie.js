
import picture from "./Snímek obrazovky 2022-01-02 142026.png";

function AppGeografie() {
  return (
    <div id="T2" className=" flex items-center justify-center id-T2  ">
      <div className="grid grid-cols-2 mt-80 lg:mt-24 ">

        <div>
          <img className= " pl-8 lg:ml-48 w-48 mt-16 lg:w-96 lg:mt-20 rounded-md lg:rounded-md drop-shadow-2xl" src={picture} alt="" />
        </div>
        <div className= " pr-8 pl-8 lg:pl-0 lg:pr-0 lg:mr-48 ">
          <p className="  md:text-xl text-center lg:mt-36 lg:rounded-full rounded-md lg:px-10 lg:py-7 bg-blue-800 text-sm  text-white">
            Na ostrově Taiwan se nachází zatím pouze město Taipei a pár přilehlých budov. 
            Na ostrově je též několik waystoneů. Celý ostrov zatím patří do náruče jedné 
            frakce a to do stejnojmené frakce Taiwan, která se zaměřuje zejména na huntění
            hráčů po mapě a zemědělství spojené s vařením lektvarů a alkoholu.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default AppGeografie;