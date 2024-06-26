import { useQuery } from "react-query";
import { fetchRateCalendar } from "../api/rate_calendar_api";


export const useRateCalendar = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ['rateCalendar', startDate, endDate],
    queryFn: () => fetchRateCalendar(startDate, endDate),
    enabled: !!startDate && !!endDate, // Only fetch when dates are defined
  });
};

