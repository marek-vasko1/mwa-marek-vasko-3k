import pictureSmlouva from './Snímek obrazovky 2022-01-02 160759.png'
import pictureSmlouva2 from './Snímek obrazovky 2022-01-02 160817.png'

function AppAllies() {
    return (
        <content><div className=" grid lg:grid-cols-7">
            <div></div>
            <div></div>
            <div></div>
            <div id="T3" className=" lg:text-xl text-xl text-center lg:text-center lg:mt-20 mt-20 lg:rounded-full rounded-full lg:px-4 lg:py-2 px-4 py-2  bg-blue-900"><h6>Allies</h6></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
            <div className=" grid grid-cols-3">
                <div></div>
                <div>
                    <p className=" lg:text-lg lg:ml-10 lg:mt-10 mt-10 justify-center text-center"> Nyní máme uzavřeou alianci s těmito zeměmi/městy v allianci SSSR.</p>
                </div>
                <div></div>
                <div></div>
                <div className="lg:text-xl lg:text-center text-center mt-14 lg:mt-20"> <p>China</p> </div>
                <div></div>
                <div></div>
                <div className="lg:text-xl lg:text-center lg:mt-20 text-center mt-10 "><p>SR</p></div>
                <div></div>
                <div></div>
                <div className="lg:text-xl lg:text-center lg:mt-20 text-center mt-10 "><p>London</p></div>
                <div></div>
                <div></div>
                <div className="lg:text-xl lg:text-center lg:mt-20 text-center mt-10 "><p>Germania</p></div>
                <div></div>
                <div></div>
                <div className=" grid lg:grid-cols-3">
                    <div></div>
                    <div>
                        <p className="id-T3 lg:text-lg  lg:mt-10 mt-10 text-center lg:px-4 lg:py-2 lg:rounded-full rounded-full px-4 py-2  bg-blue-900"> Kopie smlouvy</p>
                    </div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
                <div className=" justify-center lg:mt-10 mt-6 lg:w-full  drop-shadow-2xl bg-local "> <img src={pictureSmlouva} alt="" /></div>
                <div></div>
                <div></div>
                <div className=" justify-center lg:mt-10 mt-6 lg:w-full drop-shadow-2xl"> <img src={pictureSmlouva2} alt="" /></div>
                <div></div>
                <div></div>
            </div>






        </content>




    );
}

export default AppAllies;