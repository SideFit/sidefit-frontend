import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

const MeetingPlanDropdownBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
  z-index: 10;
  position: relative;
`;

const SelectedBox = styled.div`
  width: 484px;
  height: 36px;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  margin-top: -2px;
  margin-left: 0px;
  border-radius: 5px;
  letter-spacing: -1.5px;
  color: white;
`;

const ArrowIcon = styled(RiArrowDownSLine)`
  margin-left: 450px;
  position: absolute;
  color: white;
  width: 24px;
  height: 24px;
`;

const Line = styled.div`
  width: 484px;
  height: 1px;
  background: rgba(255, 255, 255, 0.38);
`;

const DropdownItemBox = styled.ul`
  background: #121a26;
  width: 484px;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  position: absolute;
  top: 35px;
`;

const DropdownItem = styled.li`
  display: flex;
  letter-spacing: -1.5px;
  color: rgba(255, 255, 255, 0.6);
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  padding-left: 15px;
  &:hover {
    background: #448aff;
    color: white;
  }
`;

function MeetingPlan() {
  const [toggle, setToggle] = useState(false);
  const [MeetingDatas, setMeetingDatas] = useState('모임 계획');

  const MeetingData = [
    { id: 1, text: '온라인' },
    { id: 2, text: '오프라인' },
    { id: 3, text: '온/오프라인' },
    { id: 4, text: '유동적인 회의' },
  ];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // const onChange = () => {
  //   const user = {
  //     id: nextId.current,
  //     MeetingDatas,
  //   };
  //   setMeetingValue([...MeetingValue, user]);
  //   nextId.current += 1;
  // };

  // const onRemove = id => {
  //   setMeetingValue(MeetingValue.filter(item => item.id !== id));
  // };

  return (
    <div>
      <MeetingPlanDropdownBox>
        <SelectedBox onClick={handleToggle}>
          {MeetingDatas}
          <ArrowIcon />
        </SelectedBox>
        <Line />
        {toggle && (
          <DropdownItemBox>
            {MeetingData.map(item => (
              <DropdownItem
                key={item.id}
                onClick={() => {
                  handleToggle();
                  setMeetingDatas(item.text);
                }}
              >
                {item.text}
              </DropdownItem>
            ))}
          </DropdownItemBox>
        )}
      </MeetingPlanDropdownBox>
    </div>
  );
}

export default MeetingPlan;
