import RuleCard from "./RuleCard";

function RuleList({ rules, deleteRule }) {
  return (
    <>
      <h2>Rules</h2>

      {rules.map((rule) => (
        <RuleCard
          key={rule.id}
          rule={rule}
          deleteRule={deleteRule}
        />
      ))}
    </>
  );
}

export default RuleList;