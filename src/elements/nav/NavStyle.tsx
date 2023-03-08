import styled from "styled-components";

export const NavStyle = styled.nav`
display: flex;
flex-direction: column;
width: 100%;
height: 250px;
position: fixed;
top: 0;
right: 0;



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
`  

export const Navigation = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 170px;
width: 100%;
margin: 20px ;
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
`  

