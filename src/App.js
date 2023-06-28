import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";

//operation
import { ContributeFundOperation, endFund} from "./utils/operation";

//tzkt
import { fetchStorage } from "./utils/tzkt";

const App = () => {
  // Players holding lottery tickets
  // const [players, setPlayers] = useState([]);
  // const [tickets, setTickets] = useState(3);
  const [loading, setLoading] = useState(false);
  const [total_fund,setAmount]=useState(0);
  const [goal,setGoal]=useState(100);
  const [contributor, setContributors]=useState([]);

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    (async () => {
      const storage=await fetchStorage();
      // setPlayers(Object.values(storage.players));
      setContributors(Object.values(storage.contributors));
      // setTickets(storage.tickets_available);
      setAmount(storage.total_amount);
      setGoal(storage.goal);
    })();
  }, []);

  // TODO 7.a - Complete onBuyTicket function
  // const onBuyTicket = async () => {
  //   try{
  //     setLoading(true);
  //     await buyTicketOperation();;
  //     alert("Transaction confirmed");
  //   }catch(err){
  //     alert("Transaction failed");
  //   }
  //   setLoading(false);
  // };

  // TODO 11.a - Complete onEndGame function
  const onEndGame = async () => {
    try{
      setLoading(true);
      // await endGameOperation();
      await endFund();
      alert("GAME ENDED!");
    }catch(err){
      alert("Failed to end!");
    }
    setLoading(false);
  };
const onContribute=async()=>{
  try{
    setLoading(true);
    await ContributeFundOperation(10);
    alert("CONTRIBUTED!");
  }catch(err){
    alert("Failed to contribute!");
  }
  setLoading(false);
}
  return (
    <div className="h-100">
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {/* Ticket remaining display */}
        {/* <div className="py-1">Tickets remaining: {tickets}</div> */}
        <div className="py-1">FUND ACHIEVED: {total_fund}</div>
        {/* Action Buttons */}
        {total_fund <= goal ? (
          <button onClick={onContribute} className="btn btn-primary btn-lg">
            {/* TODO 7.b - Call onBuyTicket on click */}
            {/* TODO 7.c - Show "loading..." when buying operation is pending */}
            {loading===true ?"Loading..":"Contribute"}
          </button>
        ) : (
          <button onClick={onEndGame} className="btn btn-success btn-lg">
            {/* TODO 11.b - Call onEndGame on click */}
            {/* TODO 11.c - Show "loading..." when buying operation is pending */}
            {loading===true ?"Loading..":"End Game"}
          </button>
        )}
        {/* List of Players */}
        <div className="mt-2">
          {contributor.map((cont, index) => (
            <div key={index}>
              <b>Contributor {index}:</b> {cont}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
