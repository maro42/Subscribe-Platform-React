import React from 'react';
import styled from 'styled-components';

const StyledLoginForm = styled.div`
position:absolute;
left:0;
top:0;
bottom:0;
right:0;
background: #e9ecef;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const WhiteBox = styled.div`
.logo-area {
    display:block;
    padding-bottom:2rem;
    text-align:center;
    font-weight:bold;
    letter-spacing:2px;
}
box-shadow:0 0 8px rgba(0,0,0,0.025);
padding:2rem;
width:360px;
background:white;
border-radius:2px;
`;

const LoginForm = ({children}:any) => {
    return (
        <StyledLoginForm>
            <WhiteBox>
                {children}
            </WhiteBox>
        </StyledLoginForm>
    )
}

export default LoginForm;