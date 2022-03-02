/**@jsxImportSource @emotion/react */
import Wrapper from "../../global components/Wrapper";
import {BsHeadphones} from "react-icons/bs";
import {RiShareForwardFill} from "react-icons/ri";
import {ImDownload3} from "react-icons/im";
import {MdFavorite} from "react-icons/md";
import {IoMdPause, IoMdPlay} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/css";
import facepaint from "facepaint";
import {playlistButtonPressed, playButtonPressed, pauseButtonPressed} from "../../../redux/actions/audioPlayerActions";

const CategoryReactions = (props) => {

  const bp = facepaint([
    '@media(min-width: 700px)',
    '@media(min-width: 999px)',
    '@media(min-width: 1000px)'
  ]);

  const playlistDescriptionStyles = {
    fontSize:'1rem',
    width:'70%',
    color:"#daddda",
  }

  const playlistNameStyles = {
   color:'honeydew',
   fontSize:'1.1rem',
  }
  
  const reactionsIconsStyles = {
    color:'lightgreen',
    margin:['5px 1.1em', '5px 1.1em', '5px 0.6em'], 
  }

  const reactionContainerStyles = css(bp({
    width:"100%",
    display:['flex', 'flex', 'flex'], 
    justifyContent:"center", 
    fontSize:"0.9rem"
  }));

  const playpauseStyles = css(bp({
    width: ['7em', '5em', '4em'],
    height:['7em', '5em', '4em'],
    borderRadius:'50%',
    backgroundColor:'rgba(0, 0, 0, 0.9)',
    display: ['flex', 'flex', 'none'],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top:'50%',
    left: '50%',
    transform: 'translate(-20px, 0)',
  }));

  const labelStyles = css(bp({
    display:'inline-block',
  }));

  const playPauseIconStyles = {
    color:"lawngreen",
    width: '50%',
    height:'auto'
  }
  
  const wrapperStyles = {
    width:"100%",
    borderRadius:"10px",
    height :"100%",
    position:'relative',
    display:"flex",
    flexDirection:"column",
    justifyContent:'space-evenly',
    alignItems:'center',
    cursor:"pointer",
    background:"linear-gradient(rgba(30, 113, 64, 0.4), rgba(0,0,0,0.8))"
   }

  ///dispatching category actions
  let dispatch = useDispatch();

  let pauseCategory = (e) => {
     e.stopPropagation();
    dispatch(pauseButtonPressed());
  }

  let playCategory = (e) => {
     e.stopPropagation();
    dispatch(playButtonPressed());
  }

  const { isPlaying } = useSelector(state => state.audioPlayerReducer);


  return (
    <div css={wrapperStyles} >
      <Wrapper display="flex" flexDirection="column" padding="0.625em" position="relative"
      >
        <h4 css={playlistNameStyles}>{props.categoryName}</h4>
        <p css={playlistDescriptionStyles}>
         {props.description}
        </p>
        <div id="playpause" className={playpauseStyles}>
          {isPlaying ?  <IoMdPause css={playPauseIconStyles} onClick={pauseCategory}/>:
          <IoMdPlay css={playPauseIconStyles} onClick={playCategory}/>}
        </div>
      </Wrapper>
        
      <div className={reactionContainerStyles} id="categoryReactions" >
        
        <Wrapper display="flex" flexDirection="column-reverse" alignItems="center" 
        justifyContent="center" margin="0.3125em" 
        >
          <span className={labelStyles}>2.2B</span>
          <BsHeadphones css={reactionsIconsStyles}/>
        </Wrapper>
        <Wrapper display="flex" flexDirection="column-reverse" alignItems="center" 
        justifyContent="center" margin="0.3125em" 
        >
          <span className={labelStyles}>3.5k</span>
          <ImDownload3 css={reactionsIconsStyles}/>
        </Wrapper>
        <Wrapper display="flex" flexDirection="column-reverse" alignItems="center" 
        justifyContent="center" margin="0.3125em"
        >
          <span className={labelStyles}>456</span>
          <MdFavorite css={reactionsIconsStyles}/>
        </Wrapper>
        <Wrapper display="flex" flexDirection="column-reverse" alignItems="center" 
        justifyContent="center" margin="0.3125em"
        >
          <span className={labelStyles}>1.3k</span>
          <RiShareForwardFill css={reactionsIconsStyles}/>
        </Wrapper>
        </div>
    </div>
  )
}

export default CategoryReactions;
