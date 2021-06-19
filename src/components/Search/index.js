import React from 'react'
import {Wrapper, SearchInput} from './styles'
const Search = ({queryText, setQueryText, search}) => {

    return(
       <Wrapper>
           <SearchInput placeholder="Digite o que deseja encontrar" value={queryText} onChangeText={value => setQueryText(value)} onSubmitEditing={() => search()}/>
       </Wrapper>
    )
}
export default Search