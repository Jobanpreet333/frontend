// ResetPassword.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL;
const ResetPassword = () => {
  const { token } = useParams(); // from URL
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      return setMessage('Passwords do not match');
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/reset/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      setMessage(data.msg);

      if (res.ok) {
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      setMessage('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ResetPassword;
