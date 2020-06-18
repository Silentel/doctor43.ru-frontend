export const state = () => ({
  user: null,
  notifications: 0
})

export const mutations = {
  setUser(state, user) {
    state.user = user
    localStorage.setItem('user', JSON.stringify(user))
  },
  clearUser(state) {
    state.user = null
    localStorage.removeItem('user')
  },
  setNotifications(state, notifications) {
    state.notifications = notifications
    localStorage.setItem('user', notifications)
  },
  clearNotifications(state) {
    state.notifications = 0
  }
}

export const actions = {
  login({ commit }) {
    try {
      // const users = await axios.get('http://localhost:3000/users')
      // const user = users.data.find((user) => user.login === email)

      // if (user) {
      //   if (user.password === password) {
      commit('setUser', {
        id: 'user'
        // role: user.role
      })
      //   } else {
      //     commit('setError', 'Неверный пароль')
      //   }
      // } else {
      //   commit('setError', 'Пользователь не найден')
      // }
    } catch (error) {
      commit('setError', error)
      throw error
    }
  },
  autoLogin({ dispatch }) {
    dispatch('login')
  },
  logout({ commit }) {
    commit('clearUser')
  }
}

export const getters = {
  user: (state) => state.user,
  notifications: (state) => state.notifications,
  isAuthenticated: (state) => !!state.user
}
