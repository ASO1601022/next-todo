import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import TodoCard from '../components/TodoCard';
import SelectBox from '../components/SelectBox';
import Button from '../components/Button';
import TextField from '../components/TextField';
import DatePicker from 'react-datepicker';
import TextArea from '../components/Textarea';
import Icon from '../components/Icon';

const FullPage = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  letter-spacing: 0.05em;

  #title {
    padding: 20px 30px;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
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
    color: ${(props) => props.theme.colors.text};
  }

  #sort {
    display: inline-block;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
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

  #addTaskBtn {
    display: inline-block;
    margin-left: 27.3%;
  }

  #addTaskBtn > div > button {
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

  #cover {
    display: ${(props) => (props.active ? 'block' : 'none')};
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.41;
  }
`;

const AddTaskWrapper = styled.div`
  font-family: 'Sawarabi Gothic';
  color: ${(props) => props.theme.colors.text};
  line-height: 21px;
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: absolute;
  width: 348px;
  height: 100%;
  right: 0px;
  top: 0px;
  background: ${(props) => props.theme.colors.white};
`;

const AddTaskLabel = styled.div`
  font-family: 'Raleway';
  font-size: 24px;
  line-height: 28px;
  display: flex;
  padding: 25px;
  background: ${(props) => props.theme.colors.lightgray};
  svg {
    margin-left: 110px;
    position: relative;
    top: 3px;
  }
`;

const AddTaskContent = styled.div`
  padding: 15px;
  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 15px;
    border: 1px solid ${(props) => props.theme.colors.borderline};
    box-sizing: border-box;
    border-radius: 5px;
  }
  div > div > input {
    background-image: url('svg/img/calender.svg');
    background-repeat: no-repeat;
    background-position: right 10px center;
    width: 317px;
    cursor: pointer;
  }
  div > select {
    background-image: url('svg/img/arrow.svg');
    background-repeat: no-repeat;
    background-position: right 10px center;
    margin-bottom: 15px;
    padding: 5px;
  }
  label {
    font-size: 14px;
  }
  textarea {
    height: 128px;
    padding: 5px;
  }
  .button {
    display: inline-block;
    margin-top: 15px;
    margin-left: 70px;
  }
  #addBtn {
    margin-left: 20px;
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
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [cateList, setCateList] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [detail, setDetail] = useState('');

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
          Authorization: `Bearer ${props.token}`,
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

  const addTaskPageHandler = () => {
    setActive(true);
    axios
      .get(`https://asia-northeast1-next-todo-002.cloudfunctions.net/api/categories`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then(function (response) {
        setCategory(response.data[0].name);
        setCateList(
          response.data.map((cate, index) => {
            return {
              text: cate.name,
              value: cate.name,
            };
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addNewTaskHandler = () => {
    axios
      .post(
        `https://asia-northeast1-next-todo-002.cloudfunctions.net/api/tasks`,
        {
          title: title,
          category: category,
          limit: startDate,
          detail: detail,
        },
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setActive(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FullPage active={active}>
      <div id="title">All Categories</div>
      <div id="todoList">
        <div id="taskText">Tasks</div>
        <div id="sort">
          Sort By
          <SelectBox items={items} value={select} changeHandler={sortHandler} />
        </div>
        <div id="addTaskBtn">
          <Button text="Add Task" valiant="lime" onClick={addTaskPageHandler} />
        </div>
        {lists}
      </div>
      <div id="cover" active={active}></div>
      <AddTaskWrapper active={active}>
        <AddTaskLabel>
          Add New Task
          <Icon name="cancel" checked={active} setter={setActive} />
        </AddTaskLabel>
        <AddTaskContent>
          <TextField label="Title" value={title} setter={setTitle} />
          <SelectBox label="Category" items={cateList} value={category} setter={setCategory} />
          <label>Limit</label>
          <br />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          <TextArea label="Detail" value={detail} setter={setDetail} />
          <div className="button">
            <Button
              text="Cancel"
              valiant="outline"
              onClick={() => {
                setActive(false);
              }}
            />
          </div>
          <div className="button" id="addBtn">
            <Button text="Add" valiant="lime" onClick={addNewTaskHandler} />
          </div>
        </AddTaskContent>
      </AddTaskWrapper>
    </FullPage>
  );
};

Page.getInitialProps = async (props) => {
  let res = await axios(
    'https://asia-northeast1-next-todo-002.cloudfunctions.net/api/tasks?sort=limit',
    {
      headers: {
        //Authorization: `Bearer ${props.token}`
      },
    }
  );
  await console.log(props.token);
  return { tasks: res.data };
};

export default Page;
