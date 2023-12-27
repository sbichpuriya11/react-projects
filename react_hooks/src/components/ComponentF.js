import React from "react";
import { UserContext, ChannelContext } from "../App";

export const ComponentF = () => {
  return (
    <div>
      Component F
      <UserContext.Consumer>
        {(user) => (
          <div>
            {
              <ChannelContext>
                {(channel) => (
                  <div>
                    Channel Context value: <b>{channel}</b>
                  </div>
                )}
              </ChannelContext>
            }
            User Context value:{" "}
            <b>
              {user.title} {user.name}
            </b>
          </div>
        )}
      </UserContext.Consumer>
    </div>
  );
};
