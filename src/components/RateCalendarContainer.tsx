import { Box, Container, Typography } from "@mui/material";

export default function RateCalendarContainer() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          textAlign: "left",
          border: "1px solid lightgray",
          borderRadius: "10px",
          bgcolor: "white",
          p: "30px",
          mt: "30px",
        }}
      >
        <Typography variant="h3">Rate Calendar</Typography>
      </Box>
    </Container>
  );
}
