const UserProfile = ({ name, username, bio, photoUrl }) => {
  return (
    <div className="user-profile">
      <img src={photoUrl} alt="Profile" className="profile-photo" />
      <h2>{name}</h2>
      <p>@{username}</p>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
