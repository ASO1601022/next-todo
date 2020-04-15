import React, { useState } from 'react';
import TextArea from '../components/Textarea';
import Button from '../components/Button';
import styled from 'styled-components';
import TextField from '../components/TextField';
import SelectBox from '../components/SelectBox';
import SideBar from '../components/SideBar';
import bag from '../public/svg/img/bag.svg';
import fire from '../public/svg/img/fire.svg';
import home from '../public/svg/img/home.svg';
import ref from '../public/svg/img/ref.svg';
import layer from '../public/svg/img/layer.svg';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`;
const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  margin-left: 30px;
  vertical-align: middle;
`;

export default () => {
  const [textarea, setTextarea] = useState('aaa');
  const [text, setText] = useState('bbb');
  const [select, setSelect] = useState('2');
  const items = [
    {
      text: '選択肢１',
      value: '1',
    },
    {
      text: '選択肢2',
      value: '2',
    },
    {
      text: '選択肢255',
      value: '255',
    },
  ];
  const [page, setPage] = useState('all');
  const cateList = [
    {
      id: 'bag',
      icon: bag,
      name: 'Work',
    },
    {
      id: 'ref',
      icon: ref,
      name: 'お買い物リスト',
    },
    {
      id: 'fire',
      icon: fire,
      name: '買いたい',
    },
    {
      id: 'home',
      icon: home,
      name: 'House',
    },
    {
      id: 'layer',
      icon: layer,
      name: 'その他',
    },
  ];

  const categories = cateList.map((cate, index) => {
    const Svg = styled(cate.icon)``;
    return (
      <div id={cate.id} key={index}>
        <Svg id={cate.id} />
        <Text id={cate.id}>{cate.name}</Text>
      </div>
    );
  });

  return (
    <DlWrapper>
      <dt>textarea</dt>
      <dd>
        <TextArea label="ラベル" value={textarea} setter={setTextarea} />
      </dd>
      <dt>ボタン</dt>
      <dd>
        <Button text="outline" valiant="outline" onClick={() => alert('クリックされた')} />
      </dd>
      <dd>
        <Button text="lime" valiant="lime" onClick={() => alert('クリックされた')} />
      </dd>
      <dd>
        <Button text="main" valiant="main" onClick={() => alert('クリックされた')} />
      </dd>
      <dt>text field</dt>
      <dd>
        <TextField label="ラベル" value={text} setter={setText} />
      </dd>
      <dt>select box</dt>
      <dd>
        <SelectBox items={items} value={select} setter={setSelect}></SelectBox>
      </dd>
      <dt>side bar</dt>
      <dd>
        <SideBar selected={page} setter={setPage}>
          {categories}
        </SideBar>
      </dd>
    </DlWrapper>
  );
};
