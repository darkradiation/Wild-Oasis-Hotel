import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.total_price, 0);

  const checkIns = confirmedStays.length;

  // num of checked in nights / total available nights
  const occupancy =
    (confirmedStays.reduce((acc, cur) => acc + cur.num_nights, 0) /
      (numDays * numCabins)) *
    100;

  return (
    <>
      <Stat
        title="Bookings"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
        color="blue"
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
        color="green"
      />
      <Stat
        title="Check ins"
        value={checkIns}
        icon={<HiOutlineCalendarDays />}
        color="indigo"
      />
      <Stat
        title="Occupancy rate"
        value={occupancy.toFixed(2) + ` %`}
        icon={<HiOutlineChartBar />}
        color="yellow"
      />
    </>
  );
}

export default Stats;
