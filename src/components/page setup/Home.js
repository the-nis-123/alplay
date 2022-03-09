/**@jsxImportSource @emotion/react */
import Wrapper from '../global components/Wrapper';
import LeftSidebar from '../page setup/left/LeftSidebar';
import MainContent from '../page setup/center/MainContent';
import RightSidebar from '../page setup/right/RightSidebar';
import Header from '../global components/Header';
import facepaint from 'facepaint';
import { css } from '@emotion/css';

const Home = () => {
 
  const bp = facepaint([
    '@media(min-width: 240px)',
    '@media(min-width: 720px)',
    '@media(min-width: 960px)'
  ]);

  const wrapperStyles = css(bp({
    width: '100%',
    height:'100%',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column'
  }));

  

  return (
    <div className={wrapperStyles}>
      <Header/>
       <Wrapper width="100%" height="calc(100% - 60px)" 
      display="flex" justifyContent="center" alignItems="center"
      >
       <LeftSidebar/>
       <MainContent/>
      </Wrapper>
    </div>
  )
}

export default Home;
