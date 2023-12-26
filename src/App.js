import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </div>
    </div>
  );
}

export default App;
