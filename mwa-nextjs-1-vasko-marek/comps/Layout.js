import Header from "../pages/components/header";
import Footer from "../pages/components/footer";

const Layout = ({children}) => {
    return(
        <div className="content">
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
     );
}

export default Layout;