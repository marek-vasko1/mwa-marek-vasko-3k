import Image from 'next/image'


export default function Port1() {
    return (
        <div className="p-4 bg-[#BE6361] text-white">

            <div className=" sm:ml-32 sm:mr-32 grid sm:grid-cols-2 sm:mb-40 sm:mt-32">
                <div className=" grid content-center self-center ">
                    <h3 className="mb-3 font-custom text-32px sm:text-72px " >Portfolio</h3>
                    <div className="grid sm:grid-cols-2 text-left "><p className="">Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea nam, at posse dicta est.</p></div>

                </div>
                <div className="grid justify-center content-center">
                <Image src={'/portfolio-obrazek.svg'} alt="img1" width={500}
        height={500}></Image>
            </div>
            </div>
        </div>

    );
}
