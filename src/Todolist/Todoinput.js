import React, { Component } from 'react';
import './Todo.css';//也可在Todolist中引入

export default class toduinput extends Component {
    constructor(){
        super();
        this.handleInput=this.handleInput.bind(this);//this绑定到handleInput
        // this.state={
        //     a:"",
        //     b:"",
        //     c:""
        // }
    }
    // handleChange=(e)=>{
    //     this.setState={
    //         [e.target.name]:parseInt(e.target.value==""?0:e.target.value)//选择a\b\c,一个事件控制三个表单元素
    //     }
    // }
    // handleInput=(e)=>{
    //     this.props.add(e.target.value);
    // }
    handleInput=(e)=>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode===13){//按下回车
            this.props.add(e.target.value);//e.target发生事件的最根本元素，此处表示input;将数据传给父组件
        }
    }
    
    // componentDidMount(){//render之后执行
    //     // this.a.focus();
    //     // this.refs.b也可获得input节点
    // }
    render() {
        return (
            <div>
                <input text="text" onKeyDown={(e)=>{this.handleInput(e)}}></input>
            </div>
        )
            
        // (
            
            // <div className={this.state.b+this.state.c>10?'box':''}>
                {/* 点击label,就相当于点input 可用来修改input标签的默认样式 */}
                {/* <label htmlFor='inp'>请输入第一个数</label> */}
                
                {/* <input id='inp' className="box" name='a' onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} text="text"></input>子组件---->父组件： onKeyDown不会自动执行 */}
                {/* + */}
                {/* <input ref='b' name='b' onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} text="text"></input>子组件---->父组件： onKeyDown不会自动执行 */}
                {/* + */}
                {/* <input name='c' onChange={this.handleChange} value={this.state.c} onKeyDown={this.handleInput} text="text"></input>子组件---->父组件： onKeyDown不会自动执行 */}
                {/* = */}
                {/* <p>{this.state.a+this.state.b+this.state.c}</p> */}
                {/* 非受控组件：一次性获取或处理表单元素的值  ref获取DOM节点，获取值也要从状态中获取*/}
                {/* 非受控组件的两种形式 */}
                {/* <input ref={(inp)=>{this.inp=inp}} type="text"></input>
                <input ref='a' type="text"></input> */}



                {/* 获取上一节点的值，可将上一节点的值保存到状态 ；可以实时获取表单的值；写法相对麻烦*/}
                {/**style中可以加入逻辑 */}
                {/* <button style={{color:"red",fontSize:"20px"}} */}
                // <button className="btn" onClick={()=>{console.log(this.inp)}}>提交</button>
            // </div>
        // )
    }
}

// 受控组件：
// 1、给input标签添加value属性，赋值为state的值
// 2、给input标签绑定onChange事件，在事件处理函数中setState
// 3、一个事件处理函数控制多个表单元素时，给input标签加上name属性，事件处理函数中写：
// setState={
//             [e.target.name]:e.target.value
//         }
