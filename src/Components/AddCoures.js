import React from 'react'
const AddCoures =(props)=>{
    
    return(
        <form onSubmit={props.handleSubmit}>
            <input type='text' onChange={props.handleChange} value={props.current}/>
            <button type='submit'> Add Coures</button>
        </form>
    )
}
export default AddCoures;