import { DivTitle, DivStyled, LabelStyled, ButtonStyled } from './SignUp.styled';

function Success({value}) {
    return ( 
        <>
            <DivTitle> Welcome {value.userName}</DivTitle>
            <DivStyled>
                
            </DivStyled>
        </>
     );
}

export default Success;