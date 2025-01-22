import React from 'react';
import './SignIn.css';

const SignIn: React.FC = () => {
  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="Student ID" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;