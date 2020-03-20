import React from 'react';
import './App.css';
import 'typeface-roboto';
import CssBaseline from "@material-ui/core/CssBaseline";
import Table from "./components/types/Table";
import Container from "@material-ui/core/Container";

function App() {
  return (
      <React.Fragment>
        <CssBaseline />
          <Container>
              <Table prefix="XXX"/>
          </Container>
      </React.Fragment>
  );
}

export default App;
