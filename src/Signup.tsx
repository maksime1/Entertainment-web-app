import { Form, LoginBox, LoginContainer } from "./Style";
import LogoImg from "./assets/logo.svg";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  setLoginShow: (count: boolean) => void;
};
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Login from "./Login";
type Inputs = {
  email: string;
  password: string;
  repeatPassword: string;
};
const schema = yup.object({
  email: yup.string().required("Can’t be empty"),
  password: yup.string().required("Can’t be empty"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match")
    .required("Can’t be empty"),
});

export default function Signup({ setLoginShow }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = () => setShow(true);
  return (
    <>
      {show === false ? (
        <LoginContainer>
          <img src={LogoImg} alt="logo_img" />
          <LoginBox>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email ? (
                <p className="email_error">{errors.email.message}</p>
              ) : null}
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password ? (
                <p className="password_error">{errors.password.message}</p>
              ) : null}

              <input
                type="password"
                placeholder="Repeat Password"
                {...register("repeatPassword")}
              />
              {errors.repeatPassword ? (
                <p className="repeat_error">{errors.repeatPassword.message}</p>
              ) : null}
              <button type="submit">Create an account</button>
            </Form>
            <div className="for_signup">
              <p>Alread have an account?</p>
              <span onClick={() => setLoginShow(false)}>Login</span>
            </div>
          </LoginBox>
        </LoginContainer>
      ) : (
        <Login />
      )}
    </>
  );
}
