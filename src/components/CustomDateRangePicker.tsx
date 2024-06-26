import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Moment } from "moment";

interface CustomDateRangePickerProps {
  value: DateRange<Moment>;
  onChange: (newValue: DateRange<Moment>) => void;
}

export default function CustomDateRangePicker({
  value,
  onChange,
}: CustomDateRangePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box sx={{ mt: 2 }}>
        <DateRangePicker
          value={value}
          onChange={(newValue) => onChange(newValue as DateRange<Moment>)}
          localeText={{ start: "Start Date", end: "End Date" }}
        />
      </Box>
    </LocalizationProvider>
  );
}