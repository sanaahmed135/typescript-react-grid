import React from "react"
import Student from "./Student";

export default class StudentList extends React.Component {

    public StudentList = Array<Student>();
   
    render() {
        
        this.StudentList = new Array<Student>();
        this.StudentList.push(new Student("Sami","Saad"));
        this.StudentList.push(new Student("Sana","Saad"));
        this.StudentList.push(new Student("1","2"));


        return (
                <div>
                     <ul>
                        {this.StudentList.map(function(obj, index){
                            return <li>{obj.name}</li>;
                        })}
                 </ul>
                </div>
        );
    }

}