const initState = {
    counter: 0,
    title:'NoTitle'
} ;

export default function counterReducer(state = initState,action){
    switch (action.type) {
        case "AddAsync":
            return {
                counter: state.counter + 1
            };
        case "LOAD":
            return {...state,title:action.title};
        default: return state;
    }
}
