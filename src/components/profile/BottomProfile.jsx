import React from 'react';
import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import ProjectCard from '../home/ProjectCard';
import profile from '../../images/profile.png';
import InformationBox from '../../elements/profile/InformationBox';

const MyBottomProfile = styled.div`
  width: 100%;
  height: 1465px;
  background: #121a26;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const MoreInformationBox = styled.div`
  width: 1200px;
  height: 395px;
  display: flex;
  flex-direction: column;
`;

const Information = styled.div`
  margin-top: 64px;
  width: 110px;
  height: 36px;
  letter-spacing: -2px;
  font-size: 24px;
  font-weight: 700;
`;

const CurrentStatus = styled.div`
  margin-top: 24px;
  width: 1200px;
  height: 36px;
  display: flex;
`;

const InformationTitle = styled.div`
  width: 100px;
  height: 36px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-right: 111px;
`;

const LinkBox = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.74);
  border-radius: 10.8182px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const URLBox = styled.div`
  width: auto;
  height: 32px;
  font-size: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  margin-left: 8px;
  margin-right: 16px;
`;

const ProjectBox = styled.div`
  width: 1200px;
  height: 367px;
  display: flex;
  margin-top: 96px;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 24px;
`;

const ProjectCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 35px;
  flex-direction: row;
`;

const FeedbackBox = styled.div`
  margin-top: 80px;
  width: 1200px;
  height: 108;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;

const FeedbackContent = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: row;
  height: 48px;
`;

const FeedbackContents = styled.div`
  display: flex;
  margin-right: 36px;
  font-size: 12.5px;
  letter-spacing: -1px;
  flex-direction: row;
  align-items: center;
  width: 273px;
  height: 48px;
  justify-content: flex-start;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 8px;
`;

const BsPeopleBox = styled.div`
  display: flex;
  justify-items: flex-start;
  margin-right: 11px;
  margin-left: 19px;
  size: 20px;
`;

const ValueBox = styled.div`
  display: flex;
  margin-right: 18px;
  font-size: 13px;
  font-weight: bold;
`;

const Manners = styled.div`
  width: 1200px;
  height: 218px;
  display: flex;
  flex-direction: column;
`;

const MannersBox = styled.div`
  width: 1200px;
  height: 158px;
  display: flex;
  flex-direction: row;
`;

const MannerContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 24px 15px;
  line-height: 20px;
  letter-spacing: 0.4px;
  width: 273px;
  height: 140px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1f2b3c;
  border-radius: 8px;
  margin-right: 36px;
`;

const MannerDate = styled.div`
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: flex-end;
`;

const ProfileImage = styled.img.attrs({
  src: `${profile}`,
})`
  width: 27.53px;
  height: 27.53px;
  border-radius: 12px;
  margin-right: 143px;
`;

function BottomProfile() {
  return (
    <MyBottomProfile>
      <MoreInformationBox>
        <Information>?????? ??????</Information>
        <CurrentStatus>
          <InformationTitle>????????????</InformationTitle>
          <InformationBox name='???????????? ?????? ???' />
          <InformationBox name='?????? ???' />
          <InformationBox name='??????????????? ?????? ???' />
        </CurrentStatus>
        <CurrentStatus>
          <InformationTitle>MBTI</InformationTitle>
          <InformationBox name='ENTP' />
        </CurrentStatus>
        <CurrentStatus>
          <InformationTitle>????????????</InformationTitle>
          <InformationBox name='??????' />
          <InformationBox name='??????' />
        </CurrentStatus>
        <CurrentStatus>
          <InformationTitle>????????????</InformationTitle>
          <InformationBox name='Jaba' />
          <InformationBox name='Spring' />
          <InformationBox name='React' />
        </CurrentStatus>
        <CurrentStatus>
          <InformationTitle>URL</InformationTitle>
          <LinkBox>
            <FaLink />
          </LinkBox>
          <URLBox>???????????????</URLBox>
          <LinkBox>
            <FaLink />
          </LinkBox>
          <URLBox>?????????</URLBox>
        </CurrentStatus>
      </MoreInformationBox>
      <ProjectBox>
        <ProjectTitle>?????? ?????? ????????????</ProjectTitle>
        <ProjectCardBox>
          <ProjectCard />
          <ProjectCard />
        </ProjectCardBox>
      </ProjectBox>
      <FeedbackBox>
        <ProjectTitle>?????? ?????????</ProjectTitle>
        <FeedbackContent>
          <FeedbackContents>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>6</ValueBox>??? ??????????????? ??? ?????????.
          </FeedbackContents>
          <FeedbackContents>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>6</ValueBox>?????????????????? ????????? ????????????
          </FeedbackContents>
          <FeedbackContents>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>6</ValueBox> ???????????? ????????????
          </FeedbackContents>
          <FeedbackContents>
            <BsPeopleBox>
              <BsPeople size={20} />
            </BsPeopleBox>
            <ValueBox>6</ValueBox> ???????????? ????????????
          </FeedbackContents>
        </FeedbackContent>
      </FeedbackBox>
      <Manners>
        <ProjectTitle>?????? ?????? ??????</ProjectTitle>
        <MannersBox>
          <MannerContent>
            ????????? ????????? ????????? ????????????. ???????????? ????????? ????????? ?????? ?????????
            ????????? ????????? ???????????? ????????????.
            <MannerDate>
              <ProfileImage /> 2022.06.22
            </MannerDate>
          </MannerContent>
          <MannerContent>
            ????????? ????????? ????????? ????????????. ???????????? ????????? ????????? ?????? ?????????
            ????????? ????????? ???????????? ????????????.
            <MannerDate>
              <ProfileImage /> 2022.06.22
            </MannerDate>
          </MannerContent>
        </MannersBox>
      </Manners>
    </MyBottomProfile>
  );
}

export default BottomProfile;
