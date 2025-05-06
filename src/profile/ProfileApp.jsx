import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContex";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState("Eko");

  return (
    <>
      <ProfileContext.Provider value={name}>
        <h1>Profile Address</h1>
        <ProfileForm setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
