import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};
