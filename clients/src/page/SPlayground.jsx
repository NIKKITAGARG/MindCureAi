import { useParams } from "react-router-dom";

const SPlayground = () => {
  const { id } = useParams(); // Access dynamic id
  return <div>SPlayground with ID: {id}</div>;
};

export default SPlayground;
