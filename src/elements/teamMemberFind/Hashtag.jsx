import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import HiddenStore from '../../components/teamMemberFind/HiddenStore';
import HashtagList from './HashtagList';

const HashtagBox = styled.div`
  width: 500px;
  height: 120px;
  white-space: nowrap;
`;

const StackInput = styled.input`
  width: 484px;
  height: 30px;
  background: transparent;
  outline: none;
  border: none;
  margin-left: -10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -1.5px;
  line-height: 24px;
  color: white;
  ::placeholder {
    font-size: 16px;
    letter-spacing: -1.5px;
  }
`;

const Line = styled.div`
  width: 484px;
  height: 1px;
  background: rgba(255, 255, 255, 0.38);
`;

function Hashtag() {
  const { tag, setTag, tagItems, setTagItems } = useContext(HiddenStore);
  const nextId = useRef(1);

  const onChangeHashtag = e => {
    setTag(e.target.value);
  };

  const onCreate = e => {
    e.preventDefault();
    if (e.key === 'Enter') {
      const item = {
        id: nextId.current,
        tag,
      };
      setTagItems([...tagItems, item]);

      setTag('');

      nextId.current += 1;
    }
  };

  const onRemove = id => {
    setTagItems(tagItems.filter(item => item.id !== id));
  };

  return (
    <HashtagBox>
      <StackInput
        value={tag}
        type='text'
        onChange={onChangeHashtag}
        placeholder='#2주 프로젝트'
        onKeyPress={onCreate}
      />
      <Line />
      <HashtagList items={tagItems} onRemove={onRemove} />
    </HashtagBox>
  );
}

export default Hashtag;
