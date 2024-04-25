import React, { useState } from "react";
import Button from '@mui/material/Button';
const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      Position: "1",
      "Company Name": "Acko General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "83.88",
      "Solvency Ratio": "4.26",
      "Network Hospitals": "14,300+",
      Link: "https://www.acko.com/",
    },
    {
      Position: "2",
      "Company Name": "Bajaj Allianz General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "74.27",
      "Solvency Ratio": "3.68",
      "Network Hospitals": "11,000+",
      Link: "https://www.bajajallianz.com/general-insurance.html",
    },
    {
      Position: "3",
      "Company Name": "Cholamandalam MS General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "67.88",
      "Solvency Ratio": "2.07",
      "Network Hospitals": "10,000+",
      Link: "https://www.insurancedekho.com/car-insurance/companies/cholamandalam",
    },
    {
      Position: "4",
      "Company Name": "Future Generali India Insurance Co. Ltd.",
      "Incurred Claim Ratio": "79.18",
      "Solvency Ratio": "1.86",
      "Network Hospitals": "8430+",
      Link: "https://general.futuregenerali.in/",
    },
    {
      Position: "5",
      "Company Name": "Go Digit General Insurance Ltd.",
      "Incurred Claim Ratio": "71.87",
      "Solvency Ratio": "1.96",
      "Network Hospitals": "16,400+",
      Link: "https://www.godigit.com/",
    },
    {
      Position: "6",
      "Company Name": "HDFC ERGO General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "79.04",
      "Solvency Ratio": "1.75",
      "Network Hospitals": "12,000+",
      Link: "https://www.hdfcergo.com/",
    },
    {
      Position: "7",
      "Company Name": "ICICI Lombard General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "77.33",
      "Solvency Ratio": "2.51",
      "Network Hospitals": "7,500+",
      Link: "https://www.icicilombard.com/",
    },
    {
      Position: "8",
      "Company Name": "IFFCO Tokio General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "111.18",
      "Solvency Ratio": "1.73",
      "Network Hospitals": "7,000+",
      Link: "https://www.insurancedekho.com/car-insurance/companies/iffco-tokio",
    },
    {
      Position: "9",
      "Company Name": "Kotak Mahindra General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "56.01",
      "Solvency Ratio": "2.95",
      "Network Hospitals": "7,700+",
      Link: "https://www.kotakgeneral.com/",
    },
    {
      Position: "10",
      "Company Name": "Liberty General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "74.17",
      "Solvency Ratio": "2.34",
      "Network Hospitals": "5,000+",
      Link: "https://www.libertyinsurance.in/",
    },
    {
      Position: "11",
      "Company Name": "Magma General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "72.10",
      "Solvency Ratio": "2.19",
      "Network Hospitals": "7.200+",
      Link: "https://www.magmahdi.com/",
    },
    {
      Position: "12",
      "Company Name": "Navi General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "59.28",
      "Solvency Ratio": "2.69",
      "Network Hospitals": "12,000+",
      Link: "https://navi.com/",
    },
    {
      Position: "13",
      "Company Name": "Raheja General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "138.67",
      "Solvency Ratio": "1.96",
      "Network Hospitals": "5,000+",
      Link: "https://www.rahejaqbe.com/",
    },
    {
      Position: "14",
      "Company Name": "Royal Sundaram General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "83.36",
      "Solvency Ratio": "2.17",
      "Network Hospitals": "10,000+",
      Link: "https://my.royalsundaram.in/",
    },
    {
      Position: "15",
      "Company Name": "SBI General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "73.92",
      "Solvency Ratio": "1.86",
      "Network Hospitals": "6,000+",
      Link: "https://www.sbigeneral.in/",
    },
    {
      Position: "16",
      "Company Name": "Tata General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "78.33",
      "Solvency Ratio": "1.97",
      "Network Hospitals": "10,000+",
      Link: "https://www.tataaig.com/",
    },
    {
      Position: "17",
      "Company Name": "Universal Sompo General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "82.84",
      "Solvency Ratio": "1.73",
      "Network Hospitals": "4,000+",
      Link: "https://www.universalsompo.com/",
    },
    {
      Position: "18",
      "Company Name": "Zuno General Insurance Co. Ltd.",
      "Incurred Claim Ratio": "89.59",
      "Solvency Ratio": "1.72",
      "Network Hospitals": "10,000+",
      Link: "https://www.hizuno.com/",
    },
    {
      Position: "19",
      "Company Name": "National Insurance Co. Ltd.",
      "Incurred Claim Ratio": "102.35",
      "Solvency Ratio": "0.16",
      "Network Hospitals": "3,000+",
      Link: "https://nationalinsurance.nic.co.in/",
    },
    {
      Position: "20",
      "Company Name": "The New India Assurance Co. Ltd.",
      "Incurred Claim Ratio": "103.33",
      "Solvency Ratio": "1.82",
      "Network Hospitals": "2055+",
      Link: "https://www.newindia.co.in/",
    },
    {
      Position: "21",
      "Company Name": "The Oriental Insurance Co. Ltd.",
      "Incurred Claim Ratio": "130.09",
      "Solvency Ratio": "-0.63",
      "Network Hospitals": "3,500+",
      Link: "https://orientalinsurance.org.in/",
    },
    {
      Position: "22",
      "Company Name": "United India Insurance Co. Ltd.",
      "Incurred Claim Ratio": "89.57",
      "Solvency Ratio": "0.15",
      "Network Hospitals": "6,500+",
      Link: "https://uiic.co.in/",
    },
    {
      Position: "23",
      "Company Name": "Aditya Birla Health Insurance Co. Ltd.",
      "Incurred Claim Ratio": "64.68",
      "Solvency Ratio": "2.37",
      "Network Hospitals": "11,000+",
      Link: "https://www.adityabirlacapital.com/",
    },
    {
      Position: "24",
      "Company Name": "Care Health Insurance Ltd.",
      "Incurred Claim Ratio": "53.82",
      "Solvency Ratio": "1.83",
      "Network Hospitals": "22,900+",
      Link: "https://www.careinsurance.com/",
    },
    {
      Position: "25",
      "Company Name": "ManipalCigna Health Insurance Co. Ltd.",
      "Incurred Claim Ratio": "64.66",
      "Solvency Ratio": "1.57",
      "Network Hospitals": "18,000+",
      Link: "https://www.manipalcigna.com/",
    },
    {
      Position: "26",
      "Company Name": "Niva Bupa Health Insurance Co. Ltd.",
      "Incurred Claim Ratio": "54.05",
      "Solvency Ratio": "1.79",
      "Network Hospitals": "10,000+",
      Link: "https://www.nivabupa.com/",
    },
    {
      Position: "27",
      "Company Name": "Reliance Health Insurance Ltd",
      "Incurred Claim Ratio": "86.31",
      "Solvency Ratio": "1.60",
      "Network Hospitals": "9,100+",
      Link: "https://www.reliancegeneral.co.in/",
    },
    {
      Position: "28",
      "Company Name": "Star Health and Allied Insurance Co. Ltd.",
      "Incurred Claim Ratio": "65.00",
      "Solvency Ratio": "2.03",
      "Network Hospitals": "14,000+",
      Link: "https://www.starhealth.in/",
    },
  ];

  const entriesPerPage = 10;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ textAlign: "center", margin: "2% auto" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "75%",
          margin: "0 auto",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                }}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((row, index) => (
            <tr key={index}>
              {Object.entries(row).map(([key, value], index) => (
                <td key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {key === 'Link' ? (
                    <Button variant="text" href={value} target="_blank" rel="noopener noreferrer" style={{
                      padding: "8px 16px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}>
                      Invest
                    </Button>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{
            marginRight: "500px",
            padding: "8px 16px",
            backgroundColor: "#7620ff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {"<< Previous"}
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastEntry >= data.length}
          style={{
            padding: "8px 16px",
            backgroundColor: "#7620ff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {"Next >>"}
        </button>
      </div>
    </div>
  );
};

export default Table;