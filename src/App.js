import React from 'react';
import AddCoures from './Components/AddCoures';
import CouresList from './Components/CouresList';


class App extends React.Component{
  state={
    courses:[
      {name:'C++'},
      {name:'CSS'},
      {name:'HTML'}
    ],
    current:''
  }
  handleChange=(e)=>{
    this.setState({
      current:e.target.value
    })

}
handleSubmit=(e)=>{
  e.preventDefault();
  let current=this.state.current
    if(current===''){
    return false
  }else{
    let current=this.state.current
  let courses=this.state.courses
  courses.push({name:current})
  this.setState({courses,current:''
  })
}}
deletCourse=(index)=>{
  let courses=this.state.courses;
  courses.splice(index,1);
  this.setState({courses})

}
updateCourse=(index,value)=>{
  let courses=this.state.courses;
  let course=courses[index];
  course['name']=value;
  this.setState({courses})

}
  render(){
    const {courses}=this.state;
    let length=courses.length
        const listCours= length ?( courses.map((cours,index)=>{ 
          return <CouresList details={cours} key={index}  index={index} deletCourse={this.deletCourse} updateCourse={this.updateCourse}/>})) : (<p>There is no courses to show</p> )
  return (
    <div className="App">
     <h2>Coures List</h2>
     <AddCoures  current={this.state.current} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
  <ul>{listCours}</ul>
    </div>
  );
}}

export default App;
