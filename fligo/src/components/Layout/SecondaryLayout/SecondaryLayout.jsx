import HeaderHome from "../PrimaryLayout/Header/HeaderHome";
import Footer from "../DefaultLayout/Footer/Footer";
import SearchBar from "~/components/SearchBar/SearchBar";
import styled from "styled-components";
import background1 from '~/assets/bg_1.png'

const SearchWrapper = styled.div`
    background: url(${background1}) no-repeat center center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 0;
`;

function SecondaryLayout({children}) {
    return ( 
        <div>
            <HeaderHome />
                <div className="content" style={{marginTop:"90px", overflowX:"hidden"}}>
                <SearchWrapper>
                    <SearchBar />
                </SearchWrapper>
                    {children}
                </div>
            <Footer />
        </div>
     );
}

export default SecondaryLayout;