export type IRateCalendar = {
  id: string;
  date: string;
  rate: number;
  min_length_of_stay: number;
  reservation_deadline: number;
};

export type IRatePlan = {
  id: number;
  name: string;
  calendar: IRateCalendar[];
};

export type IRoomInventoryCalendar = {
  id: string;
  date: string;
  available: number;
  status: boolean;
  booked: number;
};

export type IRoomCategory = {
  id: string;
  name: string;
  occupancy: number;
  inventory_calendar: IRoomInventoryCalendar[];
  rate_plans: IRatePlan[];
};

export type UseRateCalendarResult = {
  data: IRoomCategory[] | null;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
};

export type InvalidData = {
  date: undefined;
};
