import Image from 'next/image'

export default function P5() {
    return (
        <div>
            <div className="grid sm:grid-cols-2 sm:ml-32 p-4">
                <div>
                    <p className="text-[#BE6361] mt-8">Vim dolore </p>
                    <h3 className="font-custom text-52px mt-8 mb-8">Epicurei aeque</h3>
                </div>
                <div className=" sm:grid sm:place-items-end sm:mr-32"><button className="  sm:mt-8 py-2 px-9 border border-[#BE6361] mb-16 rounded  text-[#BE6361]">All work</button></div>
            </div>
            <div className="grid sm:grid-cols-2 sm:ml-32 sm:mr-32 p-4 mb-20">
                <div className="grid justify-center content-center"><Image src={'/epicurei-aeque-1.svg'} alt="img1" width={500} height={500}></Image><p className=' text-black'>Postea nam at posse dicta</p></div>
                
                <div className="grid justify-center content-center"><Image src={'/epicurei-aeque-2.svg'} alt="img1" width={500} height={500}></Image><p className=' text-black '>Ea vivendo omnesque</p></div>
            </div>
        </div>
    );
}