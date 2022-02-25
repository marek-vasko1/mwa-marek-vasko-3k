export default function Header() {
    return (
  <div>
      <div className="grid grid-cols-3 bg-[#BE6361] text-white items-center p-1">
          <h3 className="ml-32 text-logo leading-logo font-custom">LOGO</h3>
          <div className="grid grid-cols-2">

              <div className="justify-self-end mr-5 text-16px">
                  <p>portfolio</p>
                  
              </div>
              <div className="justify-self-start ml-5 text-16px"><p>Contact</p></div>
              
          </div>

          <div className="justify-self-center text-16px"><button className="py-2 px-9 border ">Sign up</button></div>
      </div>

    
  </div>
    );
  }

