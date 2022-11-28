import UserCard from './social-profile/Profile';
import user from './social-profile/user.json';

import Statistics from './statistics/Statistics';
import data from './statistics/data.json';

const App = () => {
  return (
    <div>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      {/* ============================================================== */}
      <Statistics title="Upload stats" stats={data} />;
    </div>
  );
};

export default App;
