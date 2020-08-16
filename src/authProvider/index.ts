import { Auth } from 'aws-amplify';

const AuthProvider = {
    login: (params: any) => Promise.resolve(), // Never called
    logout: (params: any) => {
        Auth.signOut();
        return Promise.resolve();
    },
    checkAuth: (params: any) => Auth.currentAuthenticatedUser(),
    checkError: (error: any) => Promise.resolve(), // Never called
    getPermissions: (params: any) => Promise.resolve(), // Never called
};

export default AuthProvider;