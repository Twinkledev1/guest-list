export default function GuestDetails({guest,onBack}){
    if (!guest) return null;
    return(
      <div className="guest-details">
         <h2>{guest.name}</h2>
         <p>Email: {guest.email}</p>
         <p>Phone: {guest.phone}</p>
         <p>Bio: {guest.bio}</p>
         <p>Job: {guest.job}</p>
         <button onClick={onBack}>Back</button>
  
      </div>
     
  
    );
  }
  
  
    