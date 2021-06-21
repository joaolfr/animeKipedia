import React from 'react'
import {Wrapper, SearchInput} from './styles'
import {Search as SearchIcon} from 'src/assets/icons'

const Search = ({queryText, setQueryText, search}) => {

    return(
       <Wrapper>
           <SearchIcon width={20} height={20}/>
           <SearchInput placeholder="search" value={queryText} onChangeText={value => setQueryText(value)} onSubmitEditing={() => search()}/>
       </Wrapper>
    )
}
export default Search