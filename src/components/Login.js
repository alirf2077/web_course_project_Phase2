import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('player'); // Default role
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message);
                return;
            }

            const data = await response.json();
            setError(null);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', username);
            if (data.role === 'designer') {
                navigate('/designer-dashboard');
            } else if (data.role === 'player') {
                navigate('/player');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred. Please check your API connection.');
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, role }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message);
                return;
            }

            const data = await response.json();
            setError(null);
            console.log('Signup successful:', data.message);
            alert('Signup successful! You can now log in.');
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred. Please check your API connection.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="text-center">Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select
                            id="role"
                            className="form-select"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="player">Player</option>
                            <option value="designer">Designer</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-custom w-100"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="btn btn-custom w-100 mt-2"
                        onClick={handleSignup}
                    >
                        Signup
                    </button>
                    {error && <div className="text-danger mt-2">{error}</div>}
                </form>
            </div>
        </div>
    );
}

export default Login;
