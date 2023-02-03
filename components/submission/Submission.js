import TwoStateButton from "../ui/TwoStateButton";

export default function Submission(props) {
  console.log("submission props", props);
  const { selectedStat, className } = props;
  return (
    <div className={className}>
      <div>
        <h1 className="text-3xl">{selectedStat} complete!</h1>
        <h2 className="text-xl">
          Check out your achievements in the Stats page!
        </h2>
      </div>
    </div>
  );
}
