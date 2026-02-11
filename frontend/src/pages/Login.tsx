import { useState, useContext } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await API.post('/user/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
    navigate('/dashboard');
  };

  return (
  <div className="min-h-screen flex items-center justify-center 
                  bg-gradient-to-br 
                  from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">

    <div className="w-full max-w-md p-8 rounded-2xl 
                    bg-white/10 backdrop-blur-lg 
                    border border-white/20 
                    shadow-2xl">

      <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
        Welcome Back 👋
      </h2>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl 
                     bg-white/20 text-white 
                     placeholder-gray-300 
                     border border-white/30 
                     focus:outline-none 
                     focus:ring-2 focus:ring-blue-400 
                     transition duration-300"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-xl 
                     bg-white/20 text-white 
                     placeholder-gray-300 
                     border border-white/30 
                     focus:outline-none 
                     focus:ring-2 focus:ring-blue-400 
                     transition duration-300"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl 
                     bg-blue-500/30 
                     border border-blue-400/40 
                     text-white font-semibold 
                     backdrop-blur-md 
                     hover:bg-blue-500/50 
                     hover:scale-[1.02] 
                     transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  </div>
);

};

export default Login;
