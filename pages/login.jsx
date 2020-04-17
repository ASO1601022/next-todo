import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../stores/login';
import styled, { css } from 'styled-components';
import Logo from '../public/svg/img/logo.svg';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Link from 'next/link';

const FullPage = styled.div`
  background-image: url('svg/img/hyoushi.jpeg');
  background-position: center left;
  background-attachment: fixed;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ColorCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 84, 112, 0.85);
  font-family: 'Sawarabi Gothic';
  font-size: 18px;
  .content {
    color: white;
    text-align: center;
    position: relative;
    top: 10%;
  }
  input {
    width: 30%;
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  }
  input[type='password'] {
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.borderline};
    box-sizing: border-box;
    font-size: 18px;
    padding: 15px 20px;
    background-color: white;
    ::placeholder {
      color: ${(props) => props.theme.colors.gray};
      text-align: center;
    }
  }
  button {
    width: 183px;
    padding: 15px 34px;
    margin: 1% 0;
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  }
  .elem {
    margin: 3%;
  }
  a {
    color: white;
    text-decoration: none;
    padding-bottom: 5px;
    border-bottom: 1px solid;
  }
`;
export default () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const changeHandler = (e) => {
    setPass && setPass(e.target.value);
  };

  const loginHandler = () => {
    const axios = require('axios');
    axios
      .post('https://asia-northeast1-next-todo-002.cloudfunctions.net/api/users/login', {
        email: email,
        password: pass,
      })
      .then(function (response) {
        alert(response.data.token);
        location.href = dispatch(login(response.data.token)) && '/todoList';
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <FullPage>
      <ColorCover>
        <div className="content">
          <Logo />
          <p className="elem">これをマスターすれば天才エンジニア？高沼カリキュラム</p>
          <TextField value={email} setter={setEmail} placeholder="email" className="elem" />
          <input
            type="password"
            placeholder="password"
            className="elem"
            value={pass}
            onChange={changeHandler}
          />
          <Button text="Login" valiant="lime" onClick={loginHandler} className="elem" />
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>
      </ColorCover>
    </FullPage>
  );
};
