import React from "react";
import { ComponentF } from "./ComponentF";
import { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

export const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      <div>Component E</div>
      User:
      <b>
        {user.title} {user.name}
      </b>
      | Channel: <b>{channel}</b>
      <ComponentF />
    </>
  );
};
