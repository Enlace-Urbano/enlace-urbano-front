import styled from "styled-components";

export const NavStyle = styled.nav`
display: flex;
flex-direction: column;
width: 100%;
height: 250px;
position: fixed;
top: 0;
right: 0;

@media screen and (max-width: 768px) {
height: 200px;
}

ul {
    text-decoration: none;
    list-style: none;
}


`  

export const TopNav = styled.div`
background-color: black;
display: flex;
flex-direction: row;
justify-content: flex-end;
color: aliceblue;
width: 100%;
height: 70px;
div {
    display: block;
}
a{
    svg {
        color: white;
        height: 35px;
        width: 35px;
        padding: 15px;
    }
    text-decoration: none;
    list-style: none;
}
ul{
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin-right: 3em;
}
@media screen and (max-width: 768px) {
height: 60px;

div {
    display: none;
}
}
`  

export const Navigation = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
margin: 0 20px;
justify-content: space-between;

span {
    display: none;
}
@media screen and (max-width: 768px) {
height: 80px;
padding: 0.5em;
align-items: center;

img {
    height: 35px;
}
.buttons {
    display: none;
}
span {
    display: block;
    svg{
        padding: 15px;
        color: black;
        width: 40px;
        height: 40px;
        margin: 35px
    }
}
}
`  

export const Menu = styled.div`
color: black;
height: 80px;
width: 100%;


ul{
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
.buttons {
    display: none;
}

@media screen and (max-width: 768px) {
    ul {
        display: none;
    }
    .buttons {
    display: block;
}
}
`  

