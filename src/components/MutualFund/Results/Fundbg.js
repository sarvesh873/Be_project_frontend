import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

const Fundbg = ({data}) => {

    // console.log(data);


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
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map(item => (
      <React.Fragment key={item.id}>
        <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '10px' }}>
          <img src={item.logo} alt="" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <Stack spacing={1} direction="column" style={{ marginLeft: 70 }}>
            <Typography variant="h6" display="block" gutterBottom>
              {item.scheme_name}
            </Typography>
            <Stack spacing={1} direction="row">
              <Typography variant="overline" display="block" gutterBottom>
                <Chip label={item.pCat} variant="outlined" />
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                <Chip label={item.catDispName} variant="outlined" />
              </Typography>
            </Stack>
            {/* Rest of your content */}
            <Stack spacing={8} direction='row'>
                <Typography variant="overline" display="block" gutterBottom>
                    AUM {item.assetSizeFor}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                   Ratinng {item.consistencyRating} of 5
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  Risk   
                  {item.rskratpoint.includes('High') && (
                      <span style={{ color: 'red', fontSize: '1.0em' }}> High </span>
                  )}
                  {item.rskratpoint.includes('Medium') && (
                      <span style={{ color: 'orange', fontSize: '1.0em' }}> Medium </span>
                  )}
                  {item.rskratpoint.includes('Low') && (
                      <span style={{ color: 'green', fontSize: '1.0em' }}> Low </span>
                  )}

                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Return(p.a)   {item.returnpa}
                </Typography>
                
                <Button variant="outlined" style={{ height: 30, marginRight: 30 , color: '#6200EE', borderColor: '#6200EE',}} onClick={() => fundpage(item.sdWebUrl)}>Invest</Button>
                
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
                {/* <Typography variant="overline" display="block" gutterBottom>
                  (#{item.performanceRank}) of {item.performanceRank} in Multi Assets
                </Typography> */}
                <Typography variant="overline" display="block" gutterBottom>
                    Expense Ratio {item.expRat}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    Age {item.schemeAge}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    
                </Typography>
                
                <Checkbox style={{marginLeft:80}}/>
                <Typography variant="overline" style={{marginLeft:0}}>
                   Add to Compare
                </Typography>
                 
            </Stack>

          </Stack>
        </Paper>
      </React.Fragment>
    ));
  };

  return (
    <div>
       <Stack spacing={2}>

        {renderData()}
      </Stack>
      {/* <Button variant="contained" onClick={handleClickNext}>Next</Button> */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Stack spacing={2} direction='row' style={{marginLeft: 280}}>
            <Button variant="contained" disabled={currentPage === 1} onClick={handlePrevPage}>Previous</Button>
            <Button variant="contained" onClick={handleNextPage}>Next</Button>
        </Stack>
        
      </div>
    
    </div>
  )
}

export default Fundbg
