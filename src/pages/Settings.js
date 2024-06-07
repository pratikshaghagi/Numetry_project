import React, { useState } from 'react';
import './pages.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    display: '1080p',
    sound: true,
    darkMode: false,
    privacy: 'Standard',
    autoUpdate: true,
    securityLevel: 'High'
  });

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting]
    }));
  };

  const handleSelectChange = (setting, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: value
    }));
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-section">
        <h2>Display</h2>
        <select
          value={settings.display}
          onChange={(e) => handleSelectChange('display', e.target.value)}
        >
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
          <option value="1440p">1440p</option>
          <option value="4K">4K</option>
        </select>
      </div>
      <div className="settings-section">
        <h2>Sound</h2>
        <label>
          <input
            type="checkbox"
            checked={settings.sound}
            onChange={() => handleToggle('sound')}
          />
          Enable Sound
        </label>
      </div>
      <div className="settings-section">
        <h2>Dark Mode</h2>
        <label>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => handleToggle('darkMode')}
          />
          Enable Dark Mode
        </label>
      </div>
      <div className="settings-section">
        <h2>Privacy</h2>
        <select
          value={settings.privacy}
          onChange={(e) => handleSelectChange('privacy', e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Standard">Standard</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="settings-section">
        <h2>Update</h2>
        <label>
          <input
            type="checkbox"
            checked={settings.autoUpdate}
            onChange={() => handleToggle('autoUpdate')}
          />
          Enable Auto Update
        </label>
      </div>
      <div className="settings-section">
        <h2>Security</h2>
        <select
          value={settings.securityLevel}
          onChange={(e) => handleSelectChange('securityLevel', e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
