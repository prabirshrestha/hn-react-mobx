import React from 'react';
import { transaction } from 'mobx';
import { observer } from 'mobx-react';
import { PostItem } from './PostItem';

function fetchNews() {
  return fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
    .then(res => res.json())
    .then(({ hits }) => hits);
}

@observer(['store'])
export class PostList extends React.Component {
  componentWillMount() {
    const { store } = this.props;
    store.isLoading = true;
    fetchNews()
      .then(posts => {
        transaction(() => {
          store.posts = posts;
          store.isLoading = false;
          store.error = null;
        });
      })
      .catch(error => {
        transaction(() => {
          store.isLoading = false;
          store.error = error;
        });
      });
  }
  render() {
    const { isLoading, posts, error } = this.props.store;
    if (error) {
      return <div>Error occurred: {error.toString()}</div>
    } else if (isLoading) {
      return <div>Fetching news...</div>;
    } else {
      return <ol className="posts">
        {posts.map(post => <PostItem key={post.objectID} post={post} />)}
      </ol>;
    }
  }
}
