import React, { Component } from 'react'
import Rounter from './Route'

// import Action from './actions'

// const initialState = {
//     data: [],
//     filter: [],
//     list_card: [],
//     select_card:[],
    
// }

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case Action.FILTER:
//             return {
//                 filter: [
//                     ...state.filter,
//                     action.filter
//                 ]
//             }
//         case Action.ADD_DECK:
//             return {
//                 card: [
//                     ...state.list_card,
//                     action.list_card
//                 ]
//             }
//         case Action.RM_CARD:
//             return {
//                 card: action.new_deck
//             }
//         case Action.CLEAR_DECK:
//             return {
//                 card: []
//             }
//         default:
//             return state
//     }
// }

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Rounter/>
      </React.Fragment>
    )
  }
}


export default App;
                                                         