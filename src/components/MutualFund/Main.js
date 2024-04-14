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

const Main = () => {


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
    console.log(Option);
  },[Option])
  
  
  
  
  const handleOption = (event, id, pCat) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedOption(prevSelected => [...prevSelected, { id, pCat }]);
      
    } else {
      setSelectedOption(prevSelected =>
        prevSelected.filter(item => item.id !== id)
      );
    }
    
  };


  const MF_API='https://web-production-98b9a.up.railway.app/api/all-mf-listing/';
  

  const getMfData = async(url)=>{
    
    try{

    const res= await axios.get(url);
    const data = await res.data;
    // console.log(data);
   
    } catch (error){
        console.log('Error in fetching data')
    }
};

// ***************************MF Data***************************



const sendSelectedOptionsToAPI = async () => {
  try {
    const Opt=Option[0].pCat;
    console.log(Opt);
    const apiUrl = `${MF_API}?pCat=${Opt}`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    Setdata(response.data);
    console.log("state data",data);
    console.log('API response:', response.data);
  } catch (error) {
    console.error('Error sending data to API:', error);
  }
};



useEffect(()=>{
  
const CollectAllData = async () => {
  try {
    const Opt=Option[0].pCat;
    console.log(Opt);
    const apiUrl = `${MF_API}?pCat=`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    SetAlldata(response.data);
    console.log("state data",data);
    console.log('API response:', response.data);
  } catch (error) {
    console.error('Error sending data to API:', error);
  }
};
},[])

useEffect(()=>{
  getMfData(MF_API);
},[]);


// ***************************FD Data***************************
const FD_API='https://web-production-98b9a.up.railway.app/api/all-fd-listing/';

const getFdDAta = async(url)=>{
  
  try{

  const res= await axios.get(url);
  const data = await res.data;
  // console.log(data);
 
  } catch (error){
      console.log('Error in fetching data')
  }
};

useEffect(()=>{
  getFdDAta(FD_API);
},[]);





  return (

    <>
      <Container style={{marginTop:100}}>
      
        <Grid container spacing={2}>
          
              <Grid item xs={6} md={4}>
                {/* <Filters/> */}
                
                <Paper elevation={3}>
                    <Stack direction='column'>
                    <Typography>
                          
                        </Typography>
                        <Accordion>
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
                {/* <RFund/> */}
          </Grid>
          
          
          <Grid item xs={6} md={8}>

          {/* {Option.length === 0 ? <Fund data={Alldata} /> : <Fund data={data} />} */}
          
           <Fund data={data}/>
            
            
          </Grid>
      </Grid>
     </Container>
    </>
    
  )
}

export default Main
