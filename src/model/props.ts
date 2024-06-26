import { DateRange } from "@mui/x-date-pickers-pro";
import { Moment } from "moment";
import { IRoomCategory } from "./types";

export type CustomDateRangePickerProps = {
    value: DateRange<Moment>;
    onChange: (newValue: DateRange<Moment>) => void;
  }

export type RoomCategoryProps = {
    category: IRoomCategory;
  }