// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.primaryColor};
    display: flex;
    border-radius: 10%;
    justify-content: space-between;
    width: 50%;
    margin: 1% 25% 1%;

     @media only screen and ${props => props.theme.breakpointMobile} {
        display: flex;
        flex-direction: column;
   }
`

const Character = (props) => {
    const { name, birth } = props
    return (
        <StyledDiv>
            <h3>{name}</h3>
            <p>{birth}</p>
        </StyledDiv>
    )
}

export default Character