import Image from 'next/image'

export default function P8() {
    return (
        <div className=" bg-[#FFF2DD] p-4">
            <div className=" grid place-items-center">
                <p className="mt-10 text-[#BE6361]">Mazim nemore</p>
                <h3 className="text-52px font-custom">Nullam ornatus</h3>
            </div>
            <div className="grid sm:grid-cols-3 mt-12">
                <div className=" bg-white p-14 sm:ml-32 mb-4 sm:mb-0 drop-shadow-2xl">
                    <div className="grid grid-cols-2">
                        <div>
                            <p className=" text-[#BE6361] font-bold">
                                Maiestatis
                            </p>
                        </div>
                        <div className='font-custom font-bold grid grid-cols-2'><div className=' text-right text-48px'>$</div><div className='text-80px'>9</div> </div>
                    </div>
                    <div className="  ml-3">
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">An mel everti invenire</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Intellegam legendos </p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Consequuntur eu sit</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Solet nostrum</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Consectetuer sea</p></div>

                    </div>

                    <div className="grid place-items-center">
                        <button className="mt-8 py-2 px-14 border border-[#BE6361]  rounded  text-[#BE6361]">Buy</button>
                    </div>
                </div>
                <div className=" bg-[#A15352] p-14 sm:ml-12 sm:mr-12 drop-shadow-2xl mb-4 sm:mb-0">
                    <div className="grid grid-cols-2">
                        <div>
                            <p className=" text-white  font-bold">
                                Maiestatis
                            </p>
                        </div>
                        <div className='text-white font-custom mr-12 font-bold grid grid-cols-2'><div className=' text-right text-48px'>$</div><div className='text-80px'>24</div> </div>
                    </div>
                    <div className="  ml-3 text-white">
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">An mel everti invenire</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Intellegam legendos </p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Consequuntur eu sit</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Solet nostrum</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Consectetuer sea</p></div>
                        
                    </div>

                    <div className="grid place-items-center">
                        <button className="mt-8 py-2 px-14 border border-[#000000] bg-white rounded  text-[#000000]">Buy</button>
                    </div>
                </div>
                <div className=" bg-white p-14 sm:mr-32 drop-shadow-2xl mb-4 sm:mb-0">
                    <div className="grid grid-cols-2">
                        <div>
                            <p className=" text-[#A15352] font-bold">
                                Maiestatis
                            </p>
                        </div>
                        <div className='mr-12 font-custom font-bold grid grid-cols-2'><div className=' text-right text-48px'>$</div><div className='text-80px'>99</div> </div>
                    </div>
                    <div className=" ml-3 ">

                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Intellegam legendos </p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Consequuntur eu sit</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Solet nostrum</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Consectetuer sea</p></div>
                        <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Consectetuer sea</p></div>

                    </div>

                    <div className="grid place-items-center">
                        <button className="mt-8 py-2 px-14 border border-[#BE6361]  rounded  text-[#BE6361]">Buy</button>
                    </div>
                </div>



            </div>
            <div className="">
                <div className="grid sm:grid-cols-3 text-center mt-8 text-[#333333] pb-8 font-thin">
                    <div></div>
                    <p>Diam facilisi insolens per cu, eos malorum voluptaria
                        esse concludaturque facete quaeque consequat </p>
                </div>
            </div>
        </div>
    );
}