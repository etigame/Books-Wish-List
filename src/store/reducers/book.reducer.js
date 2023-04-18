const INITIAL_STATE = {
    books: null,
    likedBooks: null
}

export function bookReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state, 
                books: action.books
            }
            
        default:
            break;
    }
}
