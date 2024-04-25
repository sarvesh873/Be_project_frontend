import React, { useState } from "react";
import Button from '@mui/material/Button';
const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
  {
    "S.No": 1,
    "Company": "Life Insurance Corporation of India",
    "Annual Premium for 2021-2022 (Rs. in crores)": 428024.97,
    "Claim Settlement Ratio 2021-2022": "98.74%",
    "Solvency Ratio": 1.79,
    "Link": "https://licindia.in/term-assurance-plans"
  },
  {
    "S.No": 2,
    "Company": "HDFC Life Insurance",
    "Annual Premium for 2021-2022 (Rs. in crores)": 45962.83,
    "Claim Settlement Ratio 2021-2022": "99.30%",
    "Solvency Ratio": 1.89,
    "Link": "https://onlineinsurance.hdfclife.com/buy-online-term-insurance-plans/click-2-protect-super/basic-details?agentcode=01464701&source=G_C2_C2S_Adwords_Search_Brand_NP_ExistingData_PU_RSA_Google_aud-2226548501473:kwd-112055212&utm_source=search&utm_medium=cpc&utm_campaign=iP_Brand_NP_Broad_ExistingData_Dec23&utm_term=Prospecting&utm_content=Perfm&utm_campaignid=20881242463&utm_adgroupid=159943531114&utm_theme=&utm_adgroup=NP_PU&prod=C2S&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT7-efYMZzafXL_hPF8mYHUtPdpUhsLtSA1aaPu8fhOpmA5-TRvUJ-QhoCzcgQAvD_BwE&gclsrc=aw.ds"
  },
  {
    "S.No": 3,
    "Company": "SBI Life Insurance",
    "Annual Premium for 2021-2022 (Rs. in crores)": 58759.64,
    "Claim Settlement Ratio 2021-2022": "97.05%",
    "Solvency Ratio": 2.1,
    "Link": "https://smartcare.sbilife.co.in/epolicy/eShieldNext_AB/UI/PersonalDetailsMinor.aspx?utm_content=ESGBREM1130&utm_source=google&utm_medium=search&utm_campaign=ES_SBI_Brand_Core_EM_Web_Rest_S&utm_adgroup=SBI_Core&utm_term=sbi%20life%20insurance&utm_network=g&utm_location=9300016&utm_device=c&utm_extension=&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT768-ZLgZAfz9qi_exJhk3GqdQCjbXd3vtaG5o4dWaBgassZCjoZ2JxoCHe4QAvD_BwE"
  },
  {
    "S.No": 4,
    "Company": "ICICI Prudential",
    "Annual Premium for 2021-2022 (Rs. in crores)": 37457.99,
    "Claim Settlement Ratio 2021-2022": "97.90%",
    "Solvency Ratio": 2,
    "Link":"https://www.iciciprulife.com/term-insurance-plans/iprotect-smart-term-insurance-calculator.html?UID=1254&utm_source=google&utm_medium=cpc&utm_content=IPS_Salaried_Tax_460&utm_campaign=IPRU-Search-Pure_Brand_Consideration-EM-RX-Desktop-1254&utm_source=google&utm_campaign={campaign}&utm_medium=cpc&utm_adgroup={adgroup}&utm_term=icici%20prudential%20life%20insurance&utm_device=c&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT7yZU37UITgtRzL0L7hWph-5OxHu9hn4Sxm1Wva_MWNuSfkyemVjISRoCJe0QAvD_BwE"
  },
  {
    "S.No": 5,
    "Company": "Max life",
    "Annual Premium for 2021-2022 (Rs. in crores)": 22414.17,
    "Claim Settlement Ratio 2021-2022": "99.51%",
    "Solvency Ratio": 2.04,
    "Link":"https://www.maxlifeinsurance.com/term-insurance-plans/premium-calculator?utmCode=1311271&utm_theme=Brand&utm_source=google&utm_medium=cpc&utm_campaign=1_Brand_Exact_CitiesNew&utm_term=max%20life&gclid=CjwKCAjwz42xBhB9EiwA48pT7x6wN74SaFrmccVsjKlFwX3uwrsDCWIgVOAxbVEahGGBRfBYUtvtJxoCZ6sQAvD_BwE"
  },
  {
    "S.No": 6,
    "Company": "Bajaj Allianz",
    "Annual Premium for 2021-2022 (Rs. in crores)": 16127.05,
    "Claim Settlement Ratio 2021-2022": "99.04%",
    "Solvency Ratio": 6.14,
    "Link":"https://www.bajajallianzlife.com/campaign/2-crore-etouch-term-plan.html?utm_source=google&utm_medium=Google_Search-Brand&utm_campaign=BALIC_Sok_Search_Pure_Brand&adgroupid=159036470133&utm_content=691699887290&utm_term=bajaj%20allianz&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT73O8nxCBUQkBce_9rJbPjQds4RGzq4NtqP8LEkneTyE3-VMRAIBA9hoCzocQAvD_BwE"
  },
  {
    "S.No": 7,
    "Company": "Kotak Mahindra",
    "Annual Premium for 2021-2022 (Rs. in crores)": 13015.11,
    "Claim Settlement Ratio 2021-2022": "98.82%",
    "Solvency Ratio": 2.64,
    "Link":"https://www.kotaklife.com/buy-online-term-insurance/?utm_source=search_brand&utm_medium=cpc&utm_campaign=Kotak-Life-Term-Search-Brand-Product-Exact-May-23&utm_ad_group=Kotak-Mahindra-Insurance&utm_keyword=kotak%20mahindra%20term%20insurance&utm_content=rsa_kwd-301641607802&campaign_id=20058880541&pl=&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT74wFs25CshyzzQy4FERtvkEYHI4NxN-FUUhuGJRyzfPDzfYmjoQchhoCtIMQAvD_BwE&gclsrc=aw.ds"
  },
  {
    "S.No": 8,
    "Company": "Aditya Birla Sunlife",
    "Annual Premium for 2021-2022 (Rs. in crores)": 12140.23,
    "Claim Settlement Ratio 2021-2022": "98.07%",
    "Solvency Ratio": 1.88,
    "Link":"https://www.adityabirlacapital.com/campaign/aip?&utm_source=google_search&utm_medium=cpc&utm_campaign=abcd_li_microsite_asp_aip_search_brand_generic_exact_mar24&utm_adgroup=brand&utm_term=aditya%20birla%20sun%20life%20insurance&utm_content=text_ads_rsa1&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT73udsLFzDdf03h3APSLRKwrSWMq3YxgPfu-zrzBN72MJsK3f5NFdexoCZ80QAvD_BwE"
  },
  {
    "S.No": 9,
    "Company": "Tata AIA",
    "Annual Premium for 2021-2022 (Rs. in crores)": 14445.03,
    "Claim Settlement Ratio 2021-2022": "99.01%",
    "Solvency Ratio": 1.89,
    "Link":"https://www.tataaia.com/campaign/TATA-AIA-Life-Insurance-Term-Plan-Calculator-Sampoorn-Raksha-Supreme.html?utm_code=NLAKWBGSRS167&camcode=1135&utm_content=B+G&cid=google-search:cpc:ls_search_term_srs_bplusg:brand+term:tata_aia_term_insurance:1135&ccflow=DSF&utm_source=google-search&utm_medium=cpc&utm_campaign=LS_Search_Term_SRS_BplusG&utm_adgroup=Brand+Term&utm_term=tata%20aia%20term%20insurance&utm_network=g&utm_matchtype=p&utm_device=c&utm_placement=&utm_Adposition=&utm_location=9300016&utm_Sitelink=&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT74njflEF6PwLhktl_fCUvh_vSUBIdl0xddpwm8MQTPkanL7q4djlBxoCY2oQAvD_BwE"
  },
  {
    "S.No": 10,
    "Company": "India First",
    "Annual Premium for 2021-2022 (Rs. in crores)": 5186.56,
    "Claim Settlement Ratio 2021-2022": "96.92%",
    "Solvency Ratio": 1.65,
    "Link":"https://www.indiafirstlife.com/cmgt/life_term_plan.html?utm_source=Search_Brand&utm_campaign=TermPlan_Sep20&lead_source=Search_Brand&utm_content=Brand_Exact_Term2&utm_term=india%20first%20term%20life%20insurance&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT79g2Uyypo8cu12-sokXO1QMMO0ehb5lvyt2N9tRwIfnh5zPOSKegexoC3nAQAvD_BwE"
  },
  {
    "S.No": 11,
    "Company": "PNB Met life",
    "Annual Premium for 2021-2022 (Rs. in crores)": 7348.26,
    "Claim Settlement Ratio 2021-2022": "97.33%",
    "Solvency Ratio": 1.87,
    "Link":"https://www.pnbmetlife.com/"
  },
  {
    "S.No": 12,
    "Company": "Canara HSBC OBC",
    "Annual Premium for 2021-2022 (Rs. in crores)": 5889.92,
    "Claim Settlement Ratio 2021-2022": "98.44%",
    "Solvency Ratio": 2.79,
    "Link":"https://www.canarahsbclife.com/online-iselect-smart360-term-plan?utm_source=google&utm_medium=cpc&utm_campaign=Term_Search_Brand_Phrase&utm_content=canara%20hsbc%20obc%20life%20insurance&utm_cohort=google_brand_iselect360&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT7w7dWaTSmJcLGeTlu1JXRyjn4w3bjOr9cY8vAm11SfX20g_B28vKhBoCMHQQAvD_BwE"
  },
  {
    "S.No": 13,
    "Company": "Reliance Nippon",
    "Annual Premium for 2021-2022 (Rs. in crores)": 5036.57,
    "Claim Settlement Ratio 2021-2022": "98.67%",
    "Solvency Ratio": 2.33,
    "Link":"https://www.reliancenipponlife.com/protection-plans"
  },
  {
    "S.No": 14,
    "Company": "Exide life",
    "Annual Premium for 2021-2022 (Rs. in crores)": 3767.96,
    "Claim Settlement Ratio 2021-2022": "99.09%",
    "Solvency Ratio": 2.11,
    "Link":"https://www.eindiainsurance.com/exide-life/term-life/smart-term-plus.asp"
  },
  {
    "S.No": 15,
    "Company": "Bharti AXA",
    "Annual Premium for 2021-2022 (Rs. in crores)": 2601.56,
    "Claim Settlement Ratio 2021-2022": "99.09%",
    "Solvency Ratio": 1.72,
    "Link":"https://www.bhartiaxa.com/term-insurance"
  },
  {
    "S.No": 16,
    "Company": "Star Union",
    "Annual Premium for 2021-2022 (Rs. in crores)": 1926,
    "Claim Settlement Ratio 2021-2022": "95.96%",
    "Solvency Ratio": 2,
    "Link":"https://www.sudlife.in/term-plans"
  },
  {
    "S.No": 17,
    "Company": "Future Generali",
    "Annual Premium for 2021-2022 (Rs. in crores)": 1433.54,
    "Claim Settlement Ratio 2021-2022": "96.15%",
    "Solvency Ratio": 1.67,
    "Link":"https://general.futuregenerali.in/buyonline/car-insurance?utm_source=Google&utm_medium=cpc&utm_campaign=Sok_FG_Leads_Search_Brand_Motor_06052022&utm_term=future%20generali%20india%20insurance&utm_content=SuperBrandSearchMotor&gclid=CjwKCAjwz42xBhB9EiwA48pT73PfhyXoD2xAfogfqU62PGdiCZ5E1LrAvah3_OWEs8q9xot3wUotzxoCtwIQAvD_BwE"
  },
  {
    "S.No": 18,
    "Company": "Shriram",
    "Annual Premium for 2021-2022 (Rs. in crores)": 2349.6,
    "Claim Settlement Ratio 2021-2022": "82.39%",
    "Solvency Ratio": 2.15,
    "Link":"https://www.shriramlife.com/life-insurance/online-term-plan"
  },
  {
    "S.No": 19,
    "Company": "Ageas Federal Life",
    "Annual Premium for 2021-2022 (Rs. in crores)": 2207,
    "Claim Settlement Ratio 2021-2022": "98.65%",
    "Solvency Ratio": 2.15,
    "Link":"https://www.ageasfederal.com/"
  },
  {
    "S.No": 20,
    "Company": "Pramerica life",
    "Annual Premium for 2021-2022 (Rs. in crores)": 1098.78,
    "Claim Settlement Ratio 2021-2022": "98.3%",
    "Solvency Ratio": 3.99,
    "Link":"https://pramericalife.in/index"
  },
  {
    "S.No": 21,
    "Company": "Aviva",
    "Annual Premium for 2021-2022 (Rs. in crores)": 1268.15,
    "Claim Settlement Ratio 2021-2022": "98.39%",
    "Solvency Ratio": 2.14,
    "Link":"https://www.avivaindia.com/aviva-signature-3d-term-plan/?utm_source=Google&utm_medium=CPL&utm_campaign=+Zenith_3D_Plan_P1&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT71W3Naf09xv7UIvfYA4FLno52wj5Owvz8rTH3S_odcaL1u21I7t5CRoCmmwQAvD_BwE&gclsrc=aw.ds"
  },
  {
    "S.No": 22,
    "Company": "Aegon",
    "Annual Premium for 2021-2022 (Rs. in crores)": 416.46,
    "Claim Settlement Ratio 2021-2022": "99.03%",
    "Solvency Ratio": 2.97,
    "Link":"https://www.bandhanlife.com/"
  },
  {
    "S.No": 23,
    "Company": "Sahara",
    "Annual Premium for 2021-2022 (Rs. in crores)": 61.44,
    "Claim Settlement Ratio 2021-2022": "97.08%",
    "Solvency Ratio": 8.77,
    "Link":"https://www.sahara.in/lifeinsurance.html"
  },
  {
    "S.No": 24,
    "Company": "Edelweiss Tokio",
    "Annual Premium for 2021-2022 (Rs. in crores)": 1464.2,
    "Claim Settlement Ratio 2021-2022": "98.09%",
    "Solvency Ratio": 1.97,
    "Link":"https://www.edelweisstokio.in/term-life-insurance-calculator?cp_id=744&v_id=68&c_id=112&utm_source=Search&utm_term=Edelweiss%20tokio%20term%20insurance&utm_creative=Responsive_Search_Ads&utm_campaign=TPP_Brand_Product_Zindagi_Protect_Exact&utm_device=c&utm_content=Search&utm_adgroup=Edelweiss_Tokio_Term_Insurance&utm_placement=&utm_medium=Google&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT7_8M3qbMcGQDMtp4WSQr4nfDHpBLbJvgF5FpMBobP9NQ6qBWohPztRoCww0QAvD_BwE"
  }
]
;

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