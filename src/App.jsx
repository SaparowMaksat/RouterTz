import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import UsersListPage from './page/usersListPage'
import AppLayout from './page/appLayout'
import MainPage from './page/mainPage'
import UserPage from './page/userPage'
import EditUserPage from './page/editUserPage'

const usersList = [
	{ id: 1, name: 'User' },
	{ id: 2, name: 'User' },
	{ id: 3, name: 'User' },
	{ id: 4, name: 'User' },
	{ id: 5, name: 'User' },
]

function App() {
	return (
		<div className='App'>
			<AppLayout />
			<Switch>
				<Route path='/' exact component={MainPage} />
				<Route
					path='/users/:userId/edit'
					render={props => <EditUserPage usersList={usersList} {...props} />}
				/>
				<Route
					path='/users/:userId'
					render={props => <UserPage usersList={usersList} {...props} />}
				/>
				<Route
					path='/users'
					render={props => <UsersListPage usersList={usersList} {...props} />}
				/>
				<Redirect from='*' to='/' />
			</Switch>
		</div>
	)
}

export default App
