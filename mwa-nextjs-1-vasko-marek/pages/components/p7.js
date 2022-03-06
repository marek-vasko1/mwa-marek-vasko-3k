
import Image from 'next/image'


export default function P7() {
    return (
        <div>
            <div className="grid sm:grid-cols-2 p-4">
                <div className="grid justify-center content-center"><Image src={'/obrazek3.svg'} alt="img1" width={500} height={500}></Image><p className=' text-black'>Postea nam at posse dicta</p></div>
                <div>
                    <p className=" mt-10 text-[#BE6361]">Ei vix quot </p>
                    <h3 className=" text-52px font-custom">Suscipit natum</h3>
                    <div className="grid grid-cols-2 mt-8 mb-8 ml-4">
                        <div className=" mt-3">
                            <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Usu vitae</p></div>
                            <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Quidam officiis</p></div>
                            <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Vel tollit</p></div>
                            <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Nihil tantas</p></div>
                        </div>
                        <div className="mt-3">
                            <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Decore ut</p></div>
                            <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Similique sea ei</p></div>
                            <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Indoctum</p></div>
                            <div className='flex flex-row'><Image src={'/checkmark.svg'} alt="img1" width={15} height={15} ></Image> <p className="ml-6 mt-3">Platonem eos</p></div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}