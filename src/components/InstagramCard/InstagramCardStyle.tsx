import styled from "styled-components";

export const InstagramCardStyle = styled.div`

li {
    margin-right: 100px;
    margin-left: 100px;
    background-color: #FAFAFA;
    color: #817F7F;
    width: 322px;
    height: 544px;
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
    font-size: 20px;
    margin-left: 10px;
}

Button {

    align-self: flex-end;
    margin-right: 20px;
    
}
`