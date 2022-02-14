// Reducer:a function that takes in the old state, and an action(how we want to change the state is action), (old state and action as parameters to return a new state) and returns a new state
// if (action.type == 'DELETE_TRANSACTION') {} else if (action.type == 'ADD_TRANSACTION') {}
// we will use switch instead of these if else, else if cases

const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id != action.payload);

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        default:
            return state;
    }

}

export default contextReducer;