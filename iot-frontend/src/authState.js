// src/authState.js
import { reactive } from 'vue'

export const authState = reactive({
    isLoggedIn: false,
    role: '',
    initialize() {
        const sessionId = localStorage.getItem('sessionId')
        if (sessionId) {
            this.isLoggedIn = true
            this.role = localStorage.getItem('role') || ''
        } else {
            this.isLoggedIn = false
            this.role = ''
        }
    },
    login(sessionId, role) {
        localStorage.setItem('sessionId', sessionId)
        localStorage.setItem('role', role)
        this.isLoggedIn = true
        this.role = role
    },
    logout() {
        localStorage.removeItem('sessionId')
        localStorage.removeItem('role')
        this.isLoggedIn = false
        this.role = ''
    }
})
