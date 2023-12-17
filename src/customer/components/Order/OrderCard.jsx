import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    return (
        <div className="p-5 shadow-md shadow-black hover:shadow-2xl">
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://www.sweetestmenu.com/wp-content/uploads/2019/10/vanillacake17a.jpg" alt="" />
                        <div className="ml-5 space-y-2">
                            <p className="">Vanilla Delicious Cake</p>
                            <p className="opacity-50 text-xs font-semibold">Quantity 1kg</p>
                            <p className="opacity-50 text-xs font-semibold">Flavour Vanilla</p>
                        </div>
                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p>$999</p>
                </Grid>

                <Grid item xs={4}>
                    {true && 
                    <div>
                        <p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                        <span>
                            Delivered on March 12
                        </span>
                    </p>
                    <p className="text-xs">
                        Your order has been delivered
                    </p>
                    </div>}
                    { false && <p>
                        <span>
                            Expected Delivered on March 12
                        </span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard