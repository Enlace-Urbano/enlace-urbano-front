import styled from "styled-components";

export const InstagramCardStyle = styled.div`

li {
    margin: 2em;
    background-color: #e3eef681;
    padding: 1em;
    color: #424242;
    width: 300px;
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
} 

li:hover {
    transition: 0.2s;
    background-color:var(--color-lightblue);

}

img {
    width: 260px;
    border-radius: 5px;
    margin-top: 0;

}

p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 18px;
    margin-left: 6px;
    margin-bottom: 10px;
}

Button {

    align-self: flex-end;
    margin-right: 20px;
    
}
`