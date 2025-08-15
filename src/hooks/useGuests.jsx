import {useEffect, useState} from "react";

const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-Twinkle/guests";

export default function useGuests(){

    const [guests, setGuests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

// fetching all the guests

useEffect(() =>{
async function fetchGuests(){
    try{
        setLoading(true);
        const result = await fetch(APT);
        const data = await result.json();
        setGuests(data.data);
    }

    catch(err){
        setError(err.message);
    }
    finally{
        setLoading(false);
    }
}

fetchGuests();
}, []);

return {guests,loading, error};
}
