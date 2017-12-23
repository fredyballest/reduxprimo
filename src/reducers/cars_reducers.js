

export default function (state=[],action){
   
    switch(action.type) {
      case 'BUSCA_CARROS':
        return action.payload
      default:  
          return state;
   } 
    
    
}