export default function Header() {
    return (
  <div>
      <div className="grid sm:grid-cols-3 bg-[#BE6361] text-white items-center p-4">
          <h3 className="sm:ml-32 text-logo leading-logo font-custom sm:text-left">LOGO</h3>
          <div className="grid md:grid-cols-2">

              <div className="sm:justify-self-end sm:mr-5 text-16px text-right">
                  <p className="">portfolio</p>
                  
              </div>
              <div className="sm:justify-self-start sm:ml-5 text-16px sm:text-right text-right"><p>Contact</p></div>
              
          </div>

          <div className="sm:justify-self-center text-16px "><button className="py-2 px-9 border sm:text-right ">Sign up</button></div>
      </div>

    
  </div>
    );
  }

