import styled from "styled-components";

export const LoginContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;
export const LoginBox = styled.div`
  width: 327px;
  padding: 34px 24px 32px;
  border-radius: 10px;
  border: none;
  background-color: #161d2f;
  margin-top: 68px;
  @media (min-width: 768px) {
    width: 400px;
    padding: 32px;
    margin-top: 73px;
  }
  @media (min-width: 1440px) {
    border-radius: 20px;
  }
  & > h2 {
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin-bottom: 40px;
  }
  .for_signup {
    display: flex;
    gap: 9px;
    justify-content: center;
    margin-top: 24px;
    & > p {
      color: #fff;
      font-size: 15px;
      font-weight: 300;
    }
    & > span {
      color: #fc4747;
      font-size: 15px;
      font-weight: 300;
    }
  }
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .email_error {
    position: absolute;
    right: 10px;
    color: #fc4747;
    font-size: 13px;
    font-weight: 300;
  }
  .password_error {
    position: absolute;
    top: 65px;
    right: 10px;
    color: #fc4747;
    font-size: 13px;
    font-weight: 300;
  }
  .repeat_error {
    position: absolute;
    top: 124px;
    right: 10px;
    color: #fc4747;
    font-size: 13px;
    font-weight: 300;
  }
  & > input {
    all: unset;
    border-bottom: 1px solid #5a698f;
    padding-bottom: 17px;
    width: 279px;
    color: #fff;
    @media (min-width: 768px) {
      width: 336px;
    }
  }
  & > button {
    background-color: #fc4747;
    color: #fff;
    width: 279px;
    padding: 14px 67.5px 15px 68.5px;
    border-radius: 6px;
    border: none;
    margin-top: 23px;
    height: 48px;
    @media (min-width: 768px) {
      width: 336px;
      padding: 14px 96.5px 15px;
    }
  }
`;
export const HeaderContainer = styled.div`
  background-color: #161d2f;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 23px 24px 34px;
    width: 719px;
    border-radius: 10px;
    border: none;
    padding: 21px 16px 19px 24px;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    height: 960px;
    width: 96px;
    padding: 35.4px 28px 32px;
  }
  .right img {
    width: 24px;
    height: 24px;
    border: 1px solid #fff;
    border-radius: 50%;
    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
  .left img {
    width: 25px;
    height: 20px;
    @media (min-width: 768px) {
      width: 32px;
      height: 25.6px;
    }
  }
  .center img {
    width: 13.5px;
    height: 15px;
    @media (min-width: 768px) {
      width: 16.9px;
      height: 20px;
    }
  }
  .center {
    display: flex;
    gap: 26px;
    list-style: none;
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
`;
export const DesktopResponse = styled.div`
  @media (min-width: 1440px) {
    display: flex;
  }
`;
export const DesktopFlex = styled.div``;

export const TrendingsContainer = styled.div`
  display: flex;
  gap: 16px;
  .trending img {
    width: 240px;
    height: 140px;
    border-radius: 8px;
    border: none;
  }
`;
