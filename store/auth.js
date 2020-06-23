import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export const state = () => ({
  access_token: null,
  refresh_token: null
})

export const mutations = {
  setAccessToken(state, token) {
    state.access_token = token
  },
  setRefreshToken(state, token) {
    state.refresh_token = token
  },
  clearTokens(state) {
    state.access_token = null
    state.refresh_token = null
  }
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const { access, refresh } = await this.$axios.$post('/token/', formData)
      console.log('access', access)
      console.log('refresh', refresh)
      dispatch('setAccessToken', access)
      dispatch('setRefreshToken', refresh)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  setAccessToken({ commit }, token) {
    this.$axios.setToken(token, 'Bearer')
    commit('setAccessToken', token)
    Cookies.set('access_token', token)
  },
  setRefreshToken({ commit }, token) {
    commit('setRefreshToken', token)
    Cookies.set('refresh_token', token)
  },
  async refreshToken({ commit, dispatch }, token) {
    const jsonToken = {
      refresh: `${token}`
    }

    console.log('jsonToken', jsonToken)
    try {
      const { access } = await this.$axios.$post('/token/refresh/', jsonToken)
      console.log('accessNEW', access)
      dispatch('setAccessToken', access)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  logout({ commit }) {
    this.$axios.setToken(false)
    commit('clearTokens')
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
  },
  async register({ commit }, formData) {
    try {
      await this.$axios.$post('/doctor/registration/', formData)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },
  autoLogin({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const accessToken = cookies.access_token
    const refreshToken = cookies.refresh_token

    if (isJWTValid(accessToken)) {
      dispatch('setAccessToken', accessToken)
      dispatch('setRefreshToken', refreshToken)
    } else {
      dispatch('refreshToken', refreshToken)
    }
  }
}

export const getters = {
  isAuthenticated: (state) => !!state.access_token,
  token: (state) => state.access_token
}

function isJWTValid(token) {
  if (!token) {
    return false
  }

  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return new Date().getTime() / 1000 < expires
}
