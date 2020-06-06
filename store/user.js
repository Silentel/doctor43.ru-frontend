export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
    localStorage.setItem('user', JSON.stringify(user))
  },
  clearUser(state) {
    state.user = null
    localStorage.removeItem('user')
  }
}

export const actions = {
  login({ commit }, { email, password }) {
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
  autoLogin({ commit }, user) {
    commit('setUser', {
      id: 'user'
      // role: user.role
    })
  },
  logout({ commit }) {
    commit('clearUser')
  }
}

export const getters = {
  user: (state) => state.user,
  isAuthenticated: (state) => !!state.user
}
