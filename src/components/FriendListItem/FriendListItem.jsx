import { FriendItem, FriendStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus isFriendOnline={isOnline}></FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};
