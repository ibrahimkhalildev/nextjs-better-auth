import { createAuthClient } from 'better-auth/react'
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: 'http://localhost:3000'
})

export const { signIn, signUp, useSession } = createAuthClient()

/*
 *
 * Sing up: reginter : create account first time
 * sign in : Log in : already have account : repeated user
 *
 */
