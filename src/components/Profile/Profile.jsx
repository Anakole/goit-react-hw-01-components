import {
  ProfileStyled,
  ProfileContainer,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTagLocation,
  ProfileStats,
  ProfileLabel,
  ProfileQuantity,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileStyled>
      <ProfileContainer>
        <ProfileDescription>
          <ProfileAvatar src={avatar} alt="User avatar" />
          <ProfileName>{username}</ProfileName>
          <ProfileTagLocation>@{tag}</ProfileTagLocation>
          <ProfileTagLocation>{location}</ProfileTagLocation>
        </ProfileDescription>

        <ProfileStats>
          <li>
            <ProfileLabel>Followers</ProfileLabel>
            <ProfileQuantity>{followers}</ProfileQuantity>
          </li>
          <li>
            <ProfileLabel>Views</ProfileLabel>
            <ProfileQuantity>{views}</ProfileQuantity>
          </li>
          <li>
            <ProfileLabel>Likes</ProfileLabel>
            <ProfileQuantity>{likes}</ProfileQuantity>
          </li>
        </ProfileStats>
      </ProfileContainer>
    </ProfileStyled>
  );
}
