import Image from 'next/image'

export default function P2() {
    return (
  <div>
     <div className="grid sm:grid-cols-2 bg-[#FFF2DD] p-4">
         <div className="grid justify-center content-center"><Image src={'/obrazek2.png'} alt="img1" width={500} height={500}></Image></div>
         <div className=" sm:ml-11 sm:mt-40 sm:mr-26">
             <div className="text-[#BE6361]"><p>Dico nullam</p></div>
             <div className=" font-custom text-52px sm:mt-8 sm:mb-8 grid sm:grid-cols-2 mt-4"><h2>Vim graeco principes</h2></div>
             <div className="grid sm:grid-cols-2 sm:mb-8 mt-4"><p>Quo ex ocurreret quaerendum. Mel cu ancillae similique. Mei no ubique persecuti, at sit iusto aliquam interpretaris.</p></div>
             <button className="py-2 rounded px-9 border sm:mb-16 bg-[#BE6361] text-white mt-8">Explore</button>
         </div>
     </div>
     
  </div>
    );
  }