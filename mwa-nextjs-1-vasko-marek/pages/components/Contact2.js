import Image from 'next/image'
export default function Cont2() {
    return (
        <div className="grid sm:grid-cols-2 sm:ml-32 sm:mr-32 mt-10">
            <div>
                <div className="grid sm:grid-cols-2 ">
                    <div className=" grid grid-cols-3 justify-items-center pt-5 pb-5 ml-4 mr-4 bg-white mt-8 mb-8 drop-shadow-lg">
                        <div><div className="grid justify-center content-center "><Image src={'/mobile.svg'} alt="img3" width={60} height={60} /></div></div>
                        <div className="cols-span-2">
                            <h5 className="font-bold">Call us</h5>
                            <p>+1 234 567 89 00</p>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 justify-items-center pt-5 pb-5 ml-4 mr-4 bg-white mt-8 mb-8 drop-shadow-lg">
                        <div><Image src={'/mail.svg'} alt="img3" width={60} height={60} /></div>
                        <div className="cols-span-2 ml-8">
                            <h5 className="font-bold">Write us</h5>
                            <p className="font-bold">info@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className=" mt-4 p-4">
                    <p>Cum ea debitis maluisset gubergren, at mea essent splendide. Vix dicam dolore cu. Mel erat timeam scriptorem an. Sit alii tantas viderer no. An mel nostrum appareat.</p>
                </div>
                <div className="mt-4 p-4 font-thin">
                    <p>Vix habeo scaevola percipitur ne, qui noster abhorreant ne, mea in dicant eligendi evertitur. Ad falli aliquid menandri his. Usu vocent copiosae ut. No nihil munere eum.</p>
                </div>
                <div className="grid sm:grid-cols-2 p-4">
                    <div className=" "><input type=" text" className="text-black py-2 sm:px-12 px-16 mt-3 border border-black " placeholder="Your name" /> </div>
                    
                    <div><input type=" email" className="text-black py-2 sm:px-12 px-16 mt-3 border border-black " placeholder="Your email" /> </div>

                </div>
                <div className="p-4"><input type=" message" className="text-black mt-3 py-9 sm:px-52 px-16 border border-black"placeholder="Message"   /> </div>

            </div>



            <div className="grid justify-center content-center">
                <Image src={'/bitmapc.svg'} alt="img1" width={500}
        height={500}></Image>
            </div>



            <div>

            </div>

        </div>

    );
}