import UserInfo from '../cmps/UserInfo.jsx';
const ProfilePage = () => {
  const user = {
    img: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/5ba51753c318c4573c8389783ba5c4c5.jpeg?x-expires=1655787600&x-signature=DhsnUzEOyFyrGCq7BYGL%2FJ0%2FGS0%3D',
    fullName: 'Benny',
    username: 'BenBen',
    following: [1, 2, 3, 4],
    followers: [1, 2, 3],
    posts: [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5],
  };
  return (
    <div className="flex">
      <UserInfo user={user} />
    </div>
  );
};

export default ProfilePage;
