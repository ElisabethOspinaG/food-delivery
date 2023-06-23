import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { auth } from "../../Firebase/firebaseConfig";
  import { userTypes } from "../types/userTypes";
  
  export const registerAccionAsync = ({ name, email, password, city, address, avatar }) => {
    return async (dispatch) => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            dispatch(RegisterActionSync({ name, email, password, city, address, avatar }, null));
        } catch (error) {
            console.log(error);
            dispatch(RegisterActionSync({ }, {code: error.code, message: error.message}));
        }
    }
  };
  
  const RegisterActionSync = (newUser, error) => {
    return {
      type: userTypes.CREATE_USER,
      payload: {
        user: newUser,
        error: error,
      }
    }
  }
  













  export const actionLoginAsync = ({ email, password }) => {
    return (dispatch) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          const { displayName, accessToken, photoURL, phoneNumber } =
            user.auth.currentUser;
          dispatch(
            actionLoginSync({
              email,
              name: displayName,
              accessToken,
              photoURL,
              phoneNumber,
              error: false,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          dispatch(actionLoginSync({ email, error: true, errorMessage }));
        });
    };
  };
  
  const actionLoginSync = (user) => {
    return {
      type: userTypes.USER_LOGIN,
      payload: {
        ...user,
      },
    };
  };
  
  export const actionLogoutAsync = () => {
    return (dispatch) => {
      signOut(auth)
        .then(() => {
          dispatch(actionLogoutSync());
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  const actionLogoutSync = () => {
    return {
      type: userTypes.USER_LOGOUT,
    };
  };
  
  export const actionLoginGoogleOrFacebook = (provider) => {
    return (dispatch) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const { displayName, accessToken, photoURL, phoneNumber, email } =
            result.user;
          console.log(result.user);
          dispatch(
            actionLoginSync({
              email,
              name: displayName,
              accessToken,
              photoURL,
              phoneNumber,
              error: false,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          console.log(error);
          console.log(errorCode);
          console.log(errorMessage);
          dispatch(actionLoginSync({ email, error: true, errorMessage }));
        });
    };
  };
  
