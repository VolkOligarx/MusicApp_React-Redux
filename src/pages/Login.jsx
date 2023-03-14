import * as S from "./LoginStyle"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'

import { useState } from "react";
import { setUserCredentials } from "../Redux/userCredentialsSlice";
import { useEffect } from "react";

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const accessToken = useSelector(state => state.userCredentials.accessToken);

  useEffect(() => {
    if (accessToken) {
      console.log(accessToken);
      return navigate("/");
    }
  }, [accessToken]);

  const onAuthorizeAction = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post(
        "https://painassasin.online/user/login/", {email, password}
      );
      const tokenResponse = await axios.post(
        "https://painassasin.online/user/token/", {
          "email": loginResponse.data.email,
          "password": password
        }
      );
        console.log(tokenResponse);
      document.cookie = `accessToken=${tokenResponse.data.access}; max-age=180`; 
      localStorage.setItem("refreshToken", tokenResponse.data.refresh);
      dispatch(
        setUserCredentials({
          username: loginResponse.data.username,
          email: loginResponse.data.email,
          accessToken: tokenResponse.data.access,
        })
      )
    } catch (error) {
        alert(error.response.data.detail)
        console.log(error);
    }
  }

    return (
      <S.Div>
        <S.Form onSubmit={(e) => onAuthorizeAction(e)}>
          <S.Img src="./img/darkLogo.png" alt="logo" />
          <S.Input type="text" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} />
          <S.Input type="password" placeholder="Пароль" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
          <S.Button className="loginButton">Войти</S.Button>
        </S.Form>
        <NavLink to="/reg">Зарегистрироваться</NavLink>
      </S.Div>
    )
  }