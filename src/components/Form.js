import React from "react";
import {Component} from 'react';

class Burger2 extends Component {
    render() {
      return (
        <form>
        <div className ='form-group'>
        <label htmlFor='input' className='lead text-light'>Burgers</label>
        <input type='text' name='input' placeholder='Order a burger' className='form-control'/>
        <button type='submit' className='btn btn-info btn-block mt-1'>Add a burger</button>
        </div>
        
      </form> 


     
      );
    }
  }
  export default Burger2;


  // on click this .setState
  