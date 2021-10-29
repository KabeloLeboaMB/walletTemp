import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


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

  const switchChain =async(v)=>{
    props.chainID(v);
    props.setClose(false);
  }

  return (
      <>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {props.data&&props.data.map((chainId,i) => (
        <li key={`section-${chainId.chain}`}>
          <ul>
              <ListItem key={`${chainId.name}`}>
              <ListSubheader>{` ${chainId.name}`}</ListSubheader>
                <ListItemText primary={`${chainId.network}`} />
                <ListItemText primary={`${chainId.chainId}`} />
              </ListItem>
              < Button onClick={() =>switchChain(chainId.chainId)}>Select Chain</Button>
          </ul>
        </li>
      ))}
    </List>
        </Box>
  
      </Modal>
      </>
 
  );
}
