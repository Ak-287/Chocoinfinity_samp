import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Cartitem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://stephiecooks.com/wp-content/uploads/2013/05/IMG_4204.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Coconut Bounty Cake</p>
          <p className="opacity-70">Size:1Kg </p>
          <p className="opacity-70 mt-2">Name on cake: Happy New Year</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">$199</p>
            <p className="opacity-50 line-through">$211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
                <RemoveCircleOutlineIcon/>
            </IconButton>
            <span className="py-1 px-7 rounded-sm">3</span>
            <IconButton sx={{color:"rgb(145,85,253)"}}>
                <AddCircleOutlineIcon/>
            </IconButton>
        
          </div>
          <div>
            <Button sx={{color:"rgb(145,85,253)"}}>Remove</Button>
          </div>
        </div>
    </div>
  );
};

export default Cartitem;
