import Image from 'next/image'




export default function P3() {
  return (
    <div className="bg-white">
      <div className="grid place-items-center pt-6 ">
        <p className=" sm:mt-8 text-[#BE6361]">Nominavi suavitate</p>
        <h3 className=" font-custom text-52px sm:mt-8 sm:mb-8 text-center  ">Offendit persecuti</h3>
        <div className="text-center grid sm:grid-cols-3 mt-4"><div></div><p>Eu pro ludus dignissim. Eos debet molestiae constituto ne, quo consul interesset ei, cotidieque theophrastus ea his.</p></div>
      </div>

      <div className="grid sm:grid-cols-3 place-items-center mt-10 sm:ml-32 sm:mr-32">
        <div className="grid place-items-center mt-8 "><Image className=' ' src={'/Object.svg'} alt="img1" width={90} height={90} ></Image>
        <h5 className=" font-bold mt-3">Possim</h5>
        <p className="text-center font-thin mt-3">An animal assentior nam, sed qualisque </p>
        <p className="text-center font-thin">deterruisset ea qui melius erroribus</p>
        </div>

        <div className="grid place-items-center mt-8 "><Image src={'/object1.svg'} alt="img2" width={90} height={90} ></Image>
        <h5 className=" font-bold mt-3">Vivendo</h5>
        <p className="text-center font-thin mt-3">Assum ubique quodsi sea ad partem </p>
        <p className="text-center font-thin">vocent vel, ius id viris utinam</p>
        </div>

        <div className="grid place-items-center mt-8 "><Image src={'/object2.svg'} alt="img3" width={90} height={90} />
        <h5 className=" font-bold mt-3">Deterruisset</h5>
        <p className="text-center font-thin mt-3">Nam natum volutpat eu natum elitr vel </p>
        <p className="text-center font-thin">te id qui purto dicit</p>
        </div>



      </div>
      <div className="grid place-items-center sm:mt-8">
        <button className="py-2 px-9 border sm:mb-16 mb-4 rounded bg-[#BE6361] text-white mt-8">Learn more</button>
      </div>

    </div>
  );
}