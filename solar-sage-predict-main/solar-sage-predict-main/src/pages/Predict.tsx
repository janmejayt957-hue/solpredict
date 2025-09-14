import { PredictionForm } from "@/components/PredictionForm";
import { PredictionResults } from "@/components/PredictionResults";

export const Predict = () => {
  return (
    <div className="min-h-screen pt-16">
      <PredictionForm />
      <PredictionResults />
    </div>
  );
};