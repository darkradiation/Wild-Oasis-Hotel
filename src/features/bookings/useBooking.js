import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { booking_id } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", booking_id],
    queryFn: () => getBooking(booking_id),
    retry: false,
  });

  return { isLoading, error, booking };
}
