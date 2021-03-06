import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { BsChatFill } from 'react-icons/bs';
import COLOR from '../../constants/color';

const LoginModalBox = styled.div`
  background: ${COLOR.MODAL_BACKGROUND};
  width: 512px;
  height: 372px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 38px;
  border: 1px solid grey;
`;
const CloseIcon = styled(MdClose).attrs({
  size: '24',
})`
  position: absolute;
  top: 21px;
  right: 21px;
  color: ${COLOR.TEXT_MEDIUM_EMPHASIS};
`;
const LoginModalWrapper = styled.div`
  width: 400px;
  height: 276px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  width: 400px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.7px;
    color: ${COLOR.TEXT_HIGH_EMPHASIS};
  }
  text-align: center;
  font-style: normal;
`;

const KakaoLoginButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.KAKAO_LOGIN};
  color: ${COLOR.BUTTON_TEXT_BLACK};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  border: none;
`;

const GoogleLoginButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.WHITE};
  color: ${COLOR.BUTTON_TEXT_BLACK};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  border: none;
`;

const EmailLoginButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_ORANGE};
  color: ${COLOR.BUTTON_TEXT_BLACK};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  border: none;
`;

const KakaoIcon = styled(BsChatFill)`
  margin-right: 12px;
`;

const GoogleIcon = styled(FcGoogle)`
  margin-right: 12px;
`;

const LoginButtonBox = styled.div`
  width: 400px;
  height: 168px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function LoginModal({ close, setModalIndex }) {
  return (
    <LoginModalBox>
      <CloseIcon onClick={close} />
      <LoginModalWrapper>
        <TitleBox>
          <h3>???????????? ????????????</h3>
          <p>?????? ??????????????? ????????? ??? ?????? ???????????????????????? ??????????????????!</p>
        </TitleBox>
        <LoginButtonBox>
          <KakaoLoginButton>
            <KakaoIcon />
            ???????????? ????????????
          </KakaoLoginButton>
          <GoogleLoginButton>
            <GoogleIcon />
            ????????? ????????????
          </GoogleLoginButton>
          <EmailLoginButton
            onClick={() => {
              setModalIndex(1);
            }}
          >
            ???????????? ????????????
          </EmailLoginButton>
        </LoginButtonBox>
      </LoginModalWrapper>
    </LoginModalBox>
  );
}

LoginModal.propTypes = {
  close: PropTypes.func.isRequired,
  setModalIndex: PropTypes.func.isRequired,
};

export default LoginModal;
