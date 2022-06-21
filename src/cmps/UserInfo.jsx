const UserInfo = ({ user }) => {
  return (
    <section className='user-info flex space-between'>
      <div className='user-img flex align-center'>
        <img src={user.img} alt='img' />
      </div>
      <div className='user-details flex flex-column'>
        <div className='user-actions flex space-between align-center'>
          <div className='user-name'>
            <h2>{user.username}</h2>
          </div>
          <div className='actions flex space-around'>
            <button className='follow-btn'>Follow</button>
            <span className='options'>...</span>
          </div>
        </div>
        <div className='user-stats flex space-between'>
          <div>
            <span className='amount'>{user.posts.length}</span> posts
          </div>
          <div>
            <span className='amount'>{user.followers.length}</span> followers
          </div>
          <div>
            <span className='amount'>{user.following.length}</span> following
          </div>
        </div>
        <div className='user-about'>
          <div className='full-name'>
            <h2>{user.fullName}</h2>
          </div>
          <div className='about'>{user.about}</div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
