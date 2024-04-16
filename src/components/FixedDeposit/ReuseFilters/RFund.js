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
  function createData(id, pCat) {
    return {
      id,
      pCat,
    };
  }

  const Years = [
    createData(1, '1 Month'),
    createData(2, '3 Month'),
    createData(3, '6 Month'), 
    createData(4, '1 Year'),
    createData(5, '3 Year'),
  ];

  const [selectedYear, setSelectedYear] = React.useState(null);
  const [selectedFund, setSelectedFund] = React.useState('');

  const handleYear = (value) => {
    setSelectedYear(prevYear => (prevYear === value ? null : value));
    onSelectedYearsChange(value); // Notify parent of selected year
  };

  const isYearSelected = (value) => {
    return selectedYear === value;
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
                    {Years.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={isYearSelected(item.pCat)}
                            onChange={() => handleYear(item.pCat)}
                          />
                        }
                        key={item.id}
                        label={item.pCat}
                      />
                    ))}
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
