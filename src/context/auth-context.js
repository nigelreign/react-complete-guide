// import React from 'react';

// const authContext = React.createContext({
//     authenticated: false,
//     login: () => {}
// });

// export default authContext;

// We can reference to this file if we need access to this context
// We need to wrap the tags wr we want to use authentication with <AuthContext.Provider></AuthContext.Provider>
// pass the value of the authentication as value={{}}

// This acts as a provider
/* import AuthContext from 'context/auth-context';
   
   <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
        Some code
   </AuthContext.Provider>
*/ 

// This acts as a consumer
/*
    <AuthContext.Consumer>
        {( context ) => <button onClick={context.login}>Login</button>}
    </AuthContext.Consumer>

*/
