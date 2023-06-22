import React from 'react'
import { NavLink } from 'react-router-dom'

function UsersListPage({ usersList }) {
	return (
		<>
			<h1>Users Layout</h1>
			<NavLink to='/'>Main Page</NavLink>
			<h1>User List Page</h1>
			<ul>
				{usersList.map(u => (
					<li key={u.id}>
						<NavLink
							to={`/users/${u.id}/profile`}
						>{`${u.name} ${u.id}`}</NavLink>
					</li>
				))}
			</ul>
		</>
	)
}

export default UsersListPage
