export default function Button({ setDate }) {
  let nowDate = new Date();

  return (
    <div>
      <button className="bg-success text-white">Greet People</button>
      <button
        onClick={() =>
          setDate(
            `${nowDate.getFullYear()}.${
              nowDate.getMonth() + 1
            }.${nowDate.getDate()}`
          )
        }
        className="bg-warning text-white"
      >
        Show Date
      </button>
    </div>
  );
}
