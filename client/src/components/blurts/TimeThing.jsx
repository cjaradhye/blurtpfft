import React, { useState, useEffect } from "react";

const characterImages = {
  Bhumika: [0, 5, 11, 14, 19],
  Harshit: [0, 6, 10, 13, 19],
  Kunal: [2, 7, 10, 13, 19],
  Ruhi: [2, 8, 14, 19, 23],
};

const getLatestImage = (time, images) => {
  const validTimes = images.filter((t) => t <= time);
  const latestTime = validTimes.length ? Math.max(...validTimes) : images[0];
  return `${latestTime}.png`;
};

const CharacterDashboard = (props) => {
  const currentTime = new Date().getHours();

  return (
    <div className="blurt-dashboard" style={{ display : props.logoClick ? "none" : "flex" }}>
      <div className="people">
        <div
          className="dashbox kunalbox"
          style={{ backgroundImage: `url(/mainpage/kunal/${getLatestImage(currentTime, characterImages.Kunal)})` }}
        ></div>
        <div
          className="dashbox bhumikabox"
          style={{ backgroundImage: `url(/mainpage/bhumika/${getLatestImage(currentTime, characterImages.Bhumika)})` }}
        ></div>
      </div>
      <div className="people">
        <div
          className="dashbox ruhibox"
          style={{ backgroundImage: `url(/mainpage/ruhi/${getLatestImage(currentTime, characterImages.Ruhi)})` }}
        ></div>
        <div
          className="dashbox harshitbox"
          style={{ backgroundImage: `url(/mainpage/harshit/${getLatestImage(currentTime, characterImages.Harshit)})` }}
        ></div>
      </div>
    </div>
  );
};

export default CharacterDashboard;
