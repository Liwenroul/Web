// index.js会被管理自动进入index.html，打包的build 在保存后会自动更新
import App from './App';
// import * as serviceWorker from './serviceWorker';
import React,{Fragment,Component} from 'react';//将fragment解构，则下面使用时不用React.Fragment
import ReactDOM from 'react-dom';
import {ShowTime} from './showTime';//引入组件，js可以省略
import Todolist from './Todolist/Todolist';//也可显示出它里面引入的
import './index.css';
import { tsPropertySignature } from '@babel/types';
import Request from'./Request1'
// import Parents from './Context/Parents'
// import Hoc from './Hoc/Hoc';
import ParentPortal from './Portal/ParentPortal'





// ReactDOM.render(<App />,document.getElementById('root'));




// ReactDOM.render(<ParentPortal />,document.getElementById('root'));

// ReactDOM.render(<Hoc />,document.getElementById('root'));















//组件交互：
//父组件---->子组件：调用子组件时添加属性，子组件通过props拿到传递的数据
//子组件---->父组件：
ReactDOM.render(<Todolist/>,document.getElementById('root'));


/**
 * Context:
 * 1、生成Context，可写在一个js文件中，exprot导出
 * 2、在根组件配置Provider，加上value属性，value的值是要传递的值
 * 3、在需要获取数据的组件，import Consumer并配置Consumer,Consumer组件里是个函数，函数的参数是传过来value值
 */
//Context越层(Parents)将id传入child子组件
// import {con,con2} from './Context/Context';
// let id=12;
// ReactDOM.render(
//     <con.Provider value={id}>
//         {/* <con2.Provider value="daa">
//             <Parents />
//         </con2.Provider> */}{/**可多个引入 */}
//         {/* Parents里引入的子组件都可以接收id的值 */}
//         <Parents />
//     </con.Provider>,
//     document.getElementById('root'));




// ReactDOM.render(<Request/>,document.getElementById('root'));//加载组件以及该组件引入的子组件








//组件
//方式一：函数定义组件，函数名大写，返回react
// function ShowTime(props){//props只读，不可修改
//     console.log(props);
//     return (//多个标签返回加括号，并且将所有的标签放入到一个闭合的标签里，文档碎片fragment，一个容器
//         <Fragment>
//             <div>{props.age}</div>
//             <div>
//                 {props.name}
//                 {new Date().toLocaleDateString()}
//             </div>
//         </Fragment>
//     )
// }

//方式二：类定义组件，props是类的属性
// class ShowTime extends Component{
//     constructor(props){//声明状态,自动执行的函数
//         super(props);//必须最先调用,获得构造器中的属性，必须传参数props
//         this.state={//通过setState改变里面的值、声明变量
//             time:new Date().toLocaleString(),//声明变量
//             a:100
//         }
//         console.log('constructor');
//         setInterval(() => {
//             this.setState({//数据一变，react会响应变化，重新渲染
//                 time:new Date().toLocaleString()
//             })
//         }, 1000);
//     }
//     shouldComponentUpdate(){//是否要更新；flase;setState改变，render只执行一遍
//         if(this.state.a>10){
//             return true;
//         }
//         return false;
//     }
//     componentDidUpdate(preProps,preState,data){//三个参数（preProps,preState,data）
//         console.log("cdupdate");
//         console.log(preProps,preState);//preState更新之前的state
//         console.log(data);
//     }
//     getSnapshotBeforeUpdate(){
//         console.log("getshost");
//         return {name:this.state.a};//返回值给componentDidUpdate
//     }
//     componentDidMount(){
//         console.log('didmount');
//     }
//     render(){//自动执行（生命周期函数）setState改变，render执行一遍
//         console.log('render');
//         var {name,age}=this.props;//解构
//         return (
//             <Fragment>
//                 {/**条件渲染 ：三目运算符(if-else)、&&(if)*/}
//                 {name.length>5?<div>姓名：{name}</div>:''}
//                 {/* {name.length>5 && <div>姓名：{name}</div>} */}

//                 <div>{this.state.time}</div>
                
//                 {/**数组循环渲染 */}
//                 <div>
//                     {
//                         age.map((item,index)=>{//返回数组
//                             if(index%2===0){
//                                 return <p key={index}>{item}</p>//变量加{},key唯一标识，内容、标签没变，位置变了，也不重新渲染
//                             }
//                         })
//                     }
//                 </div>
//             </Fragment>
//         )
//     }
// }



