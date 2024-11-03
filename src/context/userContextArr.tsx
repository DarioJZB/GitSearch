import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import User from "../interfaces/Candidate.interface";

interface UserContextType {
    userArr: User[] | null;
    setUserArr: Dispatch<SetStateAction<User[] | null>>;
}
export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [userArr, setUserArr] = useState<User[] | null>(null);

    return (
        <UserContext.Provider value={{userArr, setUserArr}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserArr = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error(`useUser must be used within a UserProvider`);
    }
    return context;
};