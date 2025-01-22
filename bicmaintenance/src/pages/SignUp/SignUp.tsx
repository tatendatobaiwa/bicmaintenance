import React from 'react';
import './SignUp.css';

const SignUp: React.FC = () => {
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Student ID" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;