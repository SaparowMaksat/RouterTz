import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import getUserById from '../utils/getUserById'

function EditUserPage({ usersList }) {
	const params = useParams()
	const { userId } = params

	const user = getUserById(usersList, userId)

	return (
		<div>
			<h1>Users Layout</h1>
			<NavLink to='/'>Main Page</NavLink>
			<h1>Edit User Page</h1>
			<ul>
				<li>
					<NavLink to={`/users/${user.id}/profile`}>User profile Page</NavLink>
				</li>
				<li>
					<NavLink to={`/users/${user.id + 1}/profile'`}>Another User</NavLink>
				</li>
				<li>
					<NavLink to='/users'>User List Page</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default EditUserPage
