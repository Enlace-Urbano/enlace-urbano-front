import styled from "styled-components";

export const InstagramCardStyle = styled.div`
width: 33.33%;

li {
    margin: 0 auto;
    color: #424242;
    width: 340px;
    height: 500px;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
} 

li:hover {
    transition: 0.2s;
    background-color:var(--color-lightblue);

}

img {
    width: 300px;
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
    width: 300px;
}

Button {

    align-self: flex-end;
    margin-right: 20px;
    
}


`