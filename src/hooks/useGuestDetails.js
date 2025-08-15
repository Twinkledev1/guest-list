import { useEffect, useState } from "react";

const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-Twinkle/guests";

export default function useGuestDetails(guestId) {
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!guestId) return;

    async function fetchGuest() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/${guestId}`);
        const data = await res.json();
        setGuest(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchGuest();
  }, [guestId]);

  return { guest, loading };
}
