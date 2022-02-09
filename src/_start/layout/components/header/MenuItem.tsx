import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import clsx from "clsx";
import { checkIsActive } from "../../../helpers";

type Props = {
  to: string;
  title: string;
};

const MenuItem: React.FC<Props> = ({ children, to, title }) => {
  const { pathname } = useLocation();
  return (
    <Link
      className={clsx("menu-link ps-0 py-2", {
        active: checkIsActive(pathname, to),
      })}
      to={to}
    >
      {title}
      {children}
    </Link>
  );
};

export { MenuItem };
