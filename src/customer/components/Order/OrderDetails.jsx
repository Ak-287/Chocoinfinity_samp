import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () =>{
    return (
        <div className="px:5 lg:px-20">
            <div>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
            <AddressCard />
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3}/>
            </div>
        <Grid className="space-y-5" container>
            {[1,1,1,1,1].map((item)=>
            <Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center", justifyContent:"sapce-between"}}>
            <Grid item xs={6}>
                <div className="flex item-center space-x-4">
                    <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://www.sweetestmenu.com/wp-content/uploads/2019/10/vanillacake17a.jpg" alt="" />
                    <div className="space-y-2 ml-5">
                        <p className="font-semibold">Vanilla Delight</p>
                        <p className="space-x-5 opacity-50 text-xs font-semibold ">
                            <span>
                            Flavour: Vanilla 
                            </span>
                            <span>
                            Quantity: 1kg
                            </span>
                        </p>
                        <p>$999</p>
                    </div>
                </div>

            </Grid>
            <Grid item>
                <Box sx={{color: deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2" />
                    <span>Rate & Review</span>
                </Box>
            </Grid>

        </Grid>)}
            
        </Grid>
        </div>
    )
}

export default OrderDetails