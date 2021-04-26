import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Sara", age: 20 },
  { name: "Mike", age: 20 },
  { name: "Alex", age: 20 },
];

const UserSearch: React.FC = () => {
  // Create the Ref. ref is either HTMLInputElement or null, null is set as teh default value here.
  const inputRef = useRef<HTMLInputElement | null>(null);
  //const inputRef = useRef<any>(null); // quick dirty way. not as precise

  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  // on load, empty array at end to only run once.
  useEffect(() => {
    //inputRef may be null, check for not null before use
    if (!inputRef.current) {
      return;
    }
    // if exists then set the focus to this ref.
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
