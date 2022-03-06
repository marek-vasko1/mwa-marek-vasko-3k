import Image from 'next/image'

export default function P10() {
    return (
        <div className="bg-[#A85756] p-4">
            <div>
                <h3 className=" text-center text-52px font-custom pt-8 pb-8 text-white">Timeam scriptorem</h3>
            </div>
            <div className="grid sm:grid-cols-3 ">
                <div className=" grid grid-cols-3 justify-items-center pt-5 pb-5 bg-white sm:ml-32 mt-8 mb-8 drop-shadow-lg">
                    <div className="grid justify-center content-center "><Image src={'/map.svg'} alt="img3" width={60} height={60} /></div>
                    <div className="cols-span-2">
                        <h5>Office</h5>
                        <p className="font-thin">Mel erat timeam, 123 45-67</p>
                    </div>
                </div>
                <div className=" grid grid-cols-3 justify-items-center pt-5 pb-5 bg-white sm:ml-10 sm:mr-10 mt-8 mb-8 drop-shadow-lg">
                    <div className="grid justify-center content-center "><Image src={'/mobile.svg'} alt="img3" width={60} height={60} /></div>
                    <div className="cols-span-2">
                        <h5>Call us</h5>
                        <p className="font-thin">+1 234 567 89 00</p>
                    </div>
                </div>
                <div className=" grid grid-cols-3 justify-items-center pt-5 pb-5 bg-white sm:mr-32 mt-8 mb-8 drop-shadow-lg">
                    <div className="grid justify-center content-center "><Image src={'/mail.svg'} alt="img3" width={60} height={60} /></div>
                    <div className="cols-span-2">
                        <h5>Write us</h5>
                        <p className="font-thin">info@gmail.com</p>
                    </div>
                </div>

            </div>

        </div>
    );
}