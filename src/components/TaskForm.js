import React,{Component} from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            status : false
        }
    }
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
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
        this.props.addTaskToState(this.state.name,this.state.status==='true' ? true :false);  
        this.setDefault();
        this.props.onSetDisplay(false);   
    }
    render(){
        return (
            <div className="panel panel-warning mt-5">
                <div className="panel-heading">
                <h3 className="panel-title" onClick={()=>this.props.onSetDisplay(false)}>Thêm Công Việc<span className="fa fa-times-circle text-right"></span></h3>
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
