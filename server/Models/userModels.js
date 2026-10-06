export function createUserModel(user) {
    const newUser = {
        ...user,
        createdAt: new Date().toISOString()
    }

    return newUser
}

export function returnUserWhithoutPass(user) {
    const newUser = {
        _id: user._id.toString(),
        email: user.email,
        role: user.role,
        username: user.username,
        assignedArena: user.assignedArena,
        createdAt: new Date(user.createdAt).toLocaleString()

    }
    return newUser
}