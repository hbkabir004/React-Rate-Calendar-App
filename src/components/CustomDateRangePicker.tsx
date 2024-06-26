import { Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

interface CustomDateRangePickerProps {
  value: [Dayjs | null, Dayjs | null];
  onChange: (newValue: [Dayjs | null, Dayjs | null]) => void;
}

export default function CustomDateRangePicker({
  value,
  onChange,
}: CustomDateRangePickerProps) {
  const handleStartDateChange = (date: Dayjs | null) => {
    onChange([date, value[1]]);
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    onChange([value[0], date]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
        <DatePicker
          label="Start Date"
          value={value[0]}
          onChange={handleStartDateChange}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <DatePicker
          label="End Date"
          value={value[1]}
          onChange={handleEndDateChange}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Box>
    </LocalizationProvider>
  );
}
