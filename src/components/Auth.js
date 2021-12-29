import React, { useRef, useState, useEffect } from "react";
import { signInUser } from "../auth/auth";
import { auth } from "../config/firebase";
import PresentBox from "./PresentBox";
import PresentBoxes from "./PresentBoxes";

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInUser(email, pass)
      .then((user) => {
        setIsAuth(!isAuth);

        const realUser = {
          user: user.user.providerData[0],
          userId: user.user.uid,
        };

        // if (user.user.displayName) {
        //   auth.signOut();
        //   setIsAuth(false);
        // }

        setUser(realUser);
        console.log(realUser);
      })
      .catch((err) => {
        setError(err.code);

        setTimeout(() => {
          setError(undefined);
        }, 5000);
        console.log(err.message);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        return null;
      }
    });
  }, []);

  return (
    <div>
      {isAuth ? (
        user && user.user.displayName ? (
          <PresentBox prize={user.user.displayName} />
        ) : (
          <PresentBoxes isAuth={isAuth} />
        )
      ) : (
        <form className="auth-area" onSubmit={handleSubmitForm}>
          {error && (
            <span className="u-margin-auto u-flex-center">{error}</span>
          )}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please enter email collected by me...."
            className="input"
            ref={emailRef}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password is kwame29"
            className="input"
            ref={passRef}
          />
          <input
            type="submit"
            value="See what to get"
            className="input btn btn-cta"
          />
        </form>
      )}
    </div>
  );
};

export default Auth;
