import React , { Component } from 'react'
import { connect } from 'react-redux'

class Listofcars extends Component {

 listofcars = ({cars}) => {
     if(cars){
         return cars.map((car)=>{
           return (
               <div className="car_item" key={car.id}>
                  <div className="left">
                     <img src={`/images/${car.image}`} alt={car.id} />
                  </div>
                  <div className="right">
                      <h4>{car.model}</h4>
                      <h4>{car.brand}</h4>
                  </div>        
               </div>    
           )
         })
     }
 }   
    render(){
        return(
            <div>
                {this.listofcars(this.props)}
            </div>    
        )
    }
}

function mapStateToProps(state){
    console.log(' el state de cars en list of cars')
    console.log(state)
    return{
        cars: state.cars
    }

}

export default connect(mapStateToProps,null)(Listofcars)