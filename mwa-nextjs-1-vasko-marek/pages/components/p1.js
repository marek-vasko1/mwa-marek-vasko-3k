import Image from 'next/image'



export default function P1() {
    return (
  <div>
     
      <div className="grid sm:grid-cols-2 bg-[#BE6361] text-white p-4 ">
            <div className=" sm:ml-32  sm:mt-64 sm:mb-60 mt-5 mb-4">
                <div className=' font-sans '><p>Delectus instructior</p></div>
                <div className="text-52px sm:text-72px font-custom "><h1>Vide legimus consectetuer</h1> </div>
                <div className="grid-rows-2"><input type=" email" className="text-black py-2 px-9 mt-5 mb-5 " /> 
                <button className="py-2 px-9 border sm:ml-6 bg-white text-black" >submit</button></div>
            </div>
                
            <div className="grid justify-center content-center">
                <Image src={'/obrazek1.png'} alt="img1" width={500}
        height={500}></Image>
            </div>

      </div>
  
    
  </div>
    );
  }

