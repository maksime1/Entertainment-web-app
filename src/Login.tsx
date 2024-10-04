import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import LogoImg from "./assets/logo.svg";
import { Form, LoginBox, LoginContainer } from "./Style";
import Signup from "./Signup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "./Header";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().required("Can’t be empty"),
  password: yup.string().required("Can’t be empty"),
});

export default function Login() {
  const [showMovie, setShowMovie] = useState<boolean>(false);
  const [loginShow, setLoginShow] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    setShowMovie(true);
  };

  if (showMovie) {
    return <Header />;
  }

  return (
    <>
      {loginShow === false ? (
        <LoginContainer>
          <img src={LogoImg} alt="logo_img" />
          <LoginBox>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email && (
                <p className="email_error">{errors.email.message}</p>
              )}
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="password_error">{errors.password.message}</p>
              )}
              <button type="submit">Login to your account</button>
            </Form>
            <div className="for_signup">
              <p>Don't have an account?</p>
              <span onClick={() => setLoginShow(true)}>Sign up</span>
            </div>
          </LoginBox>
        </LoginContainer>
      ) : (
        <Signup setLoginShow={setLoginShow} />
      )}
    </>
  );
}
