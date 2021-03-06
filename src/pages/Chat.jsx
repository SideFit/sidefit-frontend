import React from 'react';
import styled from 'styled-components';
import ChatAside from '../components/chat/ChatAside';
import ChatMain from '../components/chat/ChatMain';

const ChatContainer = styled.main`
  display: flex;
  padding-top: 60px;
`;

function Chat() {
  return (
    <ChatContainer>
      <ChatAside />
      <ChatMain />
    </ChatContainer>
  );
}

export default Chat;
