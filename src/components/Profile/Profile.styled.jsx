import styled from '@emotion/styled';

export const ProfileStyled = styled.div`
  width: 100%;
  margin: auto;
  background-color: #e7ecf2;
  padding: 30px 0;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #fff;
  width: 250px;
  padding-top: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileAvatar = styled.img`
  width: 100px;
  background-color: #e7ecf2;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  margin: 5px;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.03em;
  margin-top: 16px;
`;

export const ProfileTagLocation = styled.p`
  margin: 4px;
  color: rgb(133, 133, 133);
  font-size: 16px;
  margin-top: 8px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  background-color: #f3f6f9;
  border-top: 1px solid rgba(180, 180, 180, 0.541);
  margin-top: 16px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: calc(100% / 3);
  }
  li:not(:last-child) {
    border-right: 1px solid rgba(180, 180, 180, 0.541);
  }
`;

export const ProfileLabel = styled.span`
font-size: 12px;
  color: rgb(133, 133, 133);
  margin-bottom: 4px;
}`;

export const ProfileQuantity = styled.span`
  display: flex;
  font-weight: 700;
  font-size: 14px;
`;
