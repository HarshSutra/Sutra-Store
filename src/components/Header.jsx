import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
        <div className="container">
          <div className="flex item-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-[500]">
                Get upto 50% off new season styles, Limited Time Only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="help-center"
                    className="text-[14px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="order-tracking"
                    className="text-[14px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3">
        <div className="container flex items-center justify-between">
            <div className="col1 w-[30%]">
                <Link to={"/"}><img className=" w-[40%] h-[20%]" src={assets.logo}/></Link>
            </div>

            <div className="col2 w-[45%]">

            </div>
            <div className="col3 w-[30%]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
