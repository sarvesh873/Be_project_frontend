import React ,{ useEffect } from 'react'
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


  // for creating an object
  function createData(id, pCat) {
    return {
      id,
      pCat
    };
  }
  
  const FinanceOption = [
    createData(1, 'EQUITY'),
    createData(2, 'DEBT'),
    createData(3, 'HYBRID'),
  ];

  // ****************************************State for Option**********************************************
  const [Option, setSelectedOption] = React.useState([]);
  const [data,Setdata] =React.useState([]);
  const [Alldata,SetAlldata]=React.useState([]);
  
  useEffect(()=>{
    // console.log(Option);
  },[Option])
  
  

// ***************************FD Data***************************
const FD_API = 'https://web-production-98b9a.up.railway.app/api/all-fd-listing/';


const sendSelectedOptionsToAPI = async () => {
  try {
    const apiUrl = `${FD_API}`;
    // console.log(apiUrl);
    const response = await axios.get(apiUrl);
    Setdata(response.data);
    // console.log("state data",data);
    // console.log('API response:', response.data);
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
          All Fixed Deposit List
        </Typography>
      
        <Grid container spacing={1}>

          <Grid item xs={18} md={18}>

           <Fund data={data}/>
            
            
          </Grid>
      </Grid>
     </Container>
    </>
    
  )
}

export default MainFD
