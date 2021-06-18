import create from 'zustand';

const initialState = {
  animes: [],
  favorites: [],
  searchAnimes: [],
  favoritesIds: [],
  offset:10
};

const useAnimeStore = create((set, get) => ({
  ...initialState,

  setAnimes: animesList => set(state => ({...state, animes: animesList })),
  setSearchAnimes: searchList =>
    set(state => ({...state, searchAnimes: searchList})),
  setFavorites: list => set(state => ({...state, favorites: list})),
  setFavoritesIds: list => set(state => ({...state, favoritesIds: list})),
  updateOffset:() => set(state => ({...state, offset:state.offset+10}))
}));

export default useAnimeStore;
