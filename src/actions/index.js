import database from './database'
  



export function getCars(keywords){

    return dispatch => {
        dispatch(getInviteRequestedAction());
        return database.ref('carsIndex').orderByChild('brand').equalTo(`${keywords}`).once('value', snap => {
            const invite = snap.val();
            dispatch(getInviteFulfilledAction(invite))
          })
          .catch((error) => {
            console.log(error);
            dispatch(getInviteRejectedAction());
          });
        }
      
   
   
 
}



function getInviteFulfilledAction(invite) {
    return {
        type:'BUSCA_CARROS',
        payload:invite
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


