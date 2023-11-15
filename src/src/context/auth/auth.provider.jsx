import { useReducer } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./auth.context";
import { authReducer } from "./auth.reducer";

const GLOBAL_INITIAL_STATE = {
  user: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, GLOBAL_INITIAL_STATE);

  const setUser = (user) => {
    dispatch({
      type: "[AUTH] - SetUser",
      payload: user,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
