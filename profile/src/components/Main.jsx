import Button from "./Button";
import TechStack from "./TechStack";
import Title from "./Title";
import UserCard from "./UserCard";

export default function Main({ date, setDate }) {
  return (
    <div>
      <TechStack date={date} setDate={setDate} />
      <Title />
      <UserCard />
      <Button date={date} setDate={setDate} />
    </div>
  );
}
