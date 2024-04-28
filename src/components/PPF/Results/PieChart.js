import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const size = {
  width: 600,
  height: 300,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();

  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const PChart = ({ data }) => {
  // Extract data from the response
  const {"Total Yearly Investment": totalyearly, "Total Investment": totalInvestment, "Total Interest": totalInterest, "Maturity Value": maturityValue } = data;

  // Calculate the total sum
  const totalSum = totalInvestment + totalInterest;

  // Calculate the percentage of each value
  const investmentPercentage = (totalInvestment / maturityValue) * 100;
  const interestPercentage = (totalInterest / maturityValue) * 100;

  // Prepare the data for the pie chart
  const chartData = [
    { value: investmentPercentage, label: 'Total Investment' },
    { value: interestPercentage, label: 'Total Interest' }
  ];

  return (
    <Container>
      <Paper elevation={4} style={{ padding: 10, marginTop: 30 }}>
        <Stack direction="row" spacing={3}>
          <Stack direction="Column" spacing={5} style={{ marginTop: 50, marginLeft: 30 }}>
          <Stack direction="row" spacing={8}>
              <Typography variant="body1" gutterBottom>
              Total Yearly Investment
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {totalyearly}
                  </Typography>
              </Stack>
            {/* Display additional information */}
            {/* Total Investment */}
            <Stack direction="row" spacing={8}>
              <Typography variant="body1" gutterBottom>
                Total Investment
              </Typography>
              <Typography variant="body1" gutterBottom>
                {totalInvestment}
              </Typography>
            </Stack>
            {/* Total Interest */}
            <Stack direction="row" spacing={9} style={{ marginTop: 7 }}>
              <Typography variant="body1" gutterBottom>
                Total Interest
              </Typography>
              <Typography variant="body1" gutterBottom>
                {totalInterest}
              </Typography>
            </Stack>
            {/* Maturity Year */}
            <Stack direction="row" spacing={8} style={{ marginTop: 7 }}>
              <Typography variant="body1" gutterBottom>
                Maturity Value
              </Typography>
              <Typography variant="body1" gutterBottom>
                {maturityValue}
              </Typography>
            </Stack>
          </Stack>
          {/* Render the pie chart */}
          <PieChart series={[{ data: chartData, innerRadius: 90 }]} {...size}>
            <PieCenterLabel>Center label</PieCenterLabel>
          </PieChart>
        </Stack>
      </Paper>
    </Container>
  );
};

export default PChart;
