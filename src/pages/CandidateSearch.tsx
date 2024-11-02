import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import User from '../interfaces/Candidate.interface';

interface Candidate {
  username: string;
}

const CandidateSearch = () => {
  const [candidateArr, setCandidateArr] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<User | null>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCandidateArr = async () => {
      const data = await searchGithub();
      const usernameArr: Candidate[] = data.map((item: any) => ({
        username: item.login
      }));
      setCandidateArr(usernameArr);
    };

    fetchCandidateArr();
  }, []);

  useEffect(() => {
    const fetchCandidate = async () => {
      if (candidateArr.length > 0 && candidateArr[index]) {
        const candidateData = await searchGithubUser(candidateArr[index].username)
        const tempData: User = {
          image: candidateData.avatar_url,
          username: candidateData.login,
          location: candidateData.location,
          email: candidateData.email,
          company: candidateData.company,
          bio: candidateData.bio          
        } 
        setCandidate(tempData);
      
      }
      
    }

    fetchCandidate();
  }, [index, candidateArr]);

  console.log(`hello`, candidate);
  console.log(`cands`, candidateArr);
// const handleAdd = () => {
//   useEffect(() => {
//     useIndex(index +1);
//   }, [index])
// } 


  return (
    <>
      <h1>Candidate Search</h1>
      <div>
        {candidate ? (
          // <div>
          //   <img src={candidate.image}></img>
          //   <h2>{candidate.username}</h2>
          //   <p>Location: {candidate.location}</p>
          //   <p>Email: <a>{candidate.email}</a></p>       
          //   <p>Company: {candidate.company}</p>
          //   <p>Bio: {candidate.bio}</p>     
          // </div>
          <div className="cardContainer">
            <img src={candidate.image}></img>
            <h2>Username</h2>
            <p>Location: Here</p>
            <p>Email: <a>test@test.com</a></p>       
            <p>Company: sum comp</p>
            <p>Bio: bio</p>     
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </>
  );
};

export default CandidateSearch;
