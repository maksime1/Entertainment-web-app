import Header from "./Header";
import data from "../public/data.json";
import { MainContainer, MovieInfo, SearchContainer } from "./HomeStyle";
import { Form } from "react-router-dom";
import SearchImg from "./assets/icon-search.svg";
import MovieImg from "../public/assets/icon-category-movie.svg";
import TvSeriesImg from "../public/assets/icon-category-tv.svg";
import BookmarkImg from "../public/assets/icon-bookmark-empty.svg";
import FullBookmarkImg from "../public/assets/icon-bookmark-full.svg";
import { SetStateAction, useState } from "react";
import { DesktopFlex, DesktopResponse } from "./Style";

export default function Home() {
  const movies = data.filter((movie) => movie.isTrending === false);
  const [bookmarks, setBookmarks] = useState(
    movies.map((movie) => movie.isBookmarked)
  );
  const [search, setSearch] = useState<string>("");

  const handleChangeSearch = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  const filteredMovie = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(search.toLowerCase())
  );

  const toggleBookmark = (index: number) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setBookmarks(updatedBookmarks);
  };


  return (
    <>
      <DesktopResponse>
        <Header />
        <DesktopFlex>
          <SearchContainer>
            <Form>
              <div className="search_container">
                <img src={SearchImg} alt="search_img" />
                <input
                  onChange={handleChangeSearch}
                  value={search}
                  type="text"
                  placeholder="Search for movies or TV series"
                />
              </div>
            </Form>
          </SearchContainer>
          <MainContainer>
            <h2>Recommended for you</h2>
            <div className="movies_container">
              {filteredMovie.map((movie) => {
                return (
                  <div className="each_movie" key={movie.title}>
                    <img src={movie.thumbnail.regular.small} alt="" />
                    <MovieInfo>
                      <p>{movie.year}</p>
                      {movie.category === "Movie" ? (
                        <img id="movie_img" src={MovieImg} alt="" />
                      ) : (
                        <img id="movie_img" src={TvSeriesImg} alt="" />
                      )}
                      <p>{movie.category}</p>
                      <p>{movie.rating}</p>
                    </MovieInfo>
                    <h2>{movie.title}</h2>
                    <div
                      onClick={() => toggleBookmark(movies.indexOf(movie))}
                      className="circle"
                    >
                      {bookmarks[movies.indexOf(movie)] ? (
                        <img src={FullBookmarkImg} alt="" />
                      ) : (
                        <img src={BookmarkImg} alt="" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </MainContainer>
        </DesktopFlex>
      </DesktopResponse>
    </>
  );
}
