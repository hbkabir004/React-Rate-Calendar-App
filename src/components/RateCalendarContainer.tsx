import { Box, Container, Typography } from "@mui/material";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Moment } from "moment";
import { useState } from "react";
import CustomDateRangePicker from "./CustomDateRangePicker";

export default function RateCalendarContainer() {
  const [dateRange, setDateRange] = useState<DateRange<Moment>>([null, null]);

  return (
    <Container
      sx={{
        textAlign: "left",
        border: "1px solid lightgray",
        borderRadius: "10px",
        bgcolor: "whitesmoke",
        p: "30px 30px 0px 30px",
        mt: "30px",
      }}
      maxWidth="lg"
    >
      <Box>
        <Typography sx={{lineHeight: "1.2rem"}} variant="h4">Rate Calendar</Typography>
      </Box>

      <Box
        sx={{
          my: "40px",
        }}
      >
        <CustomDateRangePicker value={dateRange} onChange={setDateRange} />
      </Box>
    </Container>
  );
}
