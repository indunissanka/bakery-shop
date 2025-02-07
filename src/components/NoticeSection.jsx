import React from 'react';
import './NoticeSection.css';

function NoticeSection({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className="notice-section">
      <p>{message}</p>
    </div>
  );
}

export default NoticeSection;
