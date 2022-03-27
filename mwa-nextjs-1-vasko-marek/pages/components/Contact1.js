import Image from 'next/image'

export default function Cont1() {
    return (
        <div className="p-4 bg-[#BE6361] text-white">

            <div className=" sm:ml-32 sm:mr-32 grid sm:grid-cols-2 sm:mb-40 sm:mt-40">
                <div className=" ">
                    <h3 className="mb-3 font-custom text-32px " >Contact</h3>
                    <div className="grid sm:grid-cols-2 text-left"><p className="">Te aliquam noluisse his. Et vel epicuri detracto indoctum, et fierent pericula vim, veniam.</p></div>
                </div>
                <div className="grid justify-center content-center">
                <Image src={'/contactp1.svg'} alt="img1" width={500}
        height={500}></Image>
            </div>
            </div>
        </div>
        
    );
}
