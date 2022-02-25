/** @jsxImportSource @emotion/react */

const Button = (props) => {
  
  return (
   <button style={{
     display:"block",
     border:"none",
     outline:"none",
     height:`${props.height}`,
     borderRadius:`${props.borderRadius}`,
     padding:`${props.padding}`,
     width:`${props.width}`,
     margin:`${props.margin}`,
     color:`${props.color}`,
     backgroundColor: `${props.backgroundColor}`,
     cursor: `${props.cursor}`
    }}
    onClick={props.onClick}
    >
      {props.children}
    </button>
  )
  
}

export default Button;
