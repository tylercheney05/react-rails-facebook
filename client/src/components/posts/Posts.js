import { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class Posts extends Component {
    state = { posts: [] }

    componentDidMount() {
        const { profileId } = this.props
        axios.get('/api/profiles/${profileId}/posts')
            .then( res => {
                this.setState({ posts: res.data })    
            })
            .catch( err => console.log(err))
    }
    addPost = (post) => {
        const { profileId } =this.props
        axios.post('/api/profiles/${ profileId }/posts', { post })
            .then( res => {
                const { posts } = this.state
                this.setState({ posts: [...posts, res.data ]})
            })
            .catch( err => console.log(err))
    }

    deletePost = (id) => {
        const { profileId }
    }
}


export default Post;