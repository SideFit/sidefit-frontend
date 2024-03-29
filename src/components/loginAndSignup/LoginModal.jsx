import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { BsChatFill } from 'react-icons/bs';
import KakaoLogin from 'react-kakao-login';
import COLOR from '../../constants/color';

const LoginModalBox = styled.div`
  background: ${COLOR.BACKGROUND_NAVY};
  width: 512px;
  height: 372px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 38px;
  /* border: 1px solid grey; */
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

const KakaoLoginButton = styled(KakaoLogin)`
  width: 400px;
  height: 48px;
  background: ${COLOR.KAKAO_LOGIN};
  color: #000000;
  opacity: 0.85;
  border-radius: 12px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  border: none;
  &:active {
    position: relative;
    top: 2px;
  }
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
  &:active {
    position: relative;
    top: 2px;
  }
`;

const EmailLoginButton = styled.button`
  width: 400px;
  height: 48px;
  background: ${COLOR.POINT_BLUE};
  color: ${COLOR.TEXT_HIGH_EMPHASIS};
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  border: none;
  &:active {
    position: relative;
    top: 2px;
  }
  &:hover,
  &:active {
    background: #448aff;
    color: ${COLOR.WHITE};
  }
`;

const KakaoIcon = styled(BsChatFill)`
  margin-right: 12px;
  color: #000000;
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
  // const REST_API_KEY = "95723a45bd8a663b4b3d829fa73cf676";
  // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const token = process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY;
  return (
    <LoginModalBox>
      <CloseIcon onClick={close} />
      <LoginModalWrapper>
        <TitleBox>
          <h3>사이드핏 시작하기</h3>
          <p>지금 로그인하고 나에게 꼭 맞는 사이드프로젝트를 시작해보세요!</p>
        </TitleBox>
        <LoginButtonBox>
          <KakaoLoginButton
            token={token}
            onSuccess={console.log}
            onFail={console.error}
            onLogout={console.info}
          >
            <KakaoIcon />
            카카오로 계속하기
          </KakaoLoginButton>
          <GoogleLoginButton>
            <GoogleIcon />
            구글로 계속하기
          </GoogleLoginButton>
          <EmailLoginButton
            onClick={() => {
              setModalIndex(1);
            }}
          >
            이메일로 계속하기
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
