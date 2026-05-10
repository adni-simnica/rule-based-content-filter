function OutputBox({ result }) {
  return (
    <div className="outputBox">
      {result.map((item, index) => {
        if (
          item.rule &&
          item.rule.actionType === "highlight"
        ) {
          return (
            <span
              key={index}
              className="highlight"
              style={{
                backgroundColor: item.rule.value,
              }}
            >
              {item.text}{" "}
            </span>
          );
        }

        if (
          item.rule &&
          item.rule.actionType === "tooltip"
        ) {
          return (
            <span key={index} className="tooltip">
              {item.text}
              <small>
                {" "}
                [{item.rule.value}]
              </small>{" "}
            </span>
          );
        }

        return (
          <span key={index}>
            {item.text}{" "}
          </span>
        );
      })}
    </div>
  );
}

export default OutputBox;