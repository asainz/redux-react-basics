import rand from '../rand';

const initialValue = rand(1, 1000);
const initialState = {
    initialValue: initialValue,
    currentValue: initialValue,
    numberOfOperations: 0,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SUM':
            return {
                ...state,
                currentValue: state.currentValue + action.value,
                numberOfOperations: state.numberOfOperations + 1,
            };

        case 'SUBTRACT':
            return {
                ...state,
                currentValue: state.currentValue - action.value,
                numberOfOperations: state.numberOfOperations + 1,
            };
        default:
            return { ...state };
    }
};

export default reducer;
