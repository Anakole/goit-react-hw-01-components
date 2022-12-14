import Profile from '../Profile/Profile';
import user from '../Profile/user.json';

import Statistics from '../Statistics/Statistics';
import data from '../Statistics/data.json';

import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';

import TransactionHistory from '../Transaction/TransactionHistory';
import transactions from '../Transaction/transactions.json';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
