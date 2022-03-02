/**@jsxImportSource @emotion/react */
import React from "react";
import {albums,artists, playlists,categories, newAlbums, charts, genres} from "./musicStore";
import AlbumWrapper from "./AlbumWrapper";
import PlaylistWrapper from "./PlaylistWrapper";
import ArtistWrapper from "./ArtistsWrapper";
import GenreWrapper from "./GenreWrapper";

const AlplayCategoryContainers = () => {  
  const styles={
    width:"calc(100% - 5px)",
    height:'calc(100% - 20px)',  
    display:"flex",
    flexDirection:'column',
    overflow:"auto",
    position:'absolute',
    top:'0'
  }

  const gridStyles = {
    width: '100%',
    display: "grid",
    gridTemplateColumns: '1fr',
    gap: '10px',
  }

  return (
    <div css={styles}>
      <h4>New Release</h4>
      <div css={gridStyles}>
        <AlbumWrapper albumsArr={newAlbums} />
      </div>

      <h4>Artists</h4>
      <div css={gridStyles}>
        <ArtistWrapper artistsArr={artists} />
      </div>

      <h4>Top Charts</h4>
      <div css={gridStyles}>
        <PlaylistWrapper playlistsArr={charts}/>
      </div>

      <h4>Explore</h4>
      <div css={gridStyles}>
        <PlaylistWrapper playlistsArr={playlists} />
        <AlbumWrapper  albumsArr={albums} />
      </div>

      <h4>Popular Genres</h4>
      <div css={gridStyles}>
        <GenreWrapper genresArr={genres}/>
      </div>

      <div css={gridStyles}>
        <PlaylistWrapper playlistsArr={playlists} />
        <AlbumWrapper  albumsArr={albums} />
      </div>


      <h4>Popular Categories</h4>
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
