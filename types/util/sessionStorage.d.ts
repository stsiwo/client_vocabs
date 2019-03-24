export declare const authenticateSession: () => boolean;
export declare const createSession: (username: string, access_token: string, refresh_token: string) => void;
export declare const clearLoginSession: () => boolean;
export declare const getUserNameSession: () => string;
export declare const getAccessTokenSession: () => string;
export declare const getRefreshTokenSession: () => string;
