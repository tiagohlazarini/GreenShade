import React from "react";
import { useEffect, useState } from "react";

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Switch,
} from "@material-ui/core";
/* cores */
import { blueGrey, lime } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import Rotas from "./rotas";

function App() { 
  //const tipoPaleta = temaDark ? "dark" : "light";

  const [darkMode, setDarkmode] = useState(false);
  //consulte as paletas de cores em https://www.materialpalette.com
  // let theme = createMuiTheme({
  //   palette: {
  //     type: darkMode ? "dark" : "light",
  //     primary: {
  //       main: corPrimaria,
  //     },
  //     secondary: {
  //       main: corSecundaria,
  //     },
  //   },
  // });

  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: lime[500],
      },
      secondary: {
        main: blueGrey[500],
      },
    },
  });
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: lime[800],
      },
      secondary: {
        main: blueGrey[800],
      },
    },
  });

  const theme = responsiveFontSizes(darkMode ? darkTheme : lightTheme);

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Rotas />
      <Switch checked={darkMode} onChange={() => setDarkmode(!darkMode)} />
      Dark mode
    </MuiThemeProvider>
  );
}

export default App;
