import { Avatar, Box, Grid, Rating } from '@mui/material';
import react from 'react';

const ProductReviewCard = () =>{
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width:56, height:56,bgcolor:"#9155fd"}}>
                            A
                        </Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-semibold text-lg'>Ajay</p>
                            <p className='opacity-70'>April 7, 2023</p>
                        </div>
                    </div>

                    <Rating value={4.5} name='half-rating' readOnly precision={.5}></Rating>
                    <p>Very delicious. Especilly the website is super. And i have 4 projects, they should sign those project. Speak of the devil</p>

                </Grid>    
            </Grid>
        </div>
    )
}

export default ProductReviewCard