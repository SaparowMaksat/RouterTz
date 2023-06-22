const getUserById = (usersList, userId) => {
	return usersList.find(u => u.id.toString() === userId)
}
export default getUserById
