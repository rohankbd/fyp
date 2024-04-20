// components/ResetPassword.js
import React, { useState } from 'react';
import { auth } from '../firebase';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      setResetSent(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
      {resetSent && <p>Password reset email sent. Check your inbox.</p>}
    </div>
  );
};

export default ResetPassword;
