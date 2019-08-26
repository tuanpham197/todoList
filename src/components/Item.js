import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        var {name,status,index} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td className="text-center">
                <span 
                    className={status === true ? 'label label-success' : 'label label-warning'}
                >
                    {status === true ? 'Kích hoạt' : 'Ẩn'} 
                </span>
                </td>
                <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5" />Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5" />Xóa
                </button>
                </td>
            </tr>
        )
    }
}
