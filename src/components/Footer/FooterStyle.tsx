import styled from "styled-components";

export const FooterStyle=styled.footer`
color:white;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: #000000;
align-items:center;
justify-content: space-evenly;
justify-items: center;
justify-content: space-around;
text-decoration:none;
position:fixed;
bottom:0;
left:0;
right:0;

a{
    text-decoration: none;
    color:white;
}
span{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    height: 100%;
}

span>div{
    display:flex;
    justify-content: space-between;
    align-items: center;
}

@media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
   
span{
    width: 200px;
    justify-content:flex-start;
    margin-top: 10px;
    margin-bottom:20px;
}
span>div{
justify-content:flex-start ;

svg{
    margin-left:15px;
    padding-right:5px;    
    height: 30px;
    width:30px;
}
}
a{
    margin-bottom: 10px;
}
}
`