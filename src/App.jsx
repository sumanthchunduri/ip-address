import "./App.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data, isLoading, error } = useSWR(
    "https://api.ipify.org?format=json",
    fetcher
  );

  if (isLoading) {
    return <div className="main">Getting IP Information</div>;
  }
  if (error) {
    return <div className="main">somthing went wrong, please refresh the page</div>
  }
  return (
    <>
      <div className="main">Your IP: {data.ip}</div>
    </>
  );
}

export default App;
