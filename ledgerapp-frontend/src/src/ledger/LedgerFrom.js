import React, { useState } from "react";

export const LedgerFrom = () => {
  const [name, setName] = useState("");
  
  const handleSubmit = () => {};
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ledger Name"
        required
      />
      <button type="submit">Add Ledger</button>
    </form>
  );
};
