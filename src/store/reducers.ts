import { combineReducers } from 'redux'

interface Action {
    type: string;
    data: number;
}
function calculateNum(init = 0, action: Action) {
    switch (action.type) {
        case 'INCREASE':
            return init += action.data;
        case 'DECREASE':
            return init -= action.data;
        default:
            return init;
    }
}

export default combineReducers({
    calculateNum
})