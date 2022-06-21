const UserInfo = ({ user }) => {
  return (
    <section className='user-info flex space-between'>
      <div className='user-img'>
        <img src={user.img} alt='img' />
      </div>
      <div className='user-details'>
        <div className='user-actions'>
          <div>{user.username}</div>
        </div>
        <div className='user-stats flex space-between'>
          <div>following {user.following.length}</div>
          <div>followers {user.followers.length}</div>
          <div>posts {user.posts.length}</div>
        </div>
        <div className='user-about'>
          <div>{user.fullName}</div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
