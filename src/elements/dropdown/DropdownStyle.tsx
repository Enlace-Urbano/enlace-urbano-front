import styled from "styled-components";

export const DropdownStyle = styled.div`
display: flex;
padding: 10rem 0 4rem 0;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: 100%;
height:calc(100vh - 80px);
background-color: #fdfdfd;

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
    color: black;
}

.svg-container{
    width: 60%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.svg-container div{
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
}
`


export const Line = styled.div`
border-top: 1px solid black;
width: 100%;
`