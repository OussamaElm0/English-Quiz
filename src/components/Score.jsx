import React from 'react';
import { Fab } from "@mui/material";
import { MdRestartAlt } from "react-icons/md";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#EE9322",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default function ScoreComponent(props) {
    const { pourcentage, nbrQst, countScore, initTests } = props

    return (
      <div className="score-section">
        <p className={`score ${pourcentage < 50 ? "not-valide" : "valide"} s`}>
          Your score is: {countScore}/{nbrQst} ({pourcentage}%)
        </p>
        <div className="init-score score">
          <ThemeProvider theme={theme}>
            <Fab color='primary' aria-label="re-start" onClick={initTests}>
              <MdRestartAlt />
            </Fab>
          </ThemeProvider>
        </div>
      </div>
    );
}