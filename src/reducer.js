export const initialState = {
    user: null,                        //if you put user: "null", then it will not ask for sign in from google part
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

            default:
                return state; 
    }
};

export default reducer;