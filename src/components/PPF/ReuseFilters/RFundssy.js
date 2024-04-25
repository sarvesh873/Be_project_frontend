import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const RFundssy = ({ onSelectedFundChange }) => {
  
  const [selectedFund, setSelectedFund] = React.useState('');



  const handleFund = (event) => {
    const amount = event.target.value;
    setSelectedFund(amount);
    onSelectedFundChange(amount); // Notify parent of selected fund
  };

  return (
    <div style={{ marginTop: '20px' }}> 
      
      <Paper elevation={3}>
        <Stack direction='column'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              <Typography variant='subtitle2' component='h2'>
                Funds
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                <TextField
                  label='Enter fund amount (less than 1 crore)'
                  placeholder='more than 250'
                  variant='outlined'
                  value={selectedFund}
                  onChange={handleFund}
                />
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Paper>
    </div>
  );
};

export default RFundssy;
