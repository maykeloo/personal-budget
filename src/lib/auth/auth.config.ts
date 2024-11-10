import { Env } from "@/shared/types/env"
import Auth0 from "react-native-auth0"

const { AUTH0_DOMAIN, AUTH0_CLIENT_ID } = Env.variables()

export const auth0 = new Auth0({
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
})
