import React ,{ useEffect } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Comonents
import Fundbg from './Results/Fundbg';
import axios from "axios";

// Filter Component Imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
const MainNPSbg = () => {
  const navigate = useNavigate();
  useEffect(() => {
      const isLoggedIn = localStorage.getItem('authTokens');
      const hasCreatedProfile = localStorage.getItem('profileUpdated');
  
      if (!isLoggedIn) {
        navigate('/login');
        swal.fire({
          title: "Login First",
          icon: "warning",
          toast: true,
          timer: 6000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false,
      })
      } else if (!hasCreatedProfile) {
        navigate('/profile');
        swal.fire({
          title: "Please create your Profile",
          icon: "warning",
          toast: true,
          timer: 6000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false,
      })
      }
    }, []);

  // for creating an object
  function createData(id, pCat) {
    return {
      id,
      pCat
    };
  }
  
  const FinanceOption = [
    createData(1, 'AGGRESIVE'),
    createData(2, 'MODERATE'),
    createData(3, 'CONSERVATIVE'),
  ];

  // ****************************************State for Option**********************************************
  const [Option, setSelectedOption] = React.useState([]);
  const [data,Setdata] =React.useState([]);
  const [Alldata,SetAlldata]=React.useState([]);
  
  useEffect(()=>{
    console.log(Option);
  },[Option])
  
  const handleOption = (event, id, pCat) => {
    const isChecked = event.target.checked;
  let updatedOptions = [];
  if (isChecked) {
    updatedOptions = [{ id, pCat }];
  }
  setSelectedOption(updatedOptions);
    
  };


  const sendSelectedOptionsToAPI = async () => {
    try {
      const NPS_API_Post = "https://web-production-98b9a.up.railway.app/api/nps-match/";
      const inputCat = Option[0].pCat.toLowerCase();
  
      const requestData = {
        category: inputCat
      };
      console.log("Input Category:", inputCat);
  
      // Get the bearer token from local storage
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      const accessToken = authTokens.access;
      console.log(accessToken);
  
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      };
  
      const response = await axios.post(NPS_API_Post, requestData, { headers });
      console.log('API response:', response.data);
      Setdata(response.data);
  
      // Handle response data as needed
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };
  


useEffect(() => {
  sendSelectedOptionsToAPI();
}, []);





  return (

    <>
      <Container style={{marginTop:100}}>
      <Typography variant="h4" gutterBottom align="center">
           NPS List
        </Typography>
      <Grid container spacing={2}>
          
          <Grid item xs={6} md={4}>
            {/* <Filters/> */}
            
            <Paper elevation={3}>
                <Stack direction='column'>
                <Typography>
                      
                    </Typography>
                    <Accordion defaultExpanded>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography variant="h6" component="h1">Category</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      <FormGroup>
                        <Stack>
                        
                          <Stack direction="column">
                          {
                          FinanceOption.map(item => (
                            
                            <FormControlLabel
                            control={
                              <Checkbox 
                              checked={Option.some(selected => selected.id === item.id)}
                              
                              onChange={(event) => handleOption(event, item.id, item.pCat)}/>
                            }
                            key={item.id}
                            label={item.pCat}
                          />
                          ))
                          }
                          {/* <button onClick={sendSelectedOptionsToAPI}>Filter</button> */}
                          <Button variant="contained" onClick={sendSelectedOptionsToAPI}>Filter </Button>
                          
                          </Stack>
                        

                        </Stack>
                        
                      </FormGroup>
                          
                      </AccordionDetails>
                    </Accordion>
                    
                </Stack>
            </Paper>
      </Grid>

      <Grid item xs={6} md={8}>

           <Fundbg data={data}/>
            
            
          </Grid>
      </Grid>
     </Container>
    </>
    
  )
}

export default MainNPSbg
