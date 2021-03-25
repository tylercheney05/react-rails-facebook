import { Component } from 'react';
import axios from 'axios';
import { Menu } from 'semantic-ui-react';
import ProfileList from './ProfileList'

class Profiles extends Component {
  state = { profiles: [] }

  componentDidMount() {
    // Make a call to our rails server to get Profiles
    axios.get('/api/profiles')
      .then( res => {
        this.setState({ profiles: res.data })
      })
      .catch( err => console.log(err))
  }

  addProfile = (name) => {
    // make api call to rails server to add profiles
    // update state
  }

  updateProfile = (id) => {
    // make api call to update profiles
    // update state
  }

  deleteProfile = (id) => {
    // make api call to delete profiles
    // remove it from state
  }

  render() {
    const { profiles } = this.state
    return(
      <>
        <h1>Profiles</h1>
        <ProfileList profiles={profiles}/>
      </>
    )
  }
}
export default Profiles