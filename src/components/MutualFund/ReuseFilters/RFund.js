import React,{useEffect} from 'react'
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


const RFund = () => {

    function createData(id, pCat) {
        return {
          id,
          pCat
        };
      }

      const Funds = [
        createData(1, '5000'),
        createData(2, '10000'),
        createData(3, '15000'),
      ];

      const Years = [
        createData(1, '1 Month'),
        createData(1, '3 Month'),
        createData(1, '6 Month'),
        createData(1, '1 Year'),
        createData(1, '3 Year'),
        
      ];


      // ****************************************State for Option**********************************************
  const [Year, setSelectedYear] = React.useState([]);
  
  useEffect(()=>{
    console.log(Year);
  },[Year])
  
  
  
  
  const handleYear = (event, id, pCat) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedYear(prevSelected => [...prevSelected, { id, pCat }]);
      
    } else {
      setSelectedYear(prevSelected =>
        prevSelected.filter(item => item.id !== id)
      );
    }
    
  };

  return (
    <div>
      <Paper elevation={3}>
        <Stack direction='column'>
                
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    <Typography variant="subtitle2" component="h2">Year</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <FormGroup>
                    <Stack>
                    
                        <Stack direction="column">
                        {
                        Years.map(item => (
                        
                        <FormControlLabel
                        control={
                            <Checkbox 
                            checked={Year.some(selected => selected.id === item.id)}
                            
                            onChange={(event) => handleYear(event, item.id, item.pCat)}/>
                        }
                        key={item.id}
                        label={item.pCat}
                        />
                        ))
                        }
                        {/* <button onClick={sendSelectedOptionsToAPI}>Filter</button> */}
                        </Stack>
                    

                    </Stack>
                    
                    </FormGroup>
                        
                    </AccordionDetails>
                </Accordion>
        </Stack>
      </Paper>
    </div>
  )
}

export default RFund
