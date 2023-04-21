import Header from "./DefaultLayout/Header/Header";
import Footer from "./DefaultLayout/Footer/Footer";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header  />
            <div className="content" style={{marginTop:"100px"}}>
                {children}
            </div>
            <Footer />
        </div>
     );
}

export default DefaultLayout;