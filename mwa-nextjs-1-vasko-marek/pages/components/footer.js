import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <div className="bg-[#BE6361]">



        <div className="grid sm:grid-cols-2  sm:ml-32">
          <div className="text-white">
            <h3 className=" font-custom text-52px">
              LOGO
            </h3>
            <div className="grid grid-cols-1 mr-40">
              <p>Sit alii tantas viderer no. An mel nostrum appareat. Ad consul facilis est. Vix habeo scaevola percipitur ne, qui noster abhorreant ne.</p>
            </div>
            <div className="grid grid-cols-3 justify-items-start mt-3 ">
              <Image src={'/facebook.svg'} alt="img1" width={20} height={20} className=""></Image>
              <Image src={'/path.svg'} alt="img1" width={20} height={20} className="mr-10"></Image>
              <Image src={'/shape.svg'} alt="img1" width={20} height={20}></Image>

            </div>

            <div className="grid grid-rows-1"><img src="" alt="" /><img src="" alt="" /><img src="" alt="" /></div>
          </div>
          <div className="sm:grid sm:grid-cols-3 text-white mb-14">

            <div>
              <p className="font-bold mt-6">Habeo</p>
              <div className="font-thin">
                <p className="sm:mt-8 mt-4">Scaevola</p>
                <p>Aliquam</p>
                <p>Noluisse</p>
                <p>Epicuri</p>
                <p>Detracto</p>
              </div>



            </div>
            <div>
              <p className="font-bold mt-6">Indoctum</p>

              <div className=" font-thin">
                <p className="sm:mt-8 mt-4">Fierent</p>
                <p>Pericula</p>
                <p>Veniam</p>
                <p>Epicuri</p>
                <p>Mutat</p>
              </div>



            </div>
            <div>
              <p className="font-bold mt-6">Quaestio</p>
              <div className=" font-thin">
                <p className="sm:mt-8 mt-4">Erroribus</p>
                <p>Modus</p>
                <p>Volumus</p>
                <p>Abhorreant</p>
                <p>Mentitum</p>
              </div>


            </div>



          </div>

        </div>



      </div>
      <div className=" text-center text-white p-5 font-thin bg-[#A85756]">
        <p>© LOGO, 2019. All rights reserved. Created by Laaqiq.</p>
      </div>

    </div>
  );
}