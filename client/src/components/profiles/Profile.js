import { Component } from 'react';
import Posts from '../posts/Posts';

class Profile extends Component {

    render () {
        const { id, name} = this.props.location.state
        return (
            <>
                <h1>{name}</h1>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <Posts profileId={id} />
            </>
        )
    }
}

export default Profile;