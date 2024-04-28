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

const RFund = ({ onSelectedYearsChange, onSelectedFundChange }) => {
  

  const [selectedYear, setSelectedYear] = React.useState(null);
  const [selectedFund, setSelectedFund] = React.useState('');

  const handleYear = (event) => {
    const year = parseInt(event.target.value);
    if (year > 14) {
      setSelectedYear(year);
      onSelectedYearsChange(year); // Notify parent of selected year
    }
  };

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
                Year
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <Stack>
                  <Stack direction='column'>
                    <TextField
                      label='Enter year (more than 14 years)'
                      variant='outlined'
                      type='number'
                      value={selectedYear}
                      onChange={handleYear}
                    />
                  </Stack>
                </Stack>
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Paper>

      <div style={{ marginBottom: '20px' }}></div>
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
                  placeholder='more than 500'
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

export default RFund;
