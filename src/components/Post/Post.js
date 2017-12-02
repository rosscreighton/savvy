import React from 'react';
import posts from '../../data/posts.json';
import NavHeader from '../NavHeader';
import './Post.scss';

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
          <div styleName="body" dangerouslySetInnerHTML={{ __html: post.body }}>
          </div>
        </div>
      </div>
    </div>
  );
}
