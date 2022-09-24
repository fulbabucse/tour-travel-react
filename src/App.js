import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import "./App.css";
import Tours from "./components/Tours/Tours";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch("data.json");
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>;
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="noFound">
          <h2>No tour Packages left</h2>
          <button className="refreshBtn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="px-5 lg:px-24 my-5">
      <Tours tours={tours} removeTour={removeTour}></Tours>
      <Footer></Footer>
    </main>
  );
}

export default App;
