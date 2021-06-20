import React from 'react'
import {SwitchView, SwitchButton, Span} from './styles'

const Switcher = ({currentType, setCurrentType}) => {

    return(
        <SwitchView>
            <SwitchButton isActive={currentType === 'Anime'} onPress={() => setCurrentType('Anime')}>
                <Span>Animes</Span>
            </SwitchButton>
            <SwitchButton isActive={currentType === 'Manga'} onPress={() => setCurrentType('Manga')}>
                <Span>Mangas</Span>
            </SwitchButton>
        </SwitchView>
    )
}

export default Switcher