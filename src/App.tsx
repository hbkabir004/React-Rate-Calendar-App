import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RateCalendarContainer from "./components/RateCalendarContainer";

const queryClient = new QueryClient();

export default function App() {  
  return (
    <QueryClientProvider client={queryClient}>
      <RateCalendarContainer/>
    </QueryClientProvider>

  )
}
