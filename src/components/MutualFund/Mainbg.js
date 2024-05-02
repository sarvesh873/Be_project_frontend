import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from "axios";
import RFund from './ReuseFilters/RFund';
import Fund from './Results/Fund';
import Fundbg from './Results/Fundbg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('authTokens');
        const hasCreatedProfile = localStorage.getItem('profileUpdated');
    
        if (!isLoggedIn) {
          navigate('/login');
          swal.fire({
            title: "Login First",
            icon: "warning",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
        } else if (!hasCreatedProfile) {
          navigate('/profile');
          swal.fire({
            title: "Please create your Profile",
            icon: "warning",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
        }
      }, []);
    const [Option, setSelectedOption] = useState(null);
    const [data, setData] = useState([]);
    const [Alldata, setAlldata] = useState([]);
    const [selectedRisk, setSelectedRisk] = useState(null);
    const [selectedYears, setSelectedYears] = useState(null);
    const [selectedFund, setSelectedFund] = useState('');

    const FinanceOption = [
        { id: 1, pCat: 'EQUITY' },
        { id: 2, pCat: 'DEBT' },
        { id: 3, pCat: 'HYBRID' },
    ];

    const riskOptions = [
        { id: 1, risk: 'High' },
        { id: 2, risk: 'Medium' },
        { id: 3, risk: 'Low' },
    ];

    const handleSelectedYears = (selectedYears) => {
        setSelectedYears(selectedYears);
    };

    const handleSelectedFund = (selectedFund) => {
        setSelectedFund(selectedFund);
    };

    const handleRiskChange = (event, id, risk) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedRisk({ id, risk });
        } else {
            setSelectedRisk(null);
        }
    };

    const handleOption = (event, id, pCat) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedOption({ id, pCat });
        } else {
            setSelectedOption(null);
        }
    };

    const sendSelectedOptionsToAPI = async () => {
        try {
            const MF_API_Post = "https://web-production-98b9a.up.railway.app/api/mutual-funds-match/";
            const input_duration = selectedYears; // Assuming Year contains the selected duration
            const input_amt = parseInt(selectedFund); // Assuming Fund contains the selected fund amount
            const input_risk = selectedRisk?.risk; // Assuming selectedRisk contains the selected risk options
            const input_cat = Option?.pCat;

            const requestData = {
                input_duration,
                input_amt,
                input_risk,
                input_cat
            };

            const authTokens = JSON.parse(localStorage.getItem('authTokens'));
            const accessToken = authTokens.access;

            const headers = {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            };

            const response = await axios.post(MF_API_Post, requestData, { headers });
            setData(response.data);
        } catch (error) {
            console.error('Error sending data to API:', error);
        }
    };

    const CollectAllData = async () => {
        try {
            const apiUrl = "https://web-production-98b9a.up.railway.app/api/all-mf-listing/?pCat=";
            const response = await axios.get(apiUrl);
            setAlldata(response.data);
        } catch (error) {
            console.error('Error sending data to API:', error);
        }
    };

    useEffect(() => {
        CollectAllData();
    }, []);

    return (
        <Container style={{ marginTop: 100 }}>
            <Typography variant="h4" gutterBottom align="center">
                Matching Mutual Funds List
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6} md={4}>
                    <Paper elevation={3} style={{ marginBottom: '20px' }}>
                        <Stack direction='column'>
                            <Typography></Typography>
                            <Accordion defaultExpanded>
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
                                                {FinanceOption.map(item => (
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={Option?.id === item.id}
                                                                onChange={(event) => handleOption(event, item.id, item.pCat)}
                                                            />
                                                        }
                                                        key={item.id}
                                                        label={item.pCat}
                                                    />
                                                ))}
                                            </Stack>
                                        </Stack>
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>
                    </Paper>
                    <Paper elevation={3}>
                        <Stack direction='column'>
                            <Typography></Typography>
                            <Accordion defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography variant="h6" component="h1">Risk</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack>
                                        <Stack direction="column">
                                            {riskOptions.map(item => (
                                                <FormControlLabel
                                                    control={<Checkbox checked={selectedRisk?.id === item.id} onChange={(event) => handleRiskChange(event, item.id, item.risk)} />}
                                                    key={item.id}
                                                    label={item.risk}
                                                />
                                            ))}
                                        </Stack>
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>
                    </Paper>
                    <RFund
                        onSelectedYearsChange={handleSelectedYears}
                        onSelectedFundChange={handleSelectedFund}
                    />
                    <Button variant="contained" onClick={sendSelectedOptionsToAPI}>Filter</Button>
                </Grid>
                <Grid item xs={6} md={8}>
                    {Option === null && selectedRisk === null ? <Fund data={Alldata} /> : <Fundbg data={data} />}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main;
