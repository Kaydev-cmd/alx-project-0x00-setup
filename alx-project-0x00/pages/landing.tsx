import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="text-xl font-extralight">
      <h1>Landing Page</h1>
      <div className="flex justify-around items-center">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-around items-center mt-4">
        <Button title="Small rounded-sm" styles="text-sm rounded-sm" />
        <Button title="Medium rounded-md" styles="text-base rounded-md" />
        <Button title="Large rounded-full" styles="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
