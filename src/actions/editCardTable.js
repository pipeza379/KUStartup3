import Action from './'

export function removeCard(deck,e){
    let index = e.target.getAttribute('index')
    delete deck[index]
    deck = deck.filter(() => { return true });
    return({
        type:Action.RM_CARD,
        new_deck:deck,
    })
}