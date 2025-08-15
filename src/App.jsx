import { useState } from "react";
import GuestDetails from "./components/GuestDetails.jsx";
import GuestList from "./components/GuestList.jsx";
import "./index.css";
import useGuests from "../../guest-list-test/src/hooks/useGuests.js";
import useGuestDetails from "../../guest-list-test/src/hooks/useGuestDetails.js";

export default function App() {
  const { guests, loading, error } = useGuests();
  const { selectedId, setSelectedId } = useState(null);
  const { guest, loading: detailsLoading } = useGuestDetails(selectedId);

  if (loading) return <p>loading guest</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <div>
      <h1>Guest List</h1>
      {selectedId && !detailsLoading ? (
        <GuestDetails guest={guest} onBack={() => selectedId(null)} />
      ) : (
        <GuestList
          guests={guests}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      )}
      {!selectedId && <p>Selected a guest to see more details.</p>}
    </div>
  );
}
