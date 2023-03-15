import styled from "styled-components";

export const DropdownStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 80vh;
background-color: #fdfdfd;

ul {
    width: 100%;

}

li {
    padding: 15px;
    text-align: center;
}
li:hover {
    transition: 0.2s;
    background-color: #edeeed7b;
    font-weight: bold;
}

li:focus{
    color:  #579288;
}
svg{
    height: 30px;
    width: 30px;
    margin: 45px 15px;
    color: black;
}
`


export const Line = styled.div`
border-top: 1px solid black;
height: 2px;
width: 60%;
padding: 0;
margin: 20px auto 0 auto;
`   