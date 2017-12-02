import React from 'react';
import Router from 'preact-router';
import Home from '../Home';
import Post from '../Post';

export default function SavvyRouter() {
  return (
    <Router>
      <Home path="/" />
      <Post path="/savvy/:slug" />
    </Router>
  );
}
