import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
    <div className="flex flex-col gap-4 mt-4">
      <Button title="Small Button" styles="text-sm rounded-sm" />
      <Button title="Medium Button" styles="text-base rounded-md" />
      <Button title="Large Button" styles="text-lg rounded-full" />
    </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
 
