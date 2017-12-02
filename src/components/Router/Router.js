import React from 'react';
import Router from 'preact-router';
import Home from '../Home';
import Post from '../Post';
import RequestSavvy from '../RequestSavvy';
import WriteSavvy from '../WriteSavvy';

export default function SavvyRouter() {
  return (
    <Router>
      <Home path="/" />
      <Post path="/savvy/:slug" />
      <RequestSavvy path="/request" />
      <WriteSavvy path="/write" />
    </Router>
  );
}
