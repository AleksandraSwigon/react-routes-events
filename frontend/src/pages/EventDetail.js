import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const param = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {param.eventId}</p>
    </>
  );
};
export default EventDetailPage;
