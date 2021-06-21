import React from 'react'
import {SwitchView, SwitchButton, Span} from './styles'

const Switcher = ({currentType, setCurrentType}) => {

    return(
        <SwitchView>
            <SwitchButton isActive={currentType === 'Animes'} onPress={() => setCurrentType('Animes')}>
                <Span>Animes</Span>
            </SwitchButton>
            <SwitchButton isActive={currentType === 'Mangas'} onPress={() => setCurrentType('Mangas')}>
                <Span>Mangas</Span>
            </SwitchButton>
        </SwitchView>
    )
}

export default Switcher