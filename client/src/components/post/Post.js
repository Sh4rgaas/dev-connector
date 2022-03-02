import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import { getPost } from '../../actions/post';


const Post = ({ getPost, post: { post, loading } }) => {
    const { id } = useParams();
    useEffect(() => {
      getPost(id);
    }, [getPost, id]);
    
  return loading || post === null ? <Spinner /> : <section className="container">
    <Fragment>
        <Link to='/posts' className='btn'>Back to Posts</Link>
      <PostItem post={post} showActions={false}></PostItem>
      <CommentForm postId={post._id} />
    </Fragment>
    </section>

}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);