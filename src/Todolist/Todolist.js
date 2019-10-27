//Todolist父组件
//引入Todoinput、Todoing；被引入到index.js
import React, { Component } from 'react'
import Todoinput from "./Todoinput";
import Todoing from "./Todoing";
import storage from './Storage';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[],//通过状态声明变量
            flist:[]
        }
    }
    //执行完执行回调函数
    addItem=(data)=>{//是属性，是一个方法，data是输入的数据
        this.setState({//改变数组,页面会自动变
            todo:[...this.state.todo,data],
        },()=>{
            storage.set("todoList",this.state.todo);            
        })
    }   
    delItem=(idx)=>{//传参和对象（此处没有用到e 例子  并且对象要作为最后一个参数） 
        /**
         * 1、状态不能直接改变或处理state，通过setState改变
         * 2、setState是异步执行
         */
        let todo=[...this.state.todo];//拷贝一份操作
        todo.splice(idx,1);
        this.setState({
            todo:todo
        },()=>{
            storage.set("todoList",this.state.todo);
        })
//在setState里获取state可能会出错，不是你想要的值，可以像上面一样，把第一个参数写成函数
       
    }
    fin=(idx)=>{
        let data1=this.state.todo[idx];
        // console.log(data1);
        this.state.flist.push(data1);
        storage.set("flists",this.state.flist);
        this.delItem(idx);
        // console.log(this.state.flist);
    }
    fdel=(idx)=>{
        let flist=[...this.state.flist];//拷贝一份操作
        flist.splice(idx,1);
        this.setState({
            flist:flist
        },()=>{
            storage.set("flists",this.state.flist);
        })

    }
    fcancel=(idx)=>{
        let data2=this.state.flist[idx];
        this.state.todo.push(data2);
        storage.set("todoList",this.state.todo);
        let flist=[...this.state.flist];//拷贝一份操作
        flist.splice(idx,1);
        this.setState({
            flist:flist
        },()=>{
            storage.set("flists",this.state.flist);
        })
    }
    componentDidMount(){
        var todoList=storage.get('todoList');
        var flists=storage.get('flists');

        if(todoList){
            this.setState((state)=>{
                return{
                    todo:todoList
                }
            })
        }
        
        if(flists){
            this.setState((state)=>{
                return{
                    flist:flists
                }
            })
        }
    }
    render() {//属性、状态一变，就执行
        return (
            <div>
                {/* 引入组件 */}
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todo} flist={this.state.flist} fin={this.fin} fdel={this.fdel} fcancel={this.fcancel}/>{/**父组件---->子组件：todo */}
            </div>
        )
    }
}


//深拷贝、浅拷贝
        // var obj={a:100,b:[1,2,3]};
        // var obj1={c:300};
        // var o=obj;
        // var o1={...obj};//新对象
        // var o2=Object.assign(obj,obj1);//浅拷贝，o===obj
        // o.a=200;
        // o.b[0]=200;//浅拷贝（部分相同）
        // o1.a=200;
        // //深拷贝：每一层都不一样
        // var str=JSON.parse(JSON.stringify(obj));//JSON.stringify(obj)一个新的字符串，JSON.parse(JSON.stringify(obj))一个新的对象

        //遍历对象
        // Object.keys(obj).forEach((item)=>{//Object.keys(obj)表示的属性名组成的数组
        //     console.log(item);
        //     console.log(obj[item]);
        // });