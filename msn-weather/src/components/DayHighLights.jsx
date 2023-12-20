import React from "react";
import "./DayHighLights.css";
function DayHighLights({ data }) {
  // console.log(data);
  return (
    <div className="container-fluid px-5 text-left day__details">
      <h5>Day Details</h5>
      <span className="span-col">
        <div className="col col-border-topped">
          <h5>Day</h5>
          <p className="description">
            There will be mostly {data.weather.description.toLowerCase()}. The
            high will be {Math.round(data.max_temp)} &deg;
          </p>
          <h5 className="mt-4">Night</h5>
          <p className="description">
            The skies will be {data.weather.description.toLowerCase()}. The low
            will be {Math.round(data.min_temp)} &deg;
          </p>
        </div>
        <div className="col col-border-topped">
          <h5>Sunrise</h5>
          <p className="day__timings">
            {" "}
            <i className="fal fa-sun custom-sun-icon-up"></i>{" "}
            {new Date(data.sunrise_ts * 1000).toLocaleTimeString("en-US", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
          <h5>Sunset</h5>
          <p className="day__timings">
            {" "}
            <i className="fal fa-sun custom-sun-icon-down"></i>{" "}
            {new Date(data.sunset_ts * 1000).toLocaleTimeString("en-US", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="col col-border-topped">
          <h5>Moonrise</h5>
          <p className="day__timings">
            {" "}
            <i className="fal fa-moon custom-moon-icon-up"></i>{" "}
            {new Date(data.moonrise_ts * 1000).toLocaleTimeString("en-US", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
          <h5>Moonset</h5>
          <p className="day__timings">
            {" "}
            <i className="fal fa-moon custom-moon-icon-down"></i>{" "}
            {new Date(data.moonset_ts * 1000).toLocaleTimeString("en-US", {
              hour12: true,
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
          <h5>Moon Phase</h5>
          <p className="day__timings">
            {/* <i className="fad fa-spinner-third"></i> */}
          </p>
        </div>
        <div className="col col-border-topped">
          <div className="flex-widget">
            <span>
              <h5>Precipitation</h5>
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: " 100px",
                }}
              >
                <svg
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <circle
                    cx="45"
                    cy="45"
                    r="40"
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "transparent",
                      strokeWidth: "6",
                      stroke: "rgba(255, 255, 255, 0.4)",
                      transform: "translate(5px, 5px)",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                      strokeDashoffset: 0,
                      stroke: "rgba(255, 255, 255, 0.4)",
                    }}
                  ></circle>
                  <circle
                    cx="45"
                    cy="45"
                    r="40"
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "transparent",
                      strokeWidth: "6",
                      stroke: "rgba(255, 255, 255, 0.4)",
                      transform: "translate(5px, 5px)",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                      strokeDashoffset: `calc(290 - (250 * ${data.precip}) / 100)`,
                      stroke: "rgba(0, 191, 255, 0.6)",
                    }}
                  ></circle>
                </svg>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    textAlign: "center",
                    fontSize: "14px !important",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                    position: "absolute",
                  }}
                >
                  <div>
                    {Math.round(data.precip)}{" "}
                    <span style={{ fontSize: "13px" }}>%</span>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <h5>Humidity</h5>
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: " 100px",
                }}
              >
                <svg
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <circle
                    cx="45"
                    cy="45"
                    r="40"
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "transparent",
                      strokeWidth: "6",
                      stroke: "rgba(255, 255, 255, 0.4)",
                      transform: "translate(5px, 5px)",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                      strokeDashoffset: 0,
                      stroke: "rgba(255, 255, 255, 0.4)",
                    }}
                  ></circle>
                  <circle
                    cx="45"
                    cy="45"
                    r="40"
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "transparent",
                      strokeWidth: "6",
                      stroke: "rgba(255, 255, 255, 0.4)",
                      transform: "translate(5px, 5px)",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                      strokeDashoffset: `calc(290 - (250 * ${data.rh}) / 100)`,
                      stroke: "rgba(0, 191, 255, 0.6)",
                    }}
                  ></circle>
                </svg>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    textAlign: "center",
                    fontSize: "14px !important",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                    position: "absolute",
                  }}
                >
                  <div>
                    {data.rh} <span style={{ fontSize: "13px" }}>%</span>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="flex-widget">
            <span>
              <h5>UV Index</h5>
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: " 100px",
                }}
              >
                <svg
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <circle
                    cx="45"
                    cy="45"
                    r="40"
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "transparent",
                      strokeWidth: "6",
                      stroke: "rgba(255, 255, 255, 0.4)",
                      transform: "translate(5px, 5px)",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                      strokeDashoffset: 0,
                      stroke: "rgba(255, 255, 255, 0.4)",
                    }}
                  ></circle>
                  <circle
                    cx="45"
                    cy="45"
                    r="40"
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "transparent",
                      strokeWidth: "6",
                      stroke: "rgba(255, 255, 255, 0.4)",
                      transform: "translate(5px, 5px)",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                      strokeDashoffset: `calc(290 - (250 * ${data.uv}))`,
                      stroke: "rgba(0, 191, 255, 0.6)",
                    }}
                  ></circle>
                </svg>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    textAlign: "center",
                    fontSize: "14px !important",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                    position: "absolute",
                  }}
                >
                  <div>
                    {data.uv * 10} <br />
                    <span style={{ fontSize: "13px" }}>
                      {data.uv <= 2 && data.uv >= 0
                        ? "Low"
                        : data.uv <= 5 && data.uv >= 3
                        ? "Moderate"
                        : data.uv <= 7 && data.uv >= 6
                        ? "High"
                        : data.uv <= 10 && data.uv >= 8
                        ? "Very High"
                        : "Extreme"}
                    </span>
                  </div>
                </div>
              </div>
            </span>

            <span>
              <h5>Max Wind</h5>
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: " 100px",
                }}
              >
                <svg
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <circle
                    cx="45"
                    cy="45"
                    r="40"
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "transparent",
                      strokeWidth: "6",
                      stroke: "rgba(255, 255, 255, 0.4)",
                      transform: "translate(5px, 5px)",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                      strokeDashoffset: 0,
                      stroke: "rgba(255, 255, 255, 0.4)",
                    }}
                  ></circle>
                  <circle
                    cx="45"
                    cy="45"
                    r="40"
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "transparent",
                      strokeWidth: "6",
                      stroke: "rgba(255, 255, 255, 0.4)",
                      transform: "translate(5px, 5px)",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                      strokeDashoffset: `calc(290 - (250 * ${data.wind_spd}*3.6) / 100)`,
                      stroke: "rgba(0, 191, 255, 0.6)",
                    }}
                  ></circle>
                </svg>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    textAlign: "center",
                    fontSize: "14px !important",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "rgba(255, 255, 255, 0.7)",
                    position: "absolute",
                  }}
                >
                  <div>
                    {Math.round(data.wind_spd * 3.6)} <br />
                    <span style={{ fontSize: "13px" }}>Km/h</span>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </span>
      <span className="span-col">
        <div className="col col-border-topped"></div>
      </span>
    </div>
  );
}

export default DayHighLights;
