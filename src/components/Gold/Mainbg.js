import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Comonents
import Fund from './Results/Fund';
import Fundbg from './Results/Fundbg';
import Filters from './Filters/Filters';
import { Button } from '@mui/material';

import Swal from 'sweetalert2';

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

const Mainbg = () => {




    const riskOptions = [
        { id: 1, risk: 'High' },
        { id: 2, risk: 'Medium' },
        { id: 3, risk: 'Low' },
    ];

    // ****************************************State for Option**********************************************
    const [data, Setdata] = React.useState([]);
    const [Alldata, SetAlldata] = React.useState([]);


    useEffect(() => {
        console.log(Option);
    }, [Option])

    const [selectedRisk, setSelectedRisk] = React.useState([]);
    const [selectedYears, setSelectedYears] = React.useState(null);
    const [selectedFund, setSelectedFund] = React.useState('');
    

    const handleSelectedYears = (selectedYears) => {
        setSelectedYears(selectedYears);
        
    };
    
    const handleSelectedFund = (selectedFund) => {
        setSelectedFund(selectedFund);
        console.log('Selected Year:', selectedFund);
    };

    const handleRiskChange = (event, id, risk) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedRisk(prevSelected => [...prevSelected, { id, risk }]);
        } else {
            setSelectedRisk(prevSelected => prevSelected.filter(item => item.id !== id));
        }
    };




    const MF_API = 'https://web-production-98b9a.up.railway.app/api/all-mf-listing/';


    // ***************************Filter MF Data***************************


    const sendSelectedOptionsToAPI = async () => {
        try {
          const MF_API_Post = "https://web-production-98b9a.up.railway.app/api/mutual-funds-match/";
          const input_duration = selectedYears; // Assuming Year contains the selected duration
          const input_amt = parseInt(selectedFund); // Assuming Fund contains the selected fund amount
          const input_risk = selectedRisk[0].risk; // Assuming selectedRisk contains the selected risk options
          const input_cat = "COMMODITIES";
          
          console.log("Input Duration:", input_duration);
          console.log("Input Amount:", input_amt);
          console.log("Input Risk:", input_risk);
          console.log("Input Category:", input_cat);

          const requestData = {
            input_duration,
            input_amt,
            input_risk,
            input_cat
          };
      
          // Get the bearer token from local storage
          const authTokens = JSON.parse(localStorage.getItem('authTokens'));
          const accessToken = authTokens.access;
      
          const headers = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          };
      
          const response = await axios.post(MF_API_Post, requestData, { headers });
          console.log('API response:', response.data);
          if (response.data.length === 0) {
            Swal.fire({
                title: "Goal Incompetent!",
            text: "Change your Goal Duration or Amount or Risk",
            icon: "error",
                toast: true,
                timer: 10000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
            });
        } else {
            Setdata(response.data);
        }
          
          // Handle response data as needed
          
        } catch (error) {
          console.error('Error sending data to API:', error);
        }
      };




    return (

        <>
            <Container style={{ marginTop: 100 }}>
            <Typography variant="h4" gutterBottom align="center">
                Matching Gold investments List
                </Typography>

                <Grid container spacing={3}>

                    <Grid item xs={6} md={4}>
                        {/* <Filters/> */}

                        <Paper elevation={3}>
                            <Stack direction='column'>
                                <Typography></Typography>
                                <Accordion defaultExpanded>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography variant="h6" component="h1">Risk</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack>
                                            <Stack direction="column">
                                                {riskOptions.map(item => (
                                                    <FormControlLabel
                                                        control={<Checkbox checked={selectedRisk.some(selected => selected.id === item.id)} onChange={(event) => handleRiskChange(event, item.id, item.risk)} />}
                                                        key={item.id}
                                                        label={item.risk}
                                                    />
                                                ))}
                                                <Button variant="contained" onClick={sendSelectedOptionsToAPI}>Filter</Button>
                                            </Stack>
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                            </Stack>
                        </Paper>
                        <RFund
                            onSelectedYearsChange={handleSelectedYears}
                            onSelectedFundChange={handleSelectedFund}
                        />
                    </Grid>



                    <Grid item xs={6} md={8}>
                         <Fundbg data={data} />

                        {/* <Fund data={data}/> */}


                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Mainbg