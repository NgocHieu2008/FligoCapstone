import HeaderHome from "./Header/HeaderHome";
import Footer from "../DefaultLayout/Footer/Footer";

function PrimaryLayout({children}) {
    return ( 
        <div>
            <HeaderHome />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
     );
}

export default PrimaryLayout;