import ConversationSlide from "@/components/ConversationSlide";
import MentalHealthDashboard from "@/components/MentalHealthDashboard";
import { useParams } from "react-router-dom";

const SPlayground = () => {
  const { id } = useParams(); // Access dynamic id
  return(
    <>
    <MentalHealthDashboard/>
    <ConversationSlide/>
    </>
  );
};

export default SPlayground;
