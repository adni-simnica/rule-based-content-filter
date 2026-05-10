function RuleCard({ rule, deleteRule }) {
  return (
    <div className="ruleCard">
      <p>
        <b>Keyword:</b> {rule.keyword}
      </p>

      <p>
        <b>Match:</b> {rule.matchType}
      </p>

      <p>
        <b>Action:</b> {rule.actionType}
      </p>

      <p>
        <b>Value:</b> {rule.value}
      </p>

      <button
        className="button-small button-danger"
        onClick={() => deleteRule(rule.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default RuleCard;