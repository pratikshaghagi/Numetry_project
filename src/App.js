import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Classes from './pages/Classes';
import Gym from './pages/Gym';
import Hobbies from './pages/Hobbies';
import Community from './pages/Community';
import Feedback from './pages/Feedback';
import Account from './pages/Account';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Chatbot from './pages/Chatbot';
import BillingHistory from './pages/BillingHistory';
import AccountSettings from './pages/AccountSettings';

import Home from './pages/Home';

const App = () => {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="Home" element={<Home/>}/>
            <Route path="profile" element={<Profile />} />
            <Route path="classes" element={<Classes />} />
            <Route path="Gym" element={<Gym />} />
            <Route path="Hobbies" element={<Hobbies />} />
            <Route path="Community" element={<Community />} />
            <Route path="Feedback" element={<Feedback />} />
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} />
            <Route path="Chatbot" element={<Chatbot />} />
            <Route path="BillingHistory" element={<BillingHistory />} />
            <Route path="AccountSettings" element={<AccountSettings/>} />
           
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
