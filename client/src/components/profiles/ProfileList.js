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
              <br/>
          </>
          )
      }
    </>
  )
}
export default ProfileList