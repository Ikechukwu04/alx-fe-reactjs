const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.Ike}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;
