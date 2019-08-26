import React,{Component} from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name : '',
            status : false
        }
    }
    UNSAFE_componentWillMount(){
        if(this.props.taskEditing){
            this.setState({
                id : this.props.taskEditing.id,
                name : this.props.taskEditing.name,
                status : this.props.taskEditing.status,
            });
        }
    }
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value === 'true' ? true : target.value;
      
        this.setState({
            [name] : value
        });
    }
    setDefault = ()=>{
        this.setState({
            name:'',
            state:false
        })
    }
    onSubmit = (event)=>{
        event.preventDefault();
        this.props.addTaskToState(this.state);  
        this.setDefault();
        this.props.onSetDisplay(false);   
    }
    render(){
        var {id} = this.state;
        return (
            <div className="panel panel-warning mt-5">
                <div className="panel-heading">
                <h3 className="panel-title" onClick={()=>this.props.onSetDisplay(false)}>{id !== '' ? 'Sua Công Việc' :'Thêm Công Việc'}<span className="fa fa-times-circle text-right"></span></h3>
                </div>
                <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                        <select 
                            className="form-control" 
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
