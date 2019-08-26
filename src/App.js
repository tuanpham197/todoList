import React,{Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
var randomstring = require("randomstring");
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm : true
        }
    }
    UNSAFE_componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks
            })
        }   
    }
    randomStringId(){
        return randomstring.generate(4)+"-"+randomstring.generate(5);
    }
    onLoadData=()=>{        
        var tasks = [
            {
                id : this.randomStringId(),
                name : 'Niên luận',
                status : true
            },
            {
                id : this.randomStringId(),
                name : 'Học ReactJS',
                status : false
            },
            {
                id : this.randomStringId(),
                name : 'Niên luận',
                status : true
            }
        ]
        this.setState({
            tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));  
    }
    onSetDisplay = (params)=>{
        this.setState({
            isDisplayForm : params
        });
    }
    addTaskToState = (name,status)=>{
        var task = {
            id : this.randomStringId(),
            name : name,
            status : status
        }
        var arr = this.state.tasks;
        arr.push(task);
        this.setState({
            tasks : arr
        }) 
        localStorage.setItem('tasks',JSON.stringify(arr));     
    }
    render(){
        var {isDisplayForm} = this.state;
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row mt-5">
                    <div className={isDisplayForm===true?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>
                        {isDisplayForm === true ? <TaskForm addTaskToState={this.addTaskToState} onSetDisplay={this.onSetDisplay}/> : ''}
                    </div>
                    <div className={isDisplayForm===false?'col-xs-12 col-sm-12 col-md-12 col-lg-12':'col-xs-8 col-sm-8 col-md-8 col-lg-8'}>
                        <button type="button" className="btn btn-primary" onClick={()=>this.onSetDisplay(true)}>
                        <span className="fa fa-add"></span>Thêm Công Việc
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={()=>this.onLoadData()}
                        >
                            Load Data
                        </button>
                        {/* Search - sort */}
                        <Control></Control>
                    
                        {/* List */}
                        <div className="row mt-5">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks={this.state.tasks}></TaskList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default App;
