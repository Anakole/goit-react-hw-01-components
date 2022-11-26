import styled from '@emotion/styled';

export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 200px;
  padding: 12px;
  border-radius: 4px;
  gap: 16px;
  background-color: #f0f3f7;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  p {
    font-weight: 500;
    color: #4e5b64;
  }
`;

export const FriendStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.status === true) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
