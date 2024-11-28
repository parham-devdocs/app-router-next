export default async function getAllEvents() {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json(); // Convert the response to JSON
  const events = [];

  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }

  return events;
}

export async function getEventById(id) {
  const events = await getAllEvents();



  const filteredEvents = events.find((e) => e.id === Number(id)) // Use strict equality
 console.log(filteredEvents)

  return filteredEvents;
}
