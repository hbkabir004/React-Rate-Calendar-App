import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { Dayjs } from 'dayjs';
import { useState } from "react";
import { useRateCalendar } from "../hooks/useRateCalendar";
import { IRoomCategory, UseRateCalendarResult } from "../model/types";
import CustomDateRangePicker from "./CustomDateRangePicker";
import RoomCategory from "./RoomCategory";

export default function RateCalendarContainer() {
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);

  const startDate = dateRange[0]?.format("YYYY-MM-DD") || "";
  const endDate = dateRange[1]?.format("YYYY-MM-DD") || "";

  const { data, isLoading, error } = useRateCalendar(startDate, endDate) as UseRateCalendarResult;

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: "left",
          border: "1px solid lightgray",
          borderRadius: "10px",
          bgcolor: "whitesmoke",
          p: "30px 30px 0px 30px",
          mt: "30px",
        }}
      >
        <Box>
          <Typography sx={{ lineHeight: "1.2rem" }} variant="h4">
            Rate Calendar
          </Typography>
        </Box>
        <Box
          sx={{
            my: "40px",
          }}
        >
          <CustomDateRangePicker value={dateRange} onChange={setDateRange} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: '50px'
        }}
      >
        {isLoading && (
          <CircularProgress color="inherit" />
        )}
        {error && <Typography variant="h5" color="error">Failed to load data</Typography>}
      </Box>
      
        {data &&
          data.map((category: IRoomCategory) => (
            <RoomCategory key={category.id} category={category} />
          ))}
    </Container>
  );
}
