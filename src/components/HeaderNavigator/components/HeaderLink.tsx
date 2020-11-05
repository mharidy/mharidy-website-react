import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

type HeaderLinkProps = {
  text: string;
  style?: React.CSSProperties;
};

export const HeaderLink = ({ text, style }: HeaderLinkProps) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(!isHover);
  };

  const handleMouseLeave = () => {
    setIsHover(!isHover);
  };
  return (
    <Typography
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: isHover ? "red" : "blue", ...style }}
      variant="subtitle1"
      component="span"
    >
      {text}
    </Typography>
  );
};
