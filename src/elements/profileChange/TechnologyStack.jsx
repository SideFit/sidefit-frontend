import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TechnologyList from './TechnologyList';

const TechnologyStackBox = styled.div`
  width: 800px;
  height: 155px;
  margin-bottom: 68px;
`;

const StackInput = styled.input`
  width: 377px;
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
  color: rgba(255, 255, 255, 0.6);
  ::placeholder {
    font-size: 20px;
    letter-spacing: -1.5px;
  }
`;

const Line = styled.div`
  width: 378px;
  height: 1px;
  background: rgba(255, 255, 255, 0.38);
`;

function TechnologyStack() {
  const [inputs, setInputs] = useState({ stack: '' });
  const [items, setItems] = useState([]);
  const { stack } = inputs;
  const nextId = useRef(1);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const item = {
      id: nextId.current,
      stack,
    };
    setItems([...items, item]);

    setInputs({ stack: '' });

    nextId.current += 1;
  };

  const onRemove = id => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <TechnologyStackBox>
      <StackInput
        name='stack'
        value={stack}
        onChange={onChange}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onCreate();
          }
        }}
      />
      <Line />
      <TechnologyList items={items} onRemove={onRemove} />
    </TechnologyStackBox>
  );
}

export default TechnologyStack;
