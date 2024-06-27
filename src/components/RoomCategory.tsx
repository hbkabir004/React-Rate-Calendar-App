import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { RoomCategoryProps } from "../model/props";
import { IRatePlan, IRoomInventoryCalendar } from "../model/types";

export default function RoomCategory({ category }: RoomCategoryProps) {

  // For simplicity, extracting the pertinent data for the first 20 days.
  const inventoryCalendar: IRoomInventoryCalendar[] = category.inventory_calendar.slice(0, 20);
  const ratePlan: IRatePlan | undefined = category.rate_plans[0];
  const rateCalendar = ratePlan?.calendar.slice(0, 20) || [];

  // console.log("Category", category);
  
  return (
    <TableContainer
      component={Paper}
      sx={{
        minWidth: "100rem",
        backgroundColor: "whitesmoke",
        border: "1px solid lightgray",
        borderRadius: "10px",
        my: 5,
      }}
    >
      <Table sx={{ width: "100vw", borderCollapse: "collapse" }}>
        <TableHead sx={{ width: "100vw", border: "1px solid lightgray",}}>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid lightgray",
                p: 2,
                textAlign: "center",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            ></TableCell>
            {inventoryCalendar.map((item) => (
              <TableCell
                key={item.date}
                align="right"
                sx={{
                  border: "1px solid lightgray",
                  p: 2,
                }}
                colSpan={1}
              >
                <Typography
                  sx={{
                    width: "30px",
                    textAlign: "right",
                    fontWeight: 700,
                  }}
                >
                  {new Date(item.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                  })}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid lightgray",
                p: 2,
                textAlign: "left",
                fontWeight: 600,
                fontSize: "1rem",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              {category.name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid lightgray",
                p: 2,
                textAlign: "left",
                width: "max-content",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Room status
            </TableCell>
            {inventoryCalendar.map((item) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid lightgray",
                  p: 2,
                  textAlign: "center",
                  bgcolor: item.status ? "#4CAF50" : "#F44336",
                  color: "white",
                  // borderColor: "lightgray",
                }}
              >
                {item.status ? "Open" : "Closed"}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid lightgray",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Rooms to sell
            </TableCell>
            {inventoryCalendar.map((item) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid lightgray",
                  p: 2,
                  textAlign: "center",
                  bgcolor: item.status ? "inherit" : "#F44336",
                }}
              >
                {item.available}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid lightgray",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Net booked
            </TableCell>
            {inventoryCalendar.map((item) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid lightgray",
                  p: 2,
                  textAlign: "center",
                  bgcolor: item.status ? "inherit" : "#F44336",
                }}
              >
                {item.booked}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid lightgray",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Standard Rate
            </TableCell>
            {rateCalendar.map((item, index) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid lightgray",
                  p: 2,
                  textAlign: "center",
                  bgcolor: inventoryCalendar[index].status
                    ? "inherit"
                    : "#F44336",
                }}
              >
                {item.rate}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid lightgray",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Min. length of stay
            </TableCell>
            {rateCalendar.map((item, index) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid lightgray",
                  p: 2,
                  textAlign: "center",
                  bgcolor: inventoryCalendar[index].status
                    ? "inherit"
                    : "#F44336",
                }}
              >
                {item.min_length_of_stay}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid lightgray",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Min. advance reservation
            </TableCell>
            {rateCalendar.map((item, index) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid lightgray",
                  p: 2,
                  textAlign: "center",
                  bgcolor: inventoryCalendar[index].status
                    ? "inherit"
                    : "#F44336",
                }}
              >
                {item.reservation_deadline}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
