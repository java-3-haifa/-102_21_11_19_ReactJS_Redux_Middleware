
export function addCounter() {
    return (dispatch,getState)=>{
        setTimeout(()=>{
            console.log("Action: ",getState());
            dispatch({
                type:"AddAsync"
            })
        },2000);
    }
}

export function load() {
    return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            dispatch( {
                type:"LOAD",
                title:json.title
            })
        })
        .catch(error=>{
            dispatch({
                type:"ERROR",
                error
            })
        });
    }
}
