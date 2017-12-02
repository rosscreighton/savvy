import React from 'react';
import Router from 'preact-router';
import Home from '../Home';
import Post from '../Post';
import RequestSavvy from '../RequestSavvy';

export default function SavvyRouter() {
  return (
    <Router>
      <Home path="/" />
      <Post path="/savvy/:slug" />
      <RequestSavvy path="/request" />
    </Router>
  );
}
