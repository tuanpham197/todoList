import React, { Component } from 'react'
import Item from './Item';

export default class TaskList extends Component {
    render() {
        var {tasks} = this.props;
        
        var arrItem = tasks.map((element,index)=>{
            return <Item 
                        key={index}
                        index = {index}
                        id={element.id}
                        name = {element.name}
                        status = {element.status}
                        onUpdateStatus = {this.props.onUpdateStatus}
                        deleteTaskItem = {this.props.deleteTaskItem}
                        onUpdate = {this.props.onUpdate}
                    ></Item>
        })
        return (
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td />
                    <td>
                    <input type="text" className="form-control" />
                    </td>
                    <td>
                    <select className="form-control">
                        <option value={-1}>Tất Cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích Hoạt</option>
                    </select>
                    </td>
                    <td />
                </tr>
                {arrItem}
                </tbody>
            </table>
        )
    }
}
