import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  margin: 0 auto 20px;
  width: 200px;
  border-radius: 4px;
  box-shadow: 0px 6px 8px 0px #d1c0c0;
`;

export const UserInfoWrapper = styled.div`
  padding: 10px;
  border: 1px solid #b2b2b2;
  border-bottom: none;
  text-align: center;
`;

export const Avatar = styled.img`
  margin: 0px auto 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const UserTag = styled.p`
  color: #666666;
  margin-bottom: 5px;
  font-size: 12px;
`;

export const UserLocation = styled.p`
  color: #666666;
  font-size: 12px;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  li {
    padding: 5px;
    border: 1px solid #b2b2b2;
    background-color: hsl(0, 0%, 80%);
    display: grid;
  }
`;

export const StatsLabel = styled.span`
  font-size: 10px;
  text-align: center;
`;

export const StatsQtt = styled.span`
  font-size: 12px;
  text-align: center;
  font-weight: 600;
`;
