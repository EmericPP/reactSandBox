// @flow
import styled from 'styled-components/macro'

export const StyledSubmitText = styled.div`
  display: flex;
`

export const SubmitTextBtn = styled.button.attrs(() => ({
    type: 'button',
}))`
    order: 2;
    border: 2px solid white;
    border-radius: 2.4rem;
    background: white;
    padding: .8rem;
    font-size: .8rem;
    color: #333;
    font-weight: bold;
    position: relative;
    transform: translateX(-100%);
   
    :hover, :focus {
        outline: none;
        transition: 0.5s;
        background-color: coral;
        border-color: coral;
        color: white;
        cursor: pointer;
    }
`

export const SubmitTextInput = styled.input.attrs(() => ({
    type: 'text',
}))`
    order: 1;
    border: 3px solid white;
    background: none;
    padding: .8rem;
    border-radius: 2.4rem;
    color: white;
    ::placeholder {
        color: #ddd;
    }
    :focus {
       outline: none;
       box-shadow: 0 0 0 1px rgba(200,200,200,1);    
    }
    ${SubmitTextBtn}:hover + & , ${SubmitTextBtn}:focus + & {
      transition: 0.5s;
      border-color: coral;
      color: coral;
    }
`
