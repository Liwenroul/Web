import React, { Fragment,Component } from 'react';
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    fin=(idx)=>{
        this.props.fin(idx);
    }
    fdel=(idx)=>{
        this.props.fdel(idx);
    }
    fcancel=(idx)=>{
        this.props.fcancel(idx );
    }
    render() {
        var {todo,flist}=this.props;
        return (
            <fragment>
            <ul>
                {
                    todo.map((item,index)=>
                        <li key={index}>{item}---
                            <button onClick={(e)=>{this.props.del(index)}}>删除---</button>---
                            <button onClick={(e)=>{this.fin(index)}}>完成</button>
                        </li>  
                    )
                }
            </ul>
            <span>{todo.length}</span>
            <ul>
                {
                    flist.map((item,index)=>
                        <li key={index}>{item}---
                            <button onClick={(e)=>{this.props.fdel(index)}}>删除---</button>
                            <button onClick={(e)=>{this.props.fcancel(index)}}>取消完成</button>
                        </li>
                    )
                }
            </ul>
            <span>{flist.length}</span>
            </fragment>
        )
    }
}

Todoing.propTypes={//定义属性类型,进行类型检查
    todo:PropTypes.array,//string会报错
    del:PropTypes.func
}

