import React from "react";
import { ChannelContext, UserContext } from "../../App";

function ComponentF() {
  return (
    <div>
      <div>Component F</div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    <div>User context value {user}</div>
                    <div>Channel context value {channel}</div>
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
