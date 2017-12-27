import database from './database'
  



export function getCars(keywords){

    return dispatch => {
        dispatch(getInviteRequestedAction());
        return database.ref().child('carsIndex').orderByChild('brand').equalTo(`${keywords}`).once('value', snap => {
      
         const carros = snap.val()
          
           dispatch(getInviteFulfilledAction(carros))
        
            
          })
          .catch((error) => {
            console.log(error);
            dispatch(getInviteRejectedAction());
          });
        }
      
   
   
 
}

function cleanArray(actual) {
  var newArray = [];
  console.log(Array.isArray(actual))
  
if (Array.isArray(actual)){
  if(actual){
    console.log('AQUI DENTRO DEL Actual')
    console.log(actual.length)
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  }
  return newArray;
} else {
   if(actual){
  newArray = Object.keys(actual).map(key => actual[key])
}
  return newArray;
}

  


}


function getInviteFulfilledAction(carros) {
  console.log('EL VECTOR ANTES')
  console.log(carros)
  const carrosfinal = cleanArray(carros)
  
  console.log('EL VECTOR ARREGLADO')
  console.log(carrosfinal)  
  return {
        type:'BUSCA_CARROS',
        payload:carrosfinal
    };
  }


  function getInviteRejectedAction() {
    return {
      type: 'RECHAZO',
      
    }
  }

function getInviteRequestedAction() {
    return {
      type: 'SOLITUDFIRBASE'
    };
  }


