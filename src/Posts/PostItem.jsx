import React from 'react';
import { observer } from 'mobx-react';
import { PostFooter } from './PostFooter';

export const PostItem = observer(({ post }) => {
  return <li>
    <a href={post.url}>{post.title}</a>
    <PostFooter post={post} />
  </li>;
});
