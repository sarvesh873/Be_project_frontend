import React from "react";
import styled from "styled-components";

// Styled components
const Wrapper = styled.section`
  margin-top: 2%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 15px;
  text-align: left;
  color: #333;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  color: #666;
`;

const LinkCell = styled.td`
  padding: 15px;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;

// MutualFunds component
export default function MutualFunds() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <HeaderInfo>
            <Title>Mutual Funds</Title>
            <Description>
              Explore various mutual fund schemes to help achieve your financial goals.
            </Description>
          </HeaderInfo>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Title</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Applicability</TableHeader>
                  <TableHeader>Learn More</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {/* Example rows */}
                <TableRow>
                  <TableCell>Mutual Fund Title 1</TableCell>
                  <TableCell>Description of Mutual Fund 1</TableCell>
                  <TableCell>Applicability info</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mutual Fund Title 2</TableCell>
                  <TableCell>Description of Mutual Fund 2</TableCell>
                  <TableCell>Applicability info</TableCell>
                  <LinkCell>
                    <a href="#">Read Article</a>
                  </LinkCell>
                </TableRow>
                {/* Add more rows as needed */}
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </Container>
    </Wrapper>
  );
}