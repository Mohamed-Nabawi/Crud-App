import React from "react";
import { Fragment } from "react";

class CouresList extends React.Component{
    state={
        isEdit: false
    }
    renderCourse=()=>{
        return(
            <li>
            <span>
            {this.props.details.name}
            </span>
            <button onClick={()=>{this.toggleState()}}> Edit Course</button>
            <button onClick={()=>{this.props.deletCourse(this.props.index)}}> Delete Course</button>
            
            </li>
        )
    }
    toggleState=()=>{
        let {isEdit}=this.state;
        this.setState({ isEdit: !isEdit})

    }
    updatCourseItem=e=>{
        e.preventDefault();
        this.props.updateCourse(this.props.index, this.input.value);
        this.toggleState();
    }
    renderUpdateCourse=()=>{
        return(
            <form onSubmit={this.updatCourseItem}>
                <input type='text' defaultValue={this.props.details.name} ref={(v)=>{this.input = v}} />
               <button> update course </button>
            </form>
        )
    }
    render(){   
             let {isEdit}=this.state;
        return(
            <Fragment>
                { isEdit ? this.renderUpdateCourse() : this.renderCourse() } 
              
              
            </Fragment>
        )
    }
}
export default CouresList;