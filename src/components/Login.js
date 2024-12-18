import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault(); // جلوگیری از رفرش صفحه

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
            setError(null); // پاک کردن خطاها
            setSuccess(true);
            console.log('Token:', data.token); // توکن دریافت‌شده را می‌توانید ذخیره کنید
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="text-center">Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="btn btn-custom w-100">Login</button>
                    {error && <div className="text-danger mt-2">{error}</div>}
                    {success && <div className="text-success mt-2">Login successful!</div>}
                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none forgot-password-link">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
