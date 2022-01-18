import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
padding: 0;
margin: 0;
box-sizing: border-box;
}


body {
/* transition: all 0.9s linear; */
    background: ${(props) => props.theme.bgc};
font-family: 'Nunito Sans', sans-serif;

}

.full{
height: 100%;
width: 100%;
}

.f-3{
font-weight:300;
}

.f-6{
font-weight:600;
}

.f-8{
font-weight:800;
}

.bg{
background: ${(props) => props.theme.bgc};

}
.icon_c{
color: ${(props) => props.theme.txt};

}

.bgr{
border: 1px solid green;
}
.br{
border: 1px solid red;

}

.bxshdw{
    box-shadow: 0 0 0 0 black;

}

.txt{
color: ${(props) => props.theme.txt};

}
.ctd{
 display: flex;
    justify-content: center;
    align-items: center;
}

.ctd_b{
 display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn{
    background: ${(props) => props.theme.ele};
color: ${(props) => props.theme.txt};
padding: 5px 20px;
border-radius: 8px;
        text-transform: capitalize;

   @media screen and (max-width: 548px) {
      padding: 5px 18px;
      }

}



`;

export default GlobalStyle;
