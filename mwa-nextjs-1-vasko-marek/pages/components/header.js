import Portfolio from "../portfolio";
import Link from 'next/link';
import Image from 'next/image';
import script from "./script";


export default function Header() {
    return (
        <div className="">
            <div className="grid grid-cols-2  sm:grid-cols-3 bg-[#BE6361] text-white items-center p-4">
                <h3 className="sm:ml-32 text-logo leading-logo font-custom sm:text-left"> <Link href="/">
                                <a>LOGO</a>
                            </Link></h3>

                <div className="grid md:grid-cols-2">

                    <div className="sm:justify-self-end sm:mr-5 text-16px text-right">
                        <h1 className="title">
                            <Link href="/posts/portfolio">
                                <a>portfolio</a>
                            </Link>


                        </h1>

                    </div>
                    <div className="sm:justify-self-start sm:ml-5 text-16px sm:text-right text-right"> <Link href="/posts/contact">
                                <a>Contact</a>
                            </Link></div>

                </div>

                <div className="sm:justify-self-center text-16px "><button className="py-2 px-9 border sm:text-right ">Sign up</button></div>





            </div>




        </div>

    );

}
