/**@jsxImportSource @emotion/react */
import React from "react";
import {albums,artists, playlists,categories, newAlbums, charts, genres} from "./musicStore";
import AlbumWrapper from "./AlbumWrapper";
import PlaylistWrapper from "./PlaylistWrapper";
import ArtistWrapper from "./ArtistsWrapper";
import GenreWrapper from "./GenreWrapper";
import CategoryHeadLabel from "./CategoryHeadLable";
import MiniCategoryBlock from "./MiniCategoryBlock";

const AlplayCategoryContainers = () => {  
  const styles={
    width:"100%",
    height:'calc(100% - 20px)',  
    display:"flex",
    flexDirection:'column',
    overflowY:"scroll",
    overflowX:"hidden",
    position:'absolute',
    top:'0'
  }

  const gridStyles = {
    width: '100%',
    display: "grid",
    gridTemplateColumns: '1fr',
    gap: '7px',
  }

  const miniCat = [6812979044,4888783264,1925105902,9904321202];

  return (
    <div css={styles}>
      <CategoryHeadLabel linkText="See all" categoryName="New Realease" />
      <div css={gridStyles}>
        <AlbumWrapper albumsArr={newAlbums} />
      </div>

      <MiniCategoryBlock itemsArr={miniCat} />
      
      <CategoryHeadLabel linkText="See all artists" categoryName="Artists" />
      <div css={gridStyles}>
        <ArtistWrapper artistsArr={artists} />
      </div>

      <CategoryHeadLabel linkText="All Charts" categoryName="Top Charts" />
      <div css={gridStyles}>
        <PlaylistWrapper playlistsArr={charts}/>
      </div>
      
      <CategoryHeadLabel linkText="Explore all" categoryName="Now Playing" />
      <div css={gridStyles}>
        <PlaylistWrapper playlistsArr={playlists} />
        <AlbumWrapper  albumsArr={albums} />
      </div>

      <CategoryHeadLabel linkText="See all genres" categoryName="Genres" />
      <div css={gridStyles}>
        <GenreWrapper genresArr={genres}/>
      </div>

      <div css={gridStyles}>
        <PlaylistWrapper playlistsArr={playlists} />
        <AlbumWrapper  albumsArr={albums} />
      </div>


      <CategoryHeadLabel linkText="See all" categoryName="Exclusive Collections" />
      <div css={gridStyles}>
        <GenreWrapper genresArr={categories}/>
      </div>

      <div css={gridStyles}>
        <PlaylistWrapper playlistsArr={playlists} />
        <AlbumWrapper  albumsArr={albums} />
      </div>
    </div>
  )
}

export default AlplayCategoryContainers
