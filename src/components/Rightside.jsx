import React, { useState } from 'react';
import styled from "styled-components";

const Rightside = (props) => {
  const [followed, setFollowed] = useState([false, false]);

  const handleFollowClick = (index) => {
    const newFollowed = [...followed];
    newFollowed[index] = !newFollowed[index];
    setFollowed(newFollowed);
  };

  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <FollowButton
                followed={followed[0]}
                onClick={() => handleFollowClick(0)}
              >
                {followed[0] ? "Followed" : "Follow"}
              </FollowButton>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <FollowButton
                followed={followed[1]}
                onClick={() => handleFollowClick(1)}
              >
                {followed[1] ? "Followed" : "Follow"}
              </FollowButton>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img src="/images/hi-tech.png" alt="" />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const FollowButton = styled.button`
  background-color: ${({ followed }) => (followed ? '#e0ffe0' : 'transparent')};
  color: ${({ followed }) => (followed ? 'black' : 'rgba(0, 0, 0, 0.6)')};
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  align-items: center;
  border-radius: 15px;
  box-sizing: border-box;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  max-height: 32px;
  max-width: 480px;
  text-align: center;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ followed }) => (followed ? '#ccffcc' : 'rgba(0, 0, 0, 0.08)')};
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Rightside;
