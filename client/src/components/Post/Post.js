/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import { route } from 'preact-router';
import posts from '../../data/posts.json';
import NavHeader from '../NavHeader';
import './Post.scss';

const onClick = (e) => {
  e.preventDefault();
  route(e.target.pathname);
};

export default function Post({ slug }) {
  const post = posts[slug];

  return (
    <div styleName="container">
      <NavHeader />
      <div styleName="content">
        <div styleName="suggested">
          Suggested Savvies
          <div styleName="suggested-items">
            {Object.entries(posts).map(([postSlug, { title }]) => (
              <a href={`/savvy/${postSlug}`} styleName="suggested-item">
                {title}
              </a>
            ))}
          </div>
        </div>
        <div styleName="post">
          <div styleName="title">
            {post.title}
          </div>
          <div
            styleName="body"
            dangerouslySetInnerHTML={{ __html: post.body }}
            onClick={onClick}
          />
          <div styleName="other-links">
            <a href="/write">Write a Savvy</a>
            <a href="/request">Request a Savvy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
};
