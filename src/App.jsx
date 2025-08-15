import { useState } from "react";
import useGuests from "./hooks/useGuests.js";
import useGuestDetails from "./hooks/useGuestDetails.js";
import GuestList from "./components/GuestList.jsx";
import GuestDetails from "./components/GuestDetails.jsx";
import "./index.css";

export default function App() {
  const { guests, loading, error } = useGuests();
  const [selectedId, setSelectedId] = useState(null);
  const { guest, loading: detailsLoading } = useGuestDetails(selectedId);

  if (loading) return <p>Loading guests...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Guest List</h1>
      {selectedId && !detailsLoading ? (
        <GuestDetails guest={guest} onBack={() => setSelectedId(null)} />
      ) : (
        <GuestList
          guests={guests}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      )}
      {!selectedId && <p>Select a guest to see more details.</p>}
    </div>
  );
}
