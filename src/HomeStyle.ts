import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 26px 16px 0px;
  @media (min-width: 768px) {
    padding: 0px 336px 34px 25px;
  }
  @media (min-width: 1440px) {
    padding: 65px 899px 35px 36px;
  }
  .search_container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .search_container input {
    all: unset;
    width: 214px;
    color: #fff;
    opacity: 0.7;
  }
  .search_container img {
    width: 20px;
    height: 20px;
    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
export const Form = styled.form``;

export const MainContainer = styled.main`
  padding: 24px 16px 61px;
  @media (min-width: 768px) {
    padding: 0px 24px 56px 24px;
  }
  @media (min-width: 1440px) {
    padding: 0px 36px 52px 36px;
  }
  & > h2 {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.31px;
    @media (min-width: 768px) {
      font-size: 32px;
      font-weight: 200;
      letter-spacing: -0.5px;
    }
  }
  .movies_container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 15px;
    margin-top: 24px;
    @media (min-width: 768px) {
      gap: 29px 24px;
    }
    @media (min-width: 1440px) {
      gap: 40px 32px;
    }
  }

  .bookmarked_tv_series {
    margin-top: 24px;
  }
  .bookmarked_tv_series h2 {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-top: 5px;
  }
  .movies_container h2 {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
    @media (min-width: 768px) {
      font-size: 18px;
      font-weight: 500;
    }
  }
  .movies_container img {
    width: 164px;
    height: 110px;
    border-radius: 8px;
    border: none;
    @media (min-width: 768px) {
      width: 220px;
      height: 140px;
    }
    @media (min-width: 1440px) {
      width: 280px;
      height: 174px;
    }
  }
  #movie_img {
    width: 10px;
    height: 10px;
  }
  .each_movie {
    position: relative;
  }
  .circle img {
    width: 12px;
    height: 14px;
  }
  .circle {
    background-color: #10141e;
    opacity: 0.8;
    border-radius: 50%;
    border: none;
    width: 32px;
    height: 32px;
    padding: 9px 10.3px 9px 10px;
    position: absolute;
    z-index: 1;
    top: 17px;
    left: 125px;
    @media (min-width: 768px) {
      left: 170px;
    }
    @media (min-width: 1440px) {
      left: 220px;
    }
  }
`;
export const MovieInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 8px;
  & > p {
    color: #fff;
    font-size: 10px;
    font-weight: 300;
    opacity: 0.75;
    @media (min-width: 768px) {
      font-size: 13px;
      font-weight: 300;
    }
  }
`;
