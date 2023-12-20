import React from "react";
import ComponentF from "./ComponentF";
import { useContext } from "react";
import { ChannelContext, UserContext } from "../../App";
function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <ComponentF />
      {user} {channel}
    </div>
  );
}

export default ComponentE;
