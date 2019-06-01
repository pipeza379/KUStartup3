import Action from '../actions'

var initialState = {
    data: [],
    filter: [],
    card: []
}

function cardTableReducer(state = initialState, action) {
    switch (action.type) {
        case Action.FILTER:
            return {
                filter: [
                    ...state.filter,
                    action.filter
                ]
            }
        case Action.ADD_DECK:
            return {
                card: [
                    ...state.card,
                    action.card
                ]
            }
        case Action.RM_CARD:
            return {
                card: action.new_deck
            }
        case Action.CLEAR_DECK:
            return {
                card: []
            }
        default:
            return state
    }
}
export default cardTableReducer