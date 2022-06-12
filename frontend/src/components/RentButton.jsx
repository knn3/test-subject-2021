import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'

const RentButton = () => {
    const { isAuthenticated, user } = useAuth0();

    const showProfile = () => {
        return (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <JSONPretty data={user} />
            </div>
        )
    }
  return (
      isAuthenticated && (
          <button onClick={showProfile}>
              Rent
          </button>
    )
  )
}

export default RentButton