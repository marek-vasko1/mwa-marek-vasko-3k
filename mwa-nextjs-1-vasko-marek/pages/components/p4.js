import Image from 'next/image'

export default function P4() {
    return (
        <div>
            <div className="grid sm:grid-cols-2 bg-[#FFF2DD] p-4">
                <div className=" sm:ml-32">
                    <p className="text-[#BE6361] sm:mt-32 mt-10">Mel solum</p>
                    <h3 className=" font-custom sm:text-52px text-32px mt-8 mb-8">Mazim iudico</h3>
                    <div >

                        <div className='flex flex-row '><Image src={'/heart.svg'} alt="img1" width={20} height={20} ></Image> <p className="ml-6 mt-3">Bonorum minimum et sit tritani te, qui feugait electram</p></div>
                        <div className='flex flex-row '><Image src={'/star.svg'} alt="img1" width={20} height={20} ></Image><p className="ml-6 mt-3">Cum ei assum tation homero mel corpora consectetuer</p></div>
                        <div className='flex flex-row '><Image src={'/rocket.svg'} alt="img1" width={20} height={20} ></Image><p className="ml-6 mt-3">At per assum dicit verterem veri eripuit honestatis</p></div>
                        <div className='flex flex-row '><Image src={'/broadcast.svg'} alt="img1" width={20} height={20} ></Image><p className="ml-6 mt-3">Lorem deterruisset ea vis expetenda has ex</p></div>
                        <div className='flex flex-row '><Image src={'/user.svg'} alt="img1" width={20} height={20} ></Image><p className="ml-6 mt-3">Usu eu hinc lorem inciderint minim movet quodsi</p></div>
                    </div>
                    <button className="mt-8 py-2 px-9 border border-[#BE6361] mb-16 rounded  text-[#BE6361]">Get started</button>
                </div>
                <div className="grid justify-center content-center sm:mt-16">
                <Image src={'/obrazek5.svg'} alt="img1" width={600}
        height={600}></Image>
            </div>

            </div>
        </div>
    );
}