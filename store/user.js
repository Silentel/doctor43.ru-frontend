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
  async getMe({ commit }) {
    try {
      const { result } = await this.$axios.$post('/doctor/', {
        jsonrpc: '2.0',
        method: 'get_me'
      })

      commit('setUser', result)

      console.log(result)

      return result
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  async updateInfo({ commit }, formData) {
    try {
      const { result } = await this.$axios.$post('/doctor/', formData)

      return result
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  autoLogin({ dispatch }) {
    dispatch('getMe')
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
