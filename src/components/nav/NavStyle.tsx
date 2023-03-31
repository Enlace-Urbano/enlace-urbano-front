import styled from "styled-components";

export const NavStyle = styled.nav`
width: 100%;
display: flex;
flex-direction: column;
position: fixed;
background-color: #424242;
top: 0;
font-size: 16px;
z-index: 2;
`

export const Navigation = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
margin: 0 20px;
justify-content: space-between;

img {
    height: 40px;
    margin-left: 2em;
}

span {
    display: none;
}


@media screen and (max-width: 990px) {
    img{
        margin: 0;
    }
}

@media screen and (max-width: 865px) {
    height: 70px;
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
            color: #ffffff;
            width: 35px;
            height: 35px;
            margin: 40px
        }
    }
}
`

export const Menu = styled.div`
width: 100%;
color: #ffffff;

ul{
    padding: 10px;
    height: 70px;
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}

li:hover {
    transition: 0.2s;
    color: #00B899;
}

li:focus{
    color:  #579288;
}
.buttons {
    display: none;
}

@media screen and (max-width: 865px) {
    ul {
        display: none;
    }
    .buttons {
        display: block;
    }
}
`

