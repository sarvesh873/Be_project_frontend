import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Comonents
import Fund from './Results/Fund';
import Filters from './Filters/Filters';
import { Button } from '@mui/material';



// Filter Component Imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import axios from "axios";



// Testing
import RFund from './ReuseFilters/RFund';

const MainFD = () => {


 

    // ****************************************State for Option**********************************************

    const [data, Setdata] = React.useState([]);
    const [Alldata, SetAlldata] = React.useState([]);

    useEffect(() => {
        // console.log(Option);
    }, [Option])

    const [selectedYears, setSelectedYears] = React.useState(null);
    useEffect(() => {
      sendSelectedOptionsToFD_API();
  }, []);

    const handleSelectedYears = (selectedYears) => {
        setSelectedYears(selectedYears);
        // console.log("Input selectedYears:", selectedYears);
    };
    
    useEffect(() => {
        handleSelectedYears();
    }, []);

    const sendSelectedOptionsToFD_API = async () => {
        try {
          const FD_API_Post = "http://127.0.0.1:8000/api/fixed_deposit-match/";
          const input_duration = selectedYears ; // Default to 3 years if selectedYears is null
          // Other parameters can be set similarly, assuming they are already defined
      
          // console.log("Input Duration:", selectedYears);
          // console.log("Other parameters...");
      
          const requestData = {
            input_duration,
            // Other parameters...
          };
      
          // Get the bearer token from local storage
          const authTokens = JSON.parse(localStorage.getItem('authTokens'));
          const accessToken = authTokens.access;
      
          const headers = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          };
      
          const response = await axios.post(FD_API_Post, requestData, { headers });
          // console.log('API response:', response.data);
          Setdata(response.data);
      
        } catch (error) {
          console.error('Error sending data to API:', error);
        }
      };
      

    





    return (

        <>
            <Container style={{ marginTop: 100 }}>
            <Typography variant="h4" gutterBottom align="center">
          Matching Fixed Deposit List
        </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={6} md={4}>
                    <Stack>
                                            <Stack direction="column">
                        <RFund
                            onSelectedYearsChange={handleSelectedYears}
                        />
                        <Button variant="contained" onClick={sendSelectedOptionsToFD_API}>Filter</Button>
                        </Stack>
                                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={8}>

                        <Fund data={data} />


                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default MainFD
