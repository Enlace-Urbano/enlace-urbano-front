import styled from "styled-components";

export const FooterStyle=styled.footer`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
color:white;
background-color: #000000;
align-items:center;
justify-items: center;
justify-content: center;
text-decoration:none;
gap: 4em;
padding: 4em;
position: relative;
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
    margin-bottom: 1em;
    gap: .5em;
}

span>div{
    display:flex;

}

svg {
padding: 0.2em;
 width: 30px;
 height: 30px;

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
    margin-left:5px;
    margin-right: 15px;
    height: 30px;
    width:30px;
}
}
a{
    margin-bottom: 10px;
}
}
`