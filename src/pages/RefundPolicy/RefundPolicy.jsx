import { useEffect } from "react";
import greaterThan from "../../assets/greaterthan.png";
import { useLocation } from "react-router-dom";
function OurTeam() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="flex flex-col justify-center items-center text-white pt-28 bg-black">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">
          Refund <span className="text-[#4d55ba]">Policy</span>
        </h1>
      </div>
      <div className="flex flex-col h-[45vh] justify-between mt-10 mb-10">
        <ul className="flex flex-col h-[50vh] justify-between">
          <li className="flex flex-row items-center">
            <img src={greaterThan} alt="" className="w-3 h-3 mr-2" />
            No money will be refunded once the transaction is successful.
          </li>
          <li className="flex flex-row items-center">
            <img src={greaterThan} alt="" className="w-3 h-3 mr-2" />
            In case of transaction failure, the amount will be refunded back to
            the user&apos;s account within 7 days (from the transaction date).
          </li>
          <li className="flex flex-row items-center">
            <img src={greaterThan} alt="" className="w-3 h-3 mr-2" />
            No money will be refunded on cancellation due to any reasons.
          </li>
          <li className="flex flex-row items-center">
            <img src={greaterThan} alt="" className="w-3 h-3 mr-2" />
            All refunds will be funded back to the original payment type.
          </li>
          <li className="flex flex-row items-center">
            <img src={greaterThan} alt="" className="w-3 h-3 mr-2" />
            Drop a mail to us if the money is not refunded after the transaction
            failure.
          </li>
          <li className="flex flex-row items-center">
            <img src={greaterThan} alt="" className="w-3 h-3 mr-2" />A
            substitute attendee can be named at any time before the event starts
            and no fees will be applied to this, this transfer of passes cannot
            be completed onsite.
          </li>
          <li className="flex flex-row items-center">
            <img src={greaterThan} alt="" className="w-3 h-3 mr-2" />
            The ticket once purchased for a particular registered team/event can
            not be transferred.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OurTeam;
