import styled from "styled-components";

export const InstagramCardStyle = styled.div`

li {
    margin: 3em;
    background-color: #FAFAFA;
    padding: 1em;
    color: #817F7F;
    width: 322px;
    height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
} 

img {
    width: 280px;

}

p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 18px;
    margin-left: 10px;
}

Button {

    align-self: flex-end;
    margin-right: 20px;
    
}
`