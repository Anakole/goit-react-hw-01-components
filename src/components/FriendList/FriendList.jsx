import { FriendListStyled, FriendItem, FriendStatus } from './Friend.styled';

import { Section } from 'components/App/App.styled';

export default function FriendList({ friends }) {
  return (
    <Section>
      <FriendListStyled>
        {friends.map(friend => (
          <FriendItem key={friend.id}>
            <FriendStatus status={friend.isOnline}></FriendStatus>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </FriendItem>
        ))}
      </FriendListStyled>
    </Section>
  );
}
