import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserAuthContext from '../context/UserAuthContext';
import styled from 'styled-components';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;

  h2,
  span {
    font-size: 40px;
  }

  span {
    font-weight: 700;
  }

  button {
    width: 200px;
    height: 60px;
    border: none;
    background: #f5f5f5;
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
  }
`;

const Profile = () => {
  const navigate = useNavigate();
  const { login } = useParams();
  const { setUserAuth } = useContext(UserAuthContext);

  const handleClick = () => {
    setUserAuth(false);
    navigate('/login', { replace: true });
  };

  return (
    <StyledProfile>
      <h2>
        Здравствуйте, <span>{login}</span>
      </h2>
      <button onClick={() => handleClick()}>Выйти</button>
    </StyledProfile>
  );
};

export default Profile;
