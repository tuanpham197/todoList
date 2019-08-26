import React, { Component } from 'react'
import Search from './Search';
import Sort from '../Sort';

export default class Control extends Component {
    render() {
        return (
            <div className="row mt-5">
                {/* search */}
                <Search></Search>
                {/* sort */}
                <Sort></Sort>
            </div>
        )
    }
}
