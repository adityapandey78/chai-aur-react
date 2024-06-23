import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp(){
  return(
    <div>
      <h1>Custom App |Aditya</h1>
    </div>
  )
}

//checking whether custom react works here or not

const ReactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google'
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

//React.createElement se bhi hum elementr create kr skte hain but iske attributes or parameters ese hote hain
const reactElement2=React.createElement(
  'a', //1st koi tag chaiye h1, p, etc etc
  // iske baad ek object chaiye 
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    //<App /> 

    // myApp() //isse bhi kaam ho ja rha hai
      //but esa krna nahi hai coz of conventions 
      //we are writing just for the sake ki esa bhi ho skta hai coz at the end ye bhi js hi toh hai

      /*
      <App />  iske andar ya myApp ke andr kuchh bhi likhte hain toh at the end of teh day ye pars hoke customreact.js ke form me hi to parse hota hai

      => SO ab  aage check krenge ki kaam, krta hai ki nahi
      */
  //< ReactElement/>// but ese object thodi na use kiya jaata hai coz xye koi functuon thodi na hai
  //ReactElement()// ye bhi kaam ni kregaa coz pass to objecty straightly hoga, rather than ek function ke jese

  //ReactElement ye bhi ni chal rha coz
  //1.) Humne yhn pe custom render bnmaaya ni hai isme 
  //2.) Jo react ka render haiuske according hmari values sahi ni hai keys sahi ni hai i.e. syntax

  //anotherElement//lekin ye chal jaaa rha hai
  //reactElement2// ye ekdm as pewr syntx based tha  tohgye rednder ho gya koiissue ni hua isme

  <App/>
)
