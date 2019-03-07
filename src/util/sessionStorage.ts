export const authenticateSession: () => boolean = () => {
    return ( sessionStorage.getItem("username") !== null 
      && sessionStorage.getItem("refresh_token") !== null
      && sessionStorage.getItem("access_token") !== null
    )
}

export const createSession: (username: string, access_token: string, refresh_token: string) => void = ( username, access_token, refresh_token ) => {
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("access_token", access_token);
  sessionStorage.setItem("refresh_token", refresh_token);
}

export const clearLoginSession: () => boolean = () => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("refresh_token");
  sessionStorage.removeItem("username");
  return true
}

export const getUserNameSession: () => string = () => {
  return sessionStorage.getItem("username");
}

export const getAccessTokenSession: () => string = () => {
  return sessionStorage.getItem("access_token");
}

export const getRefreshTokenSession: () => string = () => {
  return sessionStorage.getItem("refresh_token");
}
