import React, { useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";

const PresentBox = ({ prize }) => {
  useEffect(() => {
    const auth = getAuth();

    updateProfile(auth.currentUser, { displayName: prize })
      .then()
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });

    console.log(auth.currentUser);
  }, [prize]);
  return <div className="presents__box--one">{prize}</div>;
};

export default PresentBox;
