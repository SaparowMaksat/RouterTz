import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import getUserById from '../utils/getUserById'

function UserPage({ usersList }) {
	const params = useParams()
	const { userId } = params

	const user = getUserById(usersList, userId)

	return (
		<>
			<h1>Users Layout</h1>
			<NavLink to='/'>Main Page</NavLink>
			<h1>User Page</h1>
			<ul>
				<li>
					<NavLink to='/users'>User List Page</NavLink>
				</li>
				<li>
					<NavLink to={`/users/${user.id}/edit`}>Edit this user</NavLink>
				</li>
			</ul>
			<h3>{user ? `userId: ${user.id}` : 'not fount'}</h3>
		</>
	)
}

export default UserPage
