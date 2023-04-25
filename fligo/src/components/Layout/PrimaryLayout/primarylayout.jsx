import HeaderHome from "./Header/HeaderHome";
import Footer from "../DefaultLayout/Footer/Footer";

function PrimaryLayout({children}) {
    return ( 
        <div>
            <HeaderHome />
                <div className="content" style={{marginTop:"100px", overflowX:"hidden"}}>
                    {children}
                </div>
            <Footer />
        </div>
     );
}

export default PrimaryLayout;