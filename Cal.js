import React, { Component } from 'react'

 class Cal extends Component {
     constructor(props) {
        super()
     
         this.state = {
              value:""
         }
     }
     handleClick=(name)=>{
         var el=name.target.name;
         if(el=== '=')
         {
             this.calculate()
         }
         else
        this.setState({
            value: this.state.value+el
        });
        
    }
   calculate=()=>{
       this.setState({
           value:eval(this.state.value)
       })
   }
   clearScreen=()=>{
       this.setState({
           value:''
       })
   }
    render() {
        return (
           <div id='main'> 
               <div className='input'>
                 <input value={this.state.value} />
               </div>
              <div className="button">
               <div id="row">
                <button onClick={this.handleClick} name="9">9</button>
                <button onClick={this.handleClick} name="8">8</button>
                <button onClick={this.handleClick} name="7">7</button>
                <button onClick={this.handleClick} className="operators" name="/">/</button>
               </div>
               <div id="row">
                <button onClick={this.handleClick} name="6">6</button>
                <button onClick={this.handleClick} name="5">5</button>
                <button onClick={this.handleClick} name="4">4</button>
                <button onClick={this.handleClick} className="operators" name="*">x</button>
               </div>
               <div id='row'>
                <button onClick={this.handleClick} name="3">3</button>
                <button onClick={this.handleClick} name="2">2</button>
                <button onClick={this.handleClick} name="1">1</button>
                <button onClick={this.handleClick} className='operators' name="-">-</button>
               </div>
               <div id="row">
                <button onClick={this.handleClick} name="0">0</button>
                <button onClick={this.handleClick} name=".">.</button>
                <button onClick={this.handleClick} name="=">=</button>
                <button onClick={this.handleClick} className="operators" name="+">+</button>
               </div>
               <div id='row'> 
                <button onClick={this.clearScreen}  id='clear'>clear</button>
                </div> 
               </div>
              
         </div>   
        )
    }
}

export default Cal
