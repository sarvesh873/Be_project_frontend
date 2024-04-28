import React ,{ useEffect } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Comonents
import Fund from './Results/Fund';
import axios from "axios";

const MainNPS = () => {


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
  
  

// ***************************FD Data***************************
const NPS_API = 'https://web-production-98b9a.up.railway.app/api/nps/';


const sendSelectedOptionsToAPI = async () => {
  try {
    const apiUrl = `${NPS_API}`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    Setdata(response.data);
    console.log("state data",data);
    console.log('API response:', response.data);
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
      
        <Grid container spacing={1}>

          <Grid item xs={18} md={18}>

           <Fund data={data}/>
            
            
          </Grid>
      </Grid>
     </Container>
    </>
    
  )
}

export default MainNPS
