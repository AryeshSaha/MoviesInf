import React, { useState, useEffect } from "react";
import "./BTT.css";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import Tooltip from "@mui/material/Tooltip";

export const BTT = () => {
  const [visible, setVisible] = useState(false);
  const gtt = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listen_ = () => {
    let height = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll)
    if (winScroll > height) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listen_);
    return () => window.addEventListener("scroll", listen_);
  }, []);

  return(
    <div>
        {
          visible && (
            <Tooltip title="To Top" placement="top">
              <button className="btn bt" onClick={gtt}>
                <PanToolAltIcon fontSize="" />
              </button>
            </Tooltip>
        )}
    </div>
  )
};