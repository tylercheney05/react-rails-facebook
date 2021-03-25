import { Link } from 'react-router-dom';

const ProfileList = ({ profiles }) => {
  return (
    <>
      {
        profiles.map( p => 
          <>
            <Link
              to={{
                pathname:`/profiles/${p.id}`,
                state: { ...p }
              }}>
                {p.name}
              </Link>
              <button> Edit </button>
              <button> Delete </button>
              <br/>
          </>
          )
      }
    </>
  )
}
export default ProfileList