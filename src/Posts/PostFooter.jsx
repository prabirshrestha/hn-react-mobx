import React from 'react';
import { observer } from 'mobx-react';

export const PostFooter = observer(({ post }) => {
  return <small>
    {post.points} points by {post._highlightResult.author.value + ' ' + post.created_at} |
    {' ' + post.num_comments} comments
  </small>;
});
