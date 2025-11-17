import React, {useEffect, useState} from "react";

export default function App(){
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(()=> {
    fetch("/api/persons")
      .then(r=>r.json())
      .then(setPersons)
      .catch(e=>console.error(e));
  }, []);

  const add = async () => {
    const res = await fetch("/api/persons", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({name, email})
    });
    const p = await res.json();
    setPersons(prev=>[...prev, p]);
    setName(""); setEmail("");
  }

  return (
    <div style={{padding:20}}>
      <h2>Persons</h2>
      <ul>
        {persons.map(p => <li key={p.id}>{p.name} ({p.email})</li>)}
      </ul>

      <h3>Add Person</h3>
      <input placeholder="name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
  )
}

