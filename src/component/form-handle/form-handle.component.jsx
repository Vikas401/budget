import React from 'react';
import './from-handle.styles.scss';

class FormHandle extends React.Component{
   constructor(props){
       super(props);
   
    this.state={ 
    discriptions: [],
    amounts:[]
}
   }
   onFormSubmit = (event) => {
    event.preventDefault();
     this.props.onSubmit(this.state.discriptions);
    } 
     handleChange = (event) => {
         this.setState({ discriptions: event.target.value,
                        amounts: event.target.value});
     }
   
    render(){
        console.log(this.props.discriptions);
        return(
            <div className="bottom">
        <div className="add">
            <div className="add__container">
                <select className="add__type">
                    <option value="inc" selected>+</option>
                    <option value="exp">-</option>
                </select>
                <form onSubmit={this.onFormSubmit}>
                <input type="text" className="add__description" value={this.state.discriptions}  onChange={this.handleChange} name="discription"  placeholder="Add description"/>
                <input type="number" className="add__value"  value={this.state.amounts} onChange={this.handleChange} name="amount" placeholder="Value"/>
                <button className="add__btn"><i className="ion-ios-checkmark-outline"></i></button>
                </form>
                </div>
        </div>
        </div>
        );
    }

} 
 export default FormHandle;
     
    
 