import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from 'react';

const Fundbg = ({ data }) => {

  console.log(data);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleClickNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  const fundpage = (etlink) => {
    // Construct the URL using etlink
    const url = etlink; // Adjust this according to your URL structure

    // Perform any action with the URL, such as redirecting to it
    window.open(url, '_blank');
  };

  const getCategoryColor = (category) => {
    const lowercaseCategory = category.toLowerCase();
    switch (lowercaseCategory) {
      case 'aggresive':
        return 'red';
      case 'moderate':
        return 'orange';
      case 'conservative':
        return 'green';
      default:
        return 'inherit'; // Use default color if category is not one of the specified values
    }
  };
  

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const renderData = () => {

    <Typography variant="h4" gutterBottom align="center">
      All Fixed Deposit List
    </Typography>
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return (
      <React.Fragment>
        
        {data.slice(startIndex, endIndex).map(item => (
          <React.Fragment key={item.id}>
              <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '10px' }}>
                <img src={item.logo_url} alt="" style={{ width: '50px', height: '50px', marginLeft: '10px' }} />
                <Stack spacing={1} direction="column" style={{ marginLeft: 40 }}>
                  <Typography variant="h6" display="block" gutterBottom>
                    {item.fund_name}
                  </Typography>
                  <Stack spacing={1} direction="row">
                  <Typography variant="overline" display="block" gutterBottom>
                    <Chip label={`Fund Size: ${item.fund_size}`} variant="outlined" />
                  </Typography>
                    </Stack>
                    <Stack spacing={8} direction='row'>
                        <Typography variant="overline" display="block" gutterBottom>
                        Category <span style={{ color: getCategoryColor(item.category) }}>{item.category}</span>
                        </Typography>

                            <Typography variant="overline" display="block" gutterBottom>
                            Interest Rate {item.interest_rate}
                            </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                              Investment : {item.monthly_investment_amount}
                            </Typography>
                        <Button
                          variant="outlined"
                          style={{ height: 30, marginRight: 30, color: '#6200EE', borderColor: '#6200EE' }}
                          onClick={() => fundpage(item.link)}
                        >
                          Invest
                        </Button>
                    </Stack>
                    

                  <hr
                    style={{
                      background: 'black',
                      color: 'black',
                      borderColor: 'black',
                      height: '1px',
                    }}
                  />
                  <Stack spacing={2} direction='row'>
                    <Typography variant="overline" display="block" gutterBottom>

                      {item.startinfo} 
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>

                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Number of Subscribers {item.no_of_subs} 
                    </Typography>
                    

                  </Stack>

                </Stack>
              </Paper>
            </React.Fragment>
            ))}
      </React.Fragment>
    );
  };

        return (
        <div>
          <Stack spacing={2}>

            {renderData()}
          </Stack>
          {/* <Button variant="contained" onClick={handleClickNext}>Next</Button> */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Stack spacing={2} direction='row' style={{ marginLeft: 280 }}>
              <Button variant="contained" disabled={currentPage === 1} onClick={handlePrevPage}>Previous</Button>
              <Button variant="contained" onClick={handleNextPage}>Next</Button>
            </Stack>

          </div>

        </div>
        )
}
export default Fundbg
