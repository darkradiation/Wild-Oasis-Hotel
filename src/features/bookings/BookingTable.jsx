import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
// import { useSearchParams } from "react-router-dom";

function BookingTable() {
  const { isLoading, bookings, count } = useBookings();
  // const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // CLIENT SIDE FILTERING AND SORTING AS USE IN CABIN TABLE
  // // 1) FILTER
  // const filterValue = searchParams.get("status") || "all";
  // let filteredBookings;
  // if (filterValue === "all") filteredBookings = bookings;
  // else if (filterValue === "unconfirmed")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "unconfirmed"
  //   );
  // else if (filterValue === "checked-in")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "checked-in"
  //   );
  // else if (filterValue === "checked-out")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "checked-out"
  //   );

  // // 2) SORT
  // const sortBy = searchParams.get("sortBy") || "start_date-desc";
  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedBookings = filteredBookings.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );

  if (!bookings.length) return <Empty resourceName="bookings" />;
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>booking</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          // data={filteredBookings}
          // data={sortedBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
