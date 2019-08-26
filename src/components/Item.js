import React, { Component } from 'react'

export default class Item extends Component {
    onUpdateStatus = ()=>{
        this.props.onUpdateStatus(this.props.id);
    }
    deleteItem = ()=>{
        this.props.deleteTaskItem(this.props.id);
    }
    onUpdate = ()=>{
        this.props.onUpdate(this.props.id);
    }
    render() {
        var {name,status,index} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td className="text-center">
                <span 
                    className={status === true ? 'label label-success' : 'label label-warning'}
                    onClick={this.onUpdateStatus}
                >
                    {status === true ? 'Kích hoạt' : 'Ẩn'} 
                </span>
                </td>
                <td className="text-center">
                <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={this.onUpdate}
                >
                    <span className="fa fa-pencil mr-5" />Sửa
                </button>
                &nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.deleteItem}
                >
                    <span className="fa fa-trash mr-5" />Xóa
                </button>
                </td>
            </tr>
        )
    }
}
