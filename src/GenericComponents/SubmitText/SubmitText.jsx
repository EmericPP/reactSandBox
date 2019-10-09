// @flow
import React from 'react';
import {StyledSubmitText, SubmitTextBtn, SubmitTextInput} from './css'

type Props = {
    handleInputSubmit: () => void,
    handleInputChange: (SyntheticInputEvent<HTMLInputElement>) => void,
    value: string
}

export const SubmitText = ({handleInputSubmit, handleInputChange, value}: Props) => (
    <StyledSubmitText>
        <SubmitTextBtn onClick={handleInputSubmit}>
            OK
        </SubmitTextBtn>
        <SubmitTextInput
            value={value}
            onChange={handleInputChange}
            placeholder="Ajouter une tâche"
        />

    </StyledSubmitText>
)
