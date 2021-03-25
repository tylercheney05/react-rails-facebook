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

  addProfile = (profiles) => {
    // add in back end, used to add new profiles
    axios.post('/api/profiles', { profile })
    .then( res => {
      // add in state 
      const { profiles } = this.state
      this.setState({ profiles: [ ...profiles, res.data ]})
      .catch( err => console.log(err))
    })
  }

  updateProfile = (id, profile) => {
    //update for profile calls to backend
    axios.put('/api/profiles/${id}', { profile })
      .then( res => {
        // update in state
        const blogs = this.state.profiles.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        this.setState({ profiles })
      })
      .catch( err => console.log(err))
  }

  deleteProfile = (id) => {
    // make api call to delete profiles
    axios.delete('api/profiles/${id}')
      .then( res => {
        // delete in the state
        const { profiles } = this.state
        this.setState({ profiles: profiles.filter( p => p.id !== id)})
      })
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