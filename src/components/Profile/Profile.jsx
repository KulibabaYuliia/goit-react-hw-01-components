import {
  ProfileWrapper,
  UserInfoWrapper,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsLabel,
  StatsQtt,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <UserInfoWrapper>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfoWrapper>

      <StatsList>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <StatsQtt>{stats.followers}</StatsQtt>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <StatsQtt>{stats.views}</StatsQtt>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <StatsQtt>{stats.likes}</StatsQtt>
        </li>
      </StatsList>
    </ProfileWrapper>
  );
};
