import { useUserArr } from "../context/userContextArr";

const SavedCandidates = () => {
  const { userArr, setUserArr } = useUserArr();

  const handleReject = (userIndex: number) => {
    setUserArr((prevArr) => 
      prevArr ? prevArr.filter((_, index) => index !== userIndex) : [])
  };
  
  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {userArr?.map((user, index) => (
            <tr key={index}>
              <td><img className="centerImage" src={user.image} alt={user.username} /></td>
              <td>{user.username}</td>
              <td>{user.location}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.bio}</td>
              <td><button className="rejectButton" onClick={() => handleReject(index)}>-</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
