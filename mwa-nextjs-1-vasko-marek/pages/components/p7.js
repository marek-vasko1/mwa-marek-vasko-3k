import Checkmark from "./checkmark";

export default function P7() {
    return (
        <div>
            <div className="grid sm:grid-cols-2 p-4">
                <div></div>
                <div>
                    <p className=" mt-10 text-[#BE6361]">Ei vix quot </p>
                    <h3 className=" text-52px font-custom">Suscipit natum</h3>
                    <div className="grid grid-cols-2 mt-8 mb-8 ml-4">
                        <div className=" mt-3">
                            <div className="mt-3"><Checkmark></Checkmark>
                            <p>Usu vitae</p></div>
                            <div className="mt-3"><Checkmark></Checkmark>
                            <p>Quidam officiis</p></div>
                            <div className="mt-3"><Checkmark></Checkmark>
                            <p>Vel tollit</p></div>
                            <div className="mt-3"> <Checkmark></Checkmark>
                            <p>Nihil tantas</p></div>
                           


                        </div>
                        <div className="mt-3">
                            <div className="mt-3"><Checkmark></Checkmark>
                            <p>Decore ut</p></div>
                            <div className="mt-3"><Checkmark></Checkmark>
                            <p>Similique sea ei</p></div>
                            <div className="mt-3"><Checkmark></Checkmark>
                            <p>Indoctum</p></div>
                            <div className="mt-3"><Checkmark></Checkmark>
                            <p>Platonem eos</p></div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}