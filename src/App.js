import React from "react"

const App = ()=>{
  return(
    // React.createElement()
    <div>App组件
      <hr/>
      <Component  numbers={['a','b','c']} />
    </div>
  )
}
// 条件判断
// 1.
// const Component =(n)=>{
//   const x = n.n
//   return x%2===0 ? <div>n 是偶数</div> : <span>n是奇数</span>

// 2.
/*
const Component = (x)=>{
 const n = x.n
 const inner = n%2===0 ? <div>n是偶数</div> : <span>n是奇数</span>
 const content = (
   <div>
     {inner}
   </div>
 )
 return content
}
*/
//3.
/*
const Component =(x)=>{
  let inner
  const n = x.n
  if(n%2===0){
    inner = <div>n是偶数</div>
  }else{
    inner = <span>n是奇数</span>
  }
  const content =(
    <div>
      {inner}
    </div>
  )
  return content
}
*/

// 循环语句
//1.
/*
const Component=(props)=>{
  return props.numbers.map((n,index)=> {
    return <div>下标{index}值为{n}</div>

  })
}
 */

//2.


const Component = (props)=>{
  const array =[]
  for(let i=0;i<props.numbers.length;i++){
    array.push(<div>下标{i}值为{props.numbers[i]}</div>)
  }
  return <div>{array}</div>
}

export default App