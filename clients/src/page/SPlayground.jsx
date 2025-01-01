import MentalHealthDashboard from "@/components/MentalHealthDashboard";
import { useParams } from "react-router-dom";

const SPlayground = () => {
  const { id } = useParams(); // Access dynamic id
  return(
    <>
    <MentalHealthDashboard/>
    </>
  );
};

export default SPlayground;
