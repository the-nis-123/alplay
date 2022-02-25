/** @jsxImportSource @emotion/react */

const Inputform = (props) => {

  const inputStyles = {
     display:`${props.display}`,
     border:"none",
     outline:"none",
     backgroundColor: `${props.backgroundColor}`,
     height:`${props.height}`,
     borderRadius:`${props.borderRadius}`,
     padding:`${props.padding}`,
     width:`${props.width}`,
     margin:`${props.margin}`,
     color:`${props.color}`,
     fontSize: `${props.fontSize}`
  }
  
  return (
   <input onChange={props.onChange} value={props.value}
    type="text" placeholder={props.placeholder} 
    style={inputStyles} id={props.id}/>
  )
}

export default Inputform;
