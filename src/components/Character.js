// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const { name, birth } = props
    return (
        <div>
            <h3>{name}</h3>
            <p>{birth}</p>
        </div>
    )
}

export default Character