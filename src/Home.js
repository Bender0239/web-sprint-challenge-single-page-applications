import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import pizza from './Pizza.jpg'

const StyledHome = styled.div`
    
    .imgDiv{
        display: flex;
        justify-content: center;
    }
    img{
        width: 90%;
        border-radius: 5px;
    }
    .buttonDiv{
        display: flex;
        justify-content: center;
        margin-top: 150px;
        .linkButton{
           background-color: white;
           padding-right: 60px;
           padding-left: 60px;
           padding-top: 30px;
           padding-bottom: 30px;
           border-radius: 10px;
           text-decoration: none;
           color: black;
           font-size: 30px;
           
           &:hover{
                color: black;
                border: 3px solid black;
                opacity: .7;
                transition: .3s;
           }
        }
    }
`

const Home = props => {
    return (
        <StyledHome>
            <div className='imgDiv'>
                <img alt='' src={pizza}></img>
            </div>
            <div className='buttonDiv'>
                <Link className='linkButton' to='/pizza'>Place Your Order Here!</Link>
            </div>
        </StyledHome>
    )
}

export default Home;