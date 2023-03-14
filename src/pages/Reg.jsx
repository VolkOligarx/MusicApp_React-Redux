import * as S from "./LoginStyle"
import { NavLink } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";

export const Reg = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const loginHandleChange = (event) => {
    setLogin(event.target.value);
  };
  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };
  const repeatPasswordHandleChange = (event) => {
    setRepeatPassword(event.target.value);
  };



  const handleClick = () => {
    console.log(login);
    console.log(password);
    if (password === repeatPassword) {
      console.log('repeatPassword');

      axios.post('https://painassasin.online/user/signup/', {"username": login, "email": email, "password": password}).then(function (response) {
        console.log(response);
        window.history.back()
      }).catch(function (error) {
        alert("Почта: " + error.response.data.email + ' \n' + "Пароль: " + error.response.data.password + ' \n' + "Логин: " + error.response.data.username);
        console.log(error);
      })
    }
    else {
      alert('Пароли не совпадают')
      window.location.reload()
    }
  }; 

    return (
      <S.Div>
        <S.Form>
        <S.Img src="./img/darkLogo.png" alt="logo" />
        <S.Input type="text" placeholder="Логин" value={login} onChange={loginHandleChange} />
        <S.Input type="text" placeholder="Почта" value={email} onChange={emailHandleChange} />
        <S.Input type="password" placeholder="Пароль" name="" id="2" onChange={passwordHandleChange} />
        <S.Input type="password" placeholder="Повторите пароль" name="" id="3" onChange={repeatPasswordHandleChange} />
        <NavLink onClick={handleClick} className="loginButton" /*to="/login"*/>Зарегистрироваться</NavLink>
        </S.Form>
      </S.Div>
    )
  }