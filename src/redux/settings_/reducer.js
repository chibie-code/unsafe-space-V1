import { SHOW_USERS } from './actionTypes';
import produce from 'immer';
import uuid from 'react-uuid';

const initialState = {
    online_users: [
        { id: uuid(), name: "User1" },
        { id: uuid(), name: "User2" },
        { id: uuid(), name: "User3" },
        { id: uuid(), name: "User4" },
        { id: uuid(), name: "User5" },
        { id: uuid(), name: "User6" },
        { id: uuid(), name: "User7" },
        { id: uuid(), name: "User8" },
        { id: uuid(), name: "User9" },
        { id: uuid(), name: "User10" },
        { id: uuid(), name: "User11" },
        { id: uuid(), name: "User12" },
        { id: uuid(), name: "User13" }
    ],
    showUsers: true
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_USERS:
            return produce(state, draft => {
                // console.log('%cToggled Show Users!', 'color: lime');
                draft.showUsers = !draft.showUsers;
                console.log((draft.showUsers)?('%cShow Users'):('%cHide Users'),'color: lime');
            return draft;
        });
        default:
            return state;
    }
}