import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export const ModalPopup=(props)=>{

  const handleClose = () => {
    props.setClose(false);
  };

  return (
      <>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
            
            {
            props.data&&props.data.map((chain,i)=>{
                return (
                    <>
                       <CardContent>
     
      <Typography variant="h5" component="div">
        {chain.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {chain.chainId}
      </Typography>
      <Typography variant="body2">
        {chain.symbol}
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
                    </>
                )
            })
        }
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <Button onClick={()=>handleClose()}>Close Child Modal</Button>
        </Box>
  
      </Modal>
      </>
 
  );
}
