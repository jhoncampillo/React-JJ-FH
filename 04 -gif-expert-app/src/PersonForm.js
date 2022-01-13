import React, {Component} from 'react'

export default class PersonForm extends Component () => {
    
    constructor(props){

        super(props)
        this.this = {
            nombre:""
        }
    }
    return (
        <>
         <form>
         <label htmlFor="nombre">Nombre: </label>    
         <input id='nombre' name='nombre' value='jhon' type='text' placeholder='Digita nu nombre'></input>
           {this.state.nombre}  
         </form>   
        </>
    )
}

export default PersonForm