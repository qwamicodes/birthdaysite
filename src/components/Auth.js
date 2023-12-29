import React, { useRef, useState, useEffect } from "react";
import { signInUser } from "../auth/auth";
import { auth } from "../config/firebase";

import PresentBox from "./PresentBox";
import PresentBoxes from "./PresentBoxes";

const Auth = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInUser(email, pass)
      .then(({ user }) => {
        setIsAuth(!isAuth);

        const realUser = {
          user: user.providerData[0],
          userId: user.uid,
        };

        if (user.displayName) {
          auth.signOut();
          return setIsAuth(false);
        }

        setUser(realUser);
      })
      .catch((err) => {
        setError(err.code);

        setTimeout(() => {
          setError(undefined);
        }, 5000);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) return null;
    });
  }, []);

  return (
    <div className="auth-container">
      {isAuth ? (
        user?.displayName ? (
          <PresentBox prize={user.displayName} />
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
