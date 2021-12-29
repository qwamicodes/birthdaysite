import React, { useRef, useState } from "react";
import { signInUser } from "../auth/auth";

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();

  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInUser(email, pass)
      .then((user) => {
        setIsAuth(isAuth);

        const realUser = user.user;

        setUser(realUser);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };

  console.log(user);

  return (
    <div>
      {isAuth ? (
        <form>authenticated</form>
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
