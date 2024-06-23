//import { Children } from "react";
function customRender(reactElement,container){
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.Children

////reactelement.chiled se uske inner html me push kr diya
//// mtbl ki reactelemet.type se uska type jan liya and fir use push kr diya
 
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)
// 
//=> Above code se har attribute baar baar set krna pdega so it is becoming more and more lengthy

// so ab ye method 2 hai
//isme loop ke through me paas kra rha hu
//saare element ke attibute loops ke through hi paas ho jaa rahe hain

const domElement= document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for(const prop in reactElement.props){
    if(prop=== 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer= document.querySelector('#root')

customRender(reactElement,mainContainer)

