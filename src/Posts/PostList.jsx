import React from 'react';
import { observer } from 'mobx-react';
import { PostItem } from './PostItem';

@observer
export class PostList extends React.Component {
  componentWillMount() {
    const { appState } = this.props;
    appState.isLoading = true;
    fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
      .then(res => res.json())
      .then(({ hits }) => {
        appState.posts = hits;
        appState.isLoading = false;
        appState.error = null;
      })
      .catch(error => {
        appState.isLoading = false;
        appState.error = error;
      });
  }
  render() {
    const { isLoading, posts, error } = this.props.appState;
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
