/** @jsxImportSource @emotion/react */


const Wrapper = (props) => {

const wrapperStyles = {
  width:`${props.width}`,
  height:`${props.height}`,
  minWidth:`${props.minWidth}`,
  minHeight:`${props.minHeight}`,
  maxWidth:`${props.maxWidth}`,
  maxHeight:`${props.maxHeight}`,
  overflow: `${props.overflow}`,
  backgroundColor:`${props.backgroundColor}`,
  background:`${props.background}`,
  borderRadius:`${props.borderRadius}`,
  position:`${props.position}`,
  top:`${props.top}`,
  bottom:`${props.bottom}`,
  left:`${props.left}`,
  right:`${props.right}`,
  transform:`${props.transform}`,
  display :`${props.display}`,
  justifyContent:`${props.justifyContent}`,
  alignItems:`${props.alignItems}`,
  flexDirection:`${props.flexDirection}`,
  padding: `${props.padding}`,
  margin: `${props.margin}`,
  boxShadow: `${props.boxShadow}`,
  color: `${props.color}`,
  cursor: `${props.cursor}`,
  outline: `${props.outline}`,
  fontSize: `${props.fontSize}`,
  opacity: `${props.opacity}`
};

  return (
    <div css={wrapperStyles}
    onMouseOver={props.onMouseOver}
    >
    {props.children}   
    </div>
  )
}

export default Wrapper;
