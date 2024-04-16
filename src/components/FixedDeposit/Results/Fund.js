import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from 'react';

const Fund = ({ data }) => {

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
        <Typography variant="h4" gutterBottom align="center">
          All Fixed Deposit List
        </Typography>
        {data.slice(startIndex, endIndex).map(item => (
          <React.Fragment key={item.id}>
              <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '10px' }}>
                <img src={item.logoUrl} alt="" style={{ width: '70px', height: '50px', marginLeft: '16px' }} />
                <Stack spacing={1} direction="column" style={{ marginLeft: 40 }}>
                  <Typography variant="h6" display="block" gutterBottom>
                    {item.partnerType}
                  </Typography>
                  <Stack spacing={1} direction="row">
                    <Typography variant="overline" display="block" gutterBottom>
                      <Chip label={item.institutionType} variant="outlined" />
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                      <Chip label={item.heading} variant="outlined" />
                    </Typography>
                  </Stack>
                  {/* Rest of your content */}
                  <Stack spacing={1} direction='row'>
                    <Typography display="block" style={{ marginLeft: 40, marginRight: 80 }} gutterBottom>
                      {item.description}
                    </Typography>


                    <Button variant="outlined" style={{ height: 30, marginRight: 30 , color: '#6200EE', borderColor: '#6200EE',}} onClick={() => fundpage(item.etlink)}>Invest</Button>

                  </Stack>
                  <hr
                    style={{
                      background: 'black',
                      color: 'black',
                      borderColor: 'black',
                      height: '1px',
                    }}
                  />
                  <Stack spacing={4} direction='row'>
                    <Typography variant="overline" display="block" gutterBottom>

                      {item.minimumDeposit} - {item.maximumDeposit} Deposit Range
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                      Intrest Rates {item.interestRatesRange}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                      Tenure {item.tenure}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>

                    </Typography>

                    <Typography variant="overline" style={{ marginLeft: 0 }}>
                      Senior Citizens {item.additionalInterestForSeniorCitizen}
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

        export default Fund
