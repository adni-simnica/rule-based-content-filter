function RuleForm({
  keyword,
  setKeyword,
  matchType,
  setMatchType,
  actionType,
  setActionType,
  value,
  setValue,
  createRule,
}) {
  return (
    <div className="form">
      <input
        placeholder="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <select
        value={matchType}
        onChange={(e) => setMatchType(e.target.value)}
      >
        <option value="contains">contains</option>
        <option value="startsWith">startsWith</option>
        <option value="exact">exact</option>
      </select>

      <select
        value={actionType}
        onChange={(e) => setActionType(e.target.value)}
      >
        <option value="highlight">highlight</option>
        <option value="tooltip">tooltip</option>
      </select>

      <input
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={createRule}>Create Rule</button>
    </div>
  );
}

export default RuleForm;