//组件ShowTime
// var num=[1,2,3,4,5];
// ReactDOM.render(
//     <ShowTime age={num} name="lisi"/>,
//     document.getElementById('root')
// )




//显示当前系统时间
//只有改变的节点才会动，性能好
// function showTime(){
//     var ele=<div>{new Date().toLocaleString()}</div>//react对象
//     ReactDOM.render(
//         ele,
//         document.querySelector('#root')
//     );
// }
// showTime();
// setInterval(showTime, 1000);








// var str='react';
//遇到<,ele转换为对象
// ①var ele=<h1 class="tit">你好 <p>react</p></h1>
// var obj={
//     type:'div',
//     props:{
//         id:'box',
//         class:'box',
//         children:[
//             'hello',
//             'react',
//             {
//                 type:'h1',
//                 props:{
//                     id:'tit',
//                     class:'tit',
//                     children:[
//                         'title',
//                         'react',
                        
//                     ]
//                 }
//             }
//         ]
//     }
// }

//react解析栈
//jsx语法
//返回对象
// var ele=React.createElement(
//     'h1',
//     {id:'tit',class:'title'},
//     'hello',
//     React.createElement(
//         'p',
//         {id:'tit',class:'title'},
//         'hello',
//     )
// );//②
// console.log(ele);
// ReactDOM.render(ele, document.getElementById('root'));//获取根节点,ele不用加 " ",不是一个标签，而是对象

//③渲染，将obj加入root中
// function render(obj,container){
//     var {type,props}=obj;//解构赋值
//     var fragment=document.createDocumentFragment();//文档碎片 ：类似节点，相当于一个变量
//     var ele=document.createElement(obj.type);//创键div
//     for(var item in props){//将obj的属性加入到创建的div
//         if(item==='class'){
//             ele.className=props[item];
//             // ele.className=obj.props[item];
//         }
//         else if(item==='children'){
//             for(var i=0;i<props.children.length;i++){
                
//                 if(typeof props.children[i]==='object'){
//                     render(props.children[i],ele);
//                 }
//                 else{
//                     // ele.innerHtml+=props.children[i];
//                     var txt=document.createTextNode(props.children);
//                     ele.appendChild(txt);
//                 }
                
//             }
//         }
//         else{
//             ele[item]=obj.props[item];//class未加进去
//             //ele[item]=obj.props[item];
//         }
        
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
// }

// render(obj,document.getElementById('root'));

/**
 * 页面渲染过程：
 * 请求HTML页面，浏览器HTML解析器会解析HTML文件，生成DOM树
 * link引入CSS文件，CSS解析器解析CSS文件，生成CSS对象模型（CSSOM和DOM树结合，生成一个（render）渲染树），最后浏览器绘制页面
 * 
 */


//页面回流（重排reflow）:DOM结构变化、内容变化、大小、位置、显示（display）的变化，都会引起页面回流（变化次数多，性能就差）
//页面重绘（repaint)：颜色的变化（背景色、字体颜色、边框颜色）
//回流一定引起重绘

//1、先用变量进行DOM处理，最后一次性渲染
// console.time('time');
// var div= document.getElementById('root');//文档碎片
// var str='';
// for(var i=0;i<1000;i++){
//     // document.getElementById('root').innerHTML+='<p>'+i+'</p>'//每次调root，不好
//     str+='<p>'+i+'</p>';
// }
// div.innerHTML=str;//先用变量处理，再一次性渲染
// console.timeEnd('time');

//2、对于样式的处理
// var div=document.getElementById('root');
// div.style.width='100px';//引起回流
// div.style.height='100px';//引起回流
// div.style.background='red';

//改:
// .active{
//     width:100px;
//     height:100px;
// }
// div.className='active';

//3、offsetLeft:距离浏览器左边的距离、offsetwidth等都会引起回流
// console.log(div.offsetLeft);
// setInterval(() => {
//     div.style.width=div.offsetWidth+1+"px";//多次回流
// }, 100);
//改:
// var wid=div.offsetWidth;
// setInterval(() => {
//     wid+=1;
//     div.style.width=wid+"px";
// }, 100);

//4、文档碎片（内存中的一个变量）


