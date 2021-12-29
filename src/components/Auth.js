import React, { useRef, useState, useEffect } from "react";
import { signInUser } from "../auth/auth";
import { auth } from "../config/firebase";
import PresentBoxes from "./PresentBoxes";

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);
  // const [user, setUser] = useState();

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

        // setUser(realUser);
        console.log(realUser);
      })
      .catch((err) => {
        console.log(err.code);
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
        <PresentBoxes isAuth={isAuth} />
      ) : (
        <form className="auth-area" onSubmit={handleSubmitForm}>
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
