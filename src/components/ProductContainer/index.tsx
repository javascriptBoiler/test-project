import {ReactNode} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ProductCard = ({isWrap = false, children}: {isWrap: boolean, children: ReactNode}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={isWrap ? {
          flexWrap:'wrap'
        }: {
          flexWrap: 'nowrap',
          overflow: 'scroll'
        }}>
            {children}
        </Grid>
    </Box>
  );
};

export default ProductCard;