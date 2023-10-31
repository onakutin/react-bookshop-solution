export default function reducer(state, action) {

    console.log('Incoming action: ', action);

    switch (action.type) {
        case 'language/set':
            const newState = { ...state };
            newState.language = action.payload;
            return newState;

        case 'currency/set':
            return {
                ...state,
                currency: action.payload
            }
    }

    return state;
}