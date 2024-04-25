import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

import PChart from './Results/PieChart.js';
import RFund from './ReuseFilters/RFund';

const MainPPF = () => {
  const [data, setData] = React.useState([]);
  const [selectedYears, setSelectedYears] = React.useState(null);
  const [selectedFund, setSelectedFund] = React.useState('');

  const handleSelectedYears = (selectedYears) => {
    setSelectedYears(selectedYears);
    console.log('Input selectedYears:', selectedYears);
  };

  const handleSelectedFund = (selectedFund) => {
    setSelectedFund(selectedFund);
    console.log('Selected Year:', selectedFund);
  };

  const sendSelectedOptionsToPPF_API = async () => {
    try {
      const PPF_API_Post = 'http://127.0.0.1:8000/api/ppf/';
      const total_duration = selectedYears; // Default to 3 years if selectedYears is null
      const total_investment = parseInt(selectedFund); // Other parameters can be set similarly, assuming they are already defined

      console.log('Input Duration:', selectedYears);

      console.log('Input Amount:', total_investment);

      const requestData = {
        total_investment,
        total_duration,
        // Other parameters...
      };

      // Get the bearer token from local storage
      const authTokens = JSON.parse(localStorage.getItem('authTokens'));
      const accessToken = authTokens.access;

      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.post(PPF_API_Post, requestData, { headers });
      console.log('API response:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  const handleReset = () => {
    setSelectedYears(null);
    setSelectedFund('');
  };

  useEffect(() => {
    sendSelectedOptionsToPPF_API();
  }, [selectedYears, selectedFund]);

  return (
    <>
      <Container style={{ marginTop: 100, marginBottom: 100 }}>
        <Typography variant="h4" gutterBottom align="center">
          PPF Analysis
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4}>
            <Stack>
              <Stack direction="column">
                <RFund onSelectedYearsChange={handleSelectedYears} onSelectedFundChange={handleSelectedFund} />
                
                <Button variant="contained" onClick={handleReset}>
                  Reset
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md={8}>
            <PChart data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainPPF;
