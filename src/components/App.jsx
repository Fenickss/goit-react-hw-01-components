import UserCard from './social-profile/Profile';
import user from './social-profile/user.json';

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
    </div>
  );
};

export default App;
