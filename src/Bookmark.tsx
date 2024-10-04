import Header from "./Header";
import data from "../public/data.json";
import { MainContainer, MovieInfo, SearchContainer } from "./HomeStyle";
import { Form } from "react-router-dom";
import SearchImg from "./assets/icon-search.svg";
import MovieImg from "../public/assets/icon-category-movie.svg";
import TvSeriesImg from "../public/assets/icon-category-tv.svg";
import BookmarkImg from "../public/assets/icon-bookmark-empty.svg";
import FullBookmarkImg from "../public/assets/icon-bookmark-full.svg";
import { useState } from "react";
import { DesktopFlex, DesktopResponse } from "./Style";

export default function Bookmark() {
  const movies = data.filter(
    (movie) => movie.isBookmarked === true && movie.category === "Movie"
  );
  const tvSeries = data.filter(
    (tvSerie) =>
      tvSerie.isBookmarked === true && tvSerie.category === "TV Series"
  );

  const [movieBookmarks, setMovieBookmarks] = useState(
    movies.map((movie) => movie.isBookmarked)
  );
  const [tvSeriesBookmarks, setTvSeriesBookmarks] = useState(
    tvSeries.map((tvSerie) => tvSerie.isBookmarked)
  );
  const [search, setSearch] = useState<string>("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(search.toLowerCase())
  );

  const filteredTvSeries = tvSeries.filter((tvSerie) =>
    tvSerie.title.toLowerCase().startsWith(search.toLowerCase())
  );

  const toggleMovieBookmark = (index: number) => {
    const updatedBookmarks = [...movieBookmarks];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setMovieBookmarks(updatedBookmarks);
  };

  const toggleTvSeriesBookmark = (index: number) => {
    const updatedBookmarks = [...tvSeriesBookmarks];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setTvSeriesBookmarks(updatedBookmarks);
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
                  type="text"
                  placeholder="Search for bookmarked shows"
                  value={search}
                  onChange={handleChangeSearch}
                />
              </div>
            </Form>
          </SearchContainer>
          <MainContainer>
            <h2>Bookmarked Movies</h2>
            <div className="movies_container">
              {filteredMovies.map((movie, index) => (
                <div className="each_movie" key={movie.title}>
                  <img src={movie.thumbnail.regular.small} alt="" />
                  <MovieInfo>
                    <p>{movie.year}</p>
                    <img id="movie_img" src={MovieImg} alt="Movie" />
                    <p>{movie.category}</p>
                    <p>{movie.rating}</p>
                  </MovieInfo>
                  <h2>{movie.title}</h2>
                  <div
                    onClick={() => toggleMovieBookmark(index)}
                    className="circle"
                  >
                    {movieBookmarks[index] ? (
                      <img src={FullBookmarkImg} alt="" />
                    ) : (
                      <img src={BookmarkImg} alt="" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bookmarked_tv_series">
              <h2>Bookmarked TV Series</h2>
              <div className="movies_container">
                {filteredTvSeries.map((tvSerie, index) => (
                  <div className="each_movie" key={tvSerie.title}>
                    <img src={tvSerie.thumbnail.regular.small} alt="" />
                    <MovieInfo>
                      <p>{tvSerie.year}</p>
                      <img id="movie_img" src={TvSeriesImg} alt="TV Series" />
                      <p>{tvSerie.category}</p>
                      <p>{tvSerie.rating}</p>
                    </MovieInfo>
                    <h2>{tvSerie.title}</h2>
                    <div
                      onClick={() => toggleTvSeriesBookmark(index)}
                      className="circle"
                    >
                      {tvSeriesBookmarks[index] ? (
                        <img src={FullBookmarkImg} alt="" />
                      ) : (
                        <img src={BookmarkImg} alt="" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MainContainer>
        </DesktopFlex>
      </DesktopResponse>
    </>
  );
}
