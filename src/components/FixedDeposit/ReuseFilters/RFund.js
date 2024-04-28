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
    createData(1, '1 yrs'), 
    createData(2, '2 yrs'), 
    createData(3, '3 yrs'), 
    createData(4, '4 yrs'), 
    createData(5, '5 yrs'), 
    createData(6, '6 yrs'), 
    createData(7, '7 yrs'), 
    createData(8, '8 yrs'), 
    createData(9, '9 yrs'), 
    createData(10, '10 yrs')
  ];

  const [selectedYear, setSelectedYear] = React.useState(null);

  const handleYear = (value) => {
    setSelectedYear(prevYear => (prevYear === value ? null : value));
    onSelectedYearsChange(value); // Notify parent of selected year
  };

  const isYearSelected = (value) => {
    return selectedYear === value;
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

    </div>
  );
};

export default RFund;
