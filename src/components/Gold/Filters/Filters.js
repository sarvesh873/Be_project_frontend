import React, { useEffect } from 'react'
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



// Axios part
import axios from "axios";




const Filters = () => {


  const FinanceOption = [
    createData(1, 'EQUITY'),
    createData(2, 'DEBT'),
    createData(3, 'HYBRID'),
  ];
  
  // ****************************************State for Option**********************************************
  const [Option, setSelectedOption] = React.useState([]);
  
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

// const sendSelectedOptionsToAPI = async () => {
//   try {
//     const data=Option[0].pCat;
//     const response = await axios.get(MF_API, { selectedOptions: data });
//     console.log('API response:', response.data);
//   } catch (error) {
//     console.error('Error sending data to API:', error);
//   }
// };


const sendSelectedOptionsToAPI = async () => {
  try {
    const Opt=Option[0].pCat;
    console.log(Opt);
    const apiUrl = `${MF_API}?pCat=${Opt}`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    console.log('API response:', response.data);
  } catch (error) {
    console.error('Error sending data to API:', error);
  }
};


useEffect(()=>{
  getMfData(MF_API);
},[]);

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


// for creating an object
  function createData(id, pCat) {
    return {
      id,
      pCat
    };
  }
  

// Equity
  // const Equity = [
  //   createData(1, 'LARGE CAP'),
  //   createData(2, 'LARGE & MIDCAP'),
  //   createData(3, 'MULTI CAP'),
  //   createData(4, 'MID CAP'),
  //   createData(5, 'SMALL CAP'),
  //   createData(6, 'VALUE ORIENTED'),
  //   createData(7, 'ELSS'),
  //   createData(8, 'SECTORAL-INFRASTRUCTURE'),
  //   createData(9, 'SECTORAL-PHARMA'),
  //   createData(10, 'SECTORAL-TECHNOLOGY'),
  //   createData(11, 'THEMATIC'),
  //   createData(12, 'THEMATIC-DIVIDEND YIELD'),
  //   createData(13, 'THEMATIC-MNC')
  // ];



  // Debt
  // const Debt = [
  //   createData(1, 'LONG DURATION'),
  //   createData(2, 'MEDIUM TO LONG DURATION'),
  //   createData(3, 'MEDIUM DURATION'),
  //   createData(4, 'SHORT DURATION'),
  //   createData(5, 'LOW DURATION'),
  //   createData(6, 'ULTRA SHORT DURATION'),
  //   createData(7, 'LIQUID'),
  //   createData(8, 'MONEY MARKET'),
  //   createData(9, 'OVERNIGHT'),
  //   createData(10, 'DYNAMIC BOND'),
  //   createData(11, 'CORPORATE BOND')
  // ];
  
  // Hybrid
  // const Hybrid = [
  //   createData(1, 'AGGRESSIVE HYBRID'),
  //   createData(2, 'CONSERVATIVE HYBRID'),
  //   createData(3, 'EQUITY SAVINGS'),
  //   createData(4, 'ARBITRAGE'),
  //   createData(5, 'DYNAMIC ASSET ALLOCATION'),
  //   createData(6, 'MULTI ASSET ALLOCATION'),
  //   createData(7, 'HYBRID FOF'),
  //   createData(8, 'RETIREMENT SOLUTIONS')
  // ];
  

// FundSize

// const FundSize = [
//   createData(1, 'Below 100 crores'),
//   createData(2, '100 - 500 crores'),
//   createData(3, '500 - 1000 crores'),
//   createData(4, 'Above 1,000 crores')
// ];

// FundHouses
// const FundHouses = [
//   createData(1, 'Aditya Birla Sun Life Mutual Fund'),
//   createData(2, 'Axis Mutual Fund'),
//   createData(3, 'Bandhan Mutual Fund'),
//   createData(4, 'Bank of India Mutual Fund')
// ];






// ****************************************State for Equity**********************************************
// const [selectedEquity, setSelectedEquity] = React.useState([]);

// useEffect(()=>{
//   console.log(selectedEquity);
// },[selectedEquity])




// const handleEquity = (event, id, pCat) => {
//   const isChecked = event.target.checked;
//   if (isChecked) {
//     setSelectedEquity(prevSelected => [...prevSelected, { id, pCat }]);
//   } else {
//     setSelectedEquity(prevSelected =>
//       prevSelected.filter(item => item.id !== id)
//     );
//   }
  
// };


// ****************************************State for Debt**********************************************

// const [selectedDebt, setSelectedDebt] = React.useState([]);


// useEffect(()=>{
//   console.log(selectedDebt);
// },[selectedDebt])

// const handleDebt = (event, id, pCat) => {
//   const isChecked = event.target.checked;
//   if (isChecked) {
//     setSelectedDebt(prevSelected => [...prevSelected, { id, pCat }]);
//   } else {
//     setSelectedDebt(prevSelected =>
//       prevSelected.filter(item => item.id !== id)
//     );
//   }
  
// };


// ****************************************State for Hybrid**********************************************


// const [selectedHybrid, setSelectedHybrid] = React.useState([]);


// useEffect(()=>{
//   console.log(selectedHybrid);
// },[selectedHybrid])


// const handleHybrid = (event, id, pCat) => {
//   const isChecked = event.target.checked;
//   if (isChecked) {
//     setSelectedHybrid(prevSelected => [...prevSelected, { id, pCat }]);
//   } else {
//     setSelectedHybrid(prevSelected =>
//       prevSelected.filter(item => item.id !== id)
//     );
//   }
  
// };

// ****************************************State for FundSize**********************************************


// const [selectedFundSize, setSelectedFundSize] = React.useState([]);


// useEffect(()=>{

//   console.log(selectedFundSize);
// },[selectedFundSize]);


// const handleFundSize = (event, id, pCat) => {
//   const isChecked = event.target.checked;
//   if (isChecked) {
//     setSelectedFundSize(prevSelected => [...prevSelected, { id, pCat }]);
//   } else {
//     setSelectedFundSize(prevSelected =>
//       prevSelected.filter(item => item.id !== id)
//     );
//   }
  
// };


// ****************************************State for FundHouses**********************************************

// const [selectedFundHouses, setSelectedFundHouses] = React.useState([]);


// useEffect(()=>{
//   console.log(selectedFundHouses);
// },[selectedFundHouses]);


// const handleFundHouses = (event, id, pCat) => {
//   const isChecked = event.target.checked;
//   if (isChecked) {
//     setSelectedFundHouses(prevSelected => [...prevSelected, { id, pCat }]);
//   } else {
//     setSelectedFundHouses(prevSelected =>
//       prevSelected.filter(item => item.id !== id)
//     );
//   }
  
// };


  return (
    <div>
      <Paper elevation={3}>
      <Stack direction='column'>
      
      <Typography>
        Category
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="subtitle2" component="h2">Category</Typography>
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
             <button onClick={sendSelectedOptionsToAPI}>Filter</button>
            </Stack>
          

          </Stack>
          
        </FormGroup>
            
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="subtitle2" component="h2">Debt</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
          <Stack>
          
            <Stack direction="column">
            {
            Debt.map(item => (
              
              <FormControlLabel
              control={
                <Checkbox 
                checked={selectedDebt.some(selected => selected.id === item.id)}
                
                onChange={(event) => handleDebt(event, item.id, item.pCat)}/>
              }
              key={item.id}
              label={item.pCat}
            />
            ))
            }
            </Stack>
          

          </Stack>
          
        </FormGroup>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="subtitle2" component="h2">Hybrid</Typography>
        </AccordionSummary>
        <AccordionDetails>
          

        <FormGroup>
          <Stack>
          
            <Stack direction="column">
            {
            Hybrid.map(item => (
              
              <FormControlLabel
              control={
                <Checkbox 
                checked={selectedHybrid.some(selected => selected.id === item.id)}
                
                onChange={(event) => handleHybrid(event, item.id, item.pCat)}/>
              }
              key={item.id}
              label={item.pCat}
            />
            ))
            }
            </Stack>
          

          </Stack>
          
        </FormGroup>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >Fund Size (AUM)</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
          <Stack>
          
            <Stack direction="column">
            {
            FundSize.map(item => (
              
              <FormControlLabel
              control={
                <Checkbox 
                checked={selectedFundSize.some(selected => selected.id === item.id)}
                
                onChange={(event) => handleFundSize(event, item.id, item.pCat)}/>
              }
              key={item.id}
              label={item.pCat}
            />
            ))
            }
            </Stack>
          

          </Stack>
          
        </FormGroup>
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography >Fund Houses (AMCs)</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
          <Stack>
          
            <Stack direction="column">
            {
            FundHouses.map(item => (
              
              <FormControlLabel
              control={
                <Checkbox 
                checked={selectedFundHouses.some(selected => selected.id === item.id)}
                
                onChange={(event) => handleFundHouses(event, item.id, item.pCat)}/>
              }
              key={item.id}
              label={item.pCat}
            />
            ))
            }
            </Stack>
          

          </Stack>
          
        </FormGroup>
        </AccordionDetails>
      </Accordion>
       */}
        
      </Stack>
      </Paper>
      
      
    </div>
  )
}

export default Filters
