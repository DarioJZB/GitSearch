import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import User from '../interfaces/Candidate.interface';
import { useUserArr } from '../context/userContextArr';

interface Candidate {
  username: string;
}

const CandidateSearch = () => {
  //array of saved cadidates
  const { setUserArr } = useUserArr();
  
  //array of potential candidates fetched from Github
  const [candidateArr, setCandidateArr] = useState<Candidate[]>([]); //array of
  const [candidate, setCandidate] = useState<User | undefined>();
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

const handleNext = () => {
  setIndex((prevIndex) => prevIndex + 1);
};

const handleAdd = () => {
  if (candidate) {
    setUserArr((prev) => (prev ? [...prev, candidate] : [candidate]))
    setIndex((prevIndex) => prevIndex + 1);
  }
} 

  return (
    <>
      <h1>Candidate Search</h1>
      <div>
        {candidate ? (       
          <div className="cardContainer">
            <div>
              <img src={candidate.image}></img>
              <h2>{candidate.username}</h2>
              <p>Location: {candidate.location}</p>
              <p>Email: <a>{candidate.email}</a></p>       
              <p>Company: {candidate.company}</p>
              <p>Bio: {candidate.bio}</p>
            </div>
            <div className="buttonContainer">
              <button onClick={handleNext}>
                NEXT
              </button>
              <button onClick={handleAdd}>
                ADD
              </button>
            </div>     
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </>
  );
};

export default CandidateSearch;
