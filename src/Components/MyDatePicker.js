import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

export const MyDatePicker = ({value,onChange,name}) => {
  const newTheme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: "#E6DCC8",
            borderRadius: "0.5rem",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E6DCC8",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E6DCC8",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E6DCC8",
            },
            input: {
                padding: "10px",
              },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#E6DCC8",
          },
        },
      },
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={newTheme}>
        <DatePicker value={value ? dayjs(value) : null}
          onChange={(newValue) => onChange({ target: { name, value: newValue } })} className="w-full"/>
      </ThemeProvider>
    </LocalizationProvider>
  );
};
