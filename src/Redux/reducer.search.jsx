
import { GET_SEARCH_DATA } from "./type.search";

// Note: Do not update/change the initial state


export const authInitalState = {
  data: []
};




export const searchreducer = (state = authInitalState, {type,payload}) => {

  switch(type){

   


  
case GET_SEARCH_DATA:{
 
  return{
    ...state,
    data:payload,

  }
}






default:{
  return state
}


  }
};