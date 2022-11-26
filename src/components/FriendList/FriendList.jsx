import {
  FriendSection,
  FriendListStyled,
  FriendItem,
  FriendStatus,
} from './Friend.styled';

export default function FriendList({ friends }) {
  return (
    <FriendSection>
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
    </FriendSection>
  );
}
