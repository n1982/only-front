import { createContext, Dispatch, SetStateAction } from 'react';

interface UserAuthContextProps {
  userAuth: boolean;
  setUserAuth: Dispatch<SetStateAction<boolean>>;
}

const UserAuthContext = createContext<UserAuthContextProps>({
  userAuth: false,
  setUserAuth: () => false,
});

export default UserAuthContext;
