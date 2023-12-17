import React from 'react'
import Cartitem from './Cartitem';
import { Divider, Button } from '@mui/material';

const Cart = () => {
  return (
    <div>

        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
         <div className='col-span-2'>
        {[1,1,1,1].map((item)=> <Cartitem/>)}
        </div>   
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                <hr/>
                <div className='space-y-3 font-semibold mb-10'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>$199</span>

                    </div>
                    <div className='flex justify-between pt-3'>
                        <span>Discount</span>
                        <span className='text-green-600'>$19</span>

                    </div>
                    <div className='flex justify-between pt-3'>
                        <span>Delivery Charges</span>
                        <span className='text-green-600'>Free</span>

                    </div>
                    <div className='flex justify-between pt-3 font-bold'>
                        <span>Total Amount</span>
                        <span className='text-green-600'>$180</span>

                    </div>

                </div>
                <Button color ="secondary" variant="contained" className='w-full mt-5' sx={{px:"2.5rem",py:".7rem",bgcolor:"#69359c" }}>
                    Checkout
                </Button>
            </div>
        </div>
        </div>



        
    </div>
  )
}

export default Cart