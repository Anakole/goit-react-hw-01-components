import PropTypes from 'prop-types';
import { Section } from 'components/App/App.styled';
import {
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
    <Section>
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
    </Section>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
