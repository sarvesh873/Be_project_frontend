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

const MainGold = () => {


  // for creating an object
  function createData(id, pCat) {
    return {
      id,
      pCat
    };
  }
  


  // ****************************************State for Option**********************************************
  const [Option, setSelectedOption] = React.useState([]);
  const [data,Setdata] =React.useState([]);
  const [Alldata,SetAlldata]=React.useState([]);

  

  const MF_API='http://127.0.0.1:8000/api/all-mf-listing/';


// Collect All Data Without Filters

const CollectAllData = async () => {
  try {
    const pCat = "COMMODITIES";
    const apiUrl = `${MF_API}?pCat=${pCat}`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    SetAlldata(response.data);
    console.log("Without Filter Data",Alldata);
    console.log('API response:', response.data);
  } catch (error) {
    console.error('Error sending data to API:', error);
  }
};

useEffect(()=>{
  CollectAllData();
},[])


  return (

    <>
      <Container style={{marginTop:100}}>
        <Typography variant="h4" gutterBottom align="center">
          All Gold Investment List
        </Typography>
      
        <Grid container spacing={1}>
          
          <Grid item xs={10} md={12}>

          {Option.length === 0 ? <Fund data={Alldata} /> : <Fund data={data} />}
          
           {/* <Fund data={data}/> */}
            
            
          </Grid>
      </Grid>
     </Container>
    </>
    
  )
}

export default MainGold