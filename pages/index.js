import React, { useEffect, useState } from "react";
import EventList from "../components/eventList";
import EventSearch from "../components/event-search";
import { useRouter } from "next/router";

const HomePage = () => {
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Could not fetch data");
        }
        const data = await response.json(); // Convert the response to JSON
        setError(null); // Clear any previous errors
        setFetchedData(data); // Set the fetched data
        console.log(data); // Log the fetched data
      } catch (error) {
        setError(error.message); // Set the error message
        setFetchedData([]); // Clear fetched data on error
        console.log(error); // Log the error
      }
    };
    fetchData();
  }, []);

  const router = useRouter();
  const findEvent = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventSearch onSearch={findEvent} />
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
      {fetchedData.length > 0 ? (
        <EventList items={fetchedData} />
      ) : (
        <p>No events found.</p> // Display a message if no data is available
      )}
    </div>
  );
};

export default HomePage;
