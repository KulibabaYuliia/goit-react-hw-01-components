import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px auto 0 auto;
  width: 200px;

  border-radius: 4px;
  border: 1px solid #b2b2b2;
  box-shadow: 0px 6px 8px 0px #d1c0c0;
  padding: 5px;

  img {
    border: 1px solid #b2b2b2;
    border-radius: 4px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
  }
`;

function checkIfFriendIsOnline(props) {
  return props.isFriendOnline ? 'green' : 'red';
}

export const FriendStatus = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${checkIfFriendIsOnline};
`;
