import UserInfo from '../cmps/UserInfo.jsx';
const ProfilePage = () => {
  const user = {
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    fullName: 'Benny',
    username: 'BenBen',
    following: [1, 2, 3, 4],
    followers: [1, 2, 3],
    posts: [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5],
  };
  return (
    <div className='profile-page flex'>
      <UserInfo user={user} />
    </div>
  );
};

export default ProfilePage;
