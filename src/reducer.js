const count=5;

export default function reducer(state=count,action){
    const{type,payload}=action;
    console.log(payload)
    switch(type){
        case "INCREMENT":
            return state+payload;
        case "DECREMENT":
            return state-payload;
        default:
            return state;        

    } 
}