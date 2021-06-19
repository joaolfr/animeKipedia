import create from 'zustand';

const initialState = {
  mangas: [],
  favorites: [],
  searchMangas: [],
  favoritesIds: [],
  offset:10
};

const useMangaStore = create((set, get) => ({
  ...initialState,

  setMangas: mangasList => set(state => ({...state, mangas: mangasList })),
  setSearchMangas: searchList =>
    set(state => ({...state, searchMangas: searchList})),
  setFavorites: list => set(state => ({...state, favorites: list})),
  setFavoritesIds: list => set(state => ({...state, favoritesIds: list})),
  updateOffset:() => set(state => ({...state, offset:state.offset+10})),
  clearMangas: () => set(state => ({...state, mangas:[]}))
}));

export default useMangaStore;
