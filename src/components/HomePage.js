import React from 'react';
import Sidebar from './Sidebar';
import TrendingQuestions from './TrendingQuestions';
import Welcome from './Welcome';
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    
<div className="main-content">

<Sidebar />

<button id="loginBtn" className="btn btn-login">
<Link to="/login" className="text-decoration-none text-white">Login</Link>
</button>
<Welcome />
<TrendingQuestions />
</div>
  );
}

export default HomePage;

