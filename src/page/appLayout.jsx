import React from 'react'
import { NavLink } from 'react-router-dom'

function AppLayout() {
	return (
		<div>
			<h1>App Layout</h1>
			<NavLink to='/users'>Users List Page</NavLink>
		</div>
	)
}

export default AppLayout
