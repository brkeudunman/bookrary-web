import { Button, Popover } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AltNavbar = () => {
  return (
    <div className="flex gap-3 bg-white border-b shadow-sm px-14 py-2">
      <Link to={"/genres"}>
        <Popover placement="bottom">
          <Button className="bg-gray-100 px-20 font-montserrat font-medium">
            Genres
          </Button>
        </Popover>
      </Link>
    </div>
  );
};

export default AltNavbar;
