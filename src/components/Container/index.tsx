import {ReactNode} from 'react';
import { Container } from "@mui/material";

const ContainerCard = ({children}:{children:ReactNode}) => {

  return (
    <Container maxWidth="xl" sx={{ display:'flex', justifyContent:'center' }}>
       {children}
    </Container>
  );
};

export default ContainerCard;