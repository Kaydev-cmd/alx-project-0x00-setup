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
    </div>
  );
};

export default Landing;
