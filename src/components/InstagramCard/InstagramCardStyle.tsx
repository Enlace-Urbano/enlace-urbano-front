import styled from "styled-components";

export const InstagramCardStyle = styled.div`
li{
    width: 340px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #424242;
    border-radius: 5px;
} 

li:hover{
    transition: 0.2s;
    background-color:var(--color-lightblue);

}

img{
    width: 300px;
    border-radius: 5px;
    margin-top: 0;

}

p{
    width: 300px;
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

a{
    cursor: pointer;
    align-self: flex-end;
    margin-right: 20px;
}
`