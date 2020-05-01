import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import TodoCard from '../components/TodoCard';
import SelectBox from '../components/SelectBox';
import Button from '../components/Button';

const FullPage = styled.div`
  font-family: 'Raleway';
  font-style: normal;

  #title {
    padding: 20px 30px;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.text};
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.colors.borderline};
  }

  .task {
    margin: 20px 30px;
  }

  #todoList {
    width: 600px;
  }

  #taskText {
    display: inline-block;
    margin: 20px 30px 0px 30px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.text};
  }

  #sort {
    display: inline-block;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.gray};
  }

  #sort > div {
    display: inline-block;
  }

  #sort > div > select {
    padding: 7px 25px 7px 10px;
    border: none;
    background-image: url('svg/img/arrow.svg');
    background-repeat: no-repeat;
    background-position: right 10px center;
    text-align: center;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.gray};
  }

  #addBtn {
    display: inline-block;
    margin-left: 27.3%;
  }

  #addBtn > div > button {
    padding: 7px 10px 7px 20px;
    border: none;
    background-image: url('svg/img/add.svg');
    background-repeat: no-repeat;
    background-position: left 10px center;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.text};
  }
`;

const axios = require('axios');

const Page = ({ tasks }) => {
  const [select, setSelect] = useState('limit');
  const items = [
    {
      text: 'Limit',
      value: 'limit',
    },
    {
      text: 'Created At',
      value: 'created_at',
    },
    {
      text: 'Category',
      value: 'category',
    },
  ];

  const [lists, setLists] = useState(
    tasks.map((task, index) => {
      return (
        <div key={index} className="task">
          <TodoCard
            text={task.title}
            category={task.category}
            date={new Date(task.limit)}
            id={task.id}
          />
        </div>
      );
    })
  );

  const sortHandler = async (e) => {
    await setSelect(e.target.value);
    console.log(select);
    await axios
      .get(`https://asia-northeast1-next-todo-002.cloudfunctions.net/api/tasks?sort=${select}`, {
        headers: {
          //Authorization: `Bearer ${props.token}`,
          Authorization: `Bearer 15a0f27d076443539a8cd02b3cb431ef`,
        },
      })
      .then(function (response) {
        setLists(
          response.data.map((task, index) => {
            return (
              <div key={index} className="task">
                <TodoCard
                  text={task.title}
                  category={task.category}
                  date={new Date(task.limit)}
                  id={task.id}
                />
              </div>
            );
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <FullPage>
      <div id="title">All Categories</div>
      <div id="todoList">
        <div id="taskText">Tasks</div>
        <div id="sort">
          Sort By
          <SelectBox items={items} value={select} changeHandler={sortHandler} />
        </div>
        <div id="addBtn">
          <Button text="Add Task" valiant="lime" />
        </div>
        {lists}
      </div>
    </FullPage>
  );
};

Page.getInitialProps = async (props) => {
  let res = await axios(
    'https://asia-northeast1-next-todo-002.cloudfunctions.net/api/tasks?sort=limit',
    {
      headers: {
        //Authorization: `Bearer ${props.token}`,
        Authorization: `Bearer 15a0f27d076443539a8cd02b3cb431ef`,
      },
    }
  );
  await console.log(props.token);
  return { tasks: res.data };
};

export default Page;
