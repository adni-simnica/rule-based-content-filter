function TextProcessor({
  text,
  setText,
  processText,
}) {
  return (
    <>
      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={processText}>
        Process Text
      </button>
    </>
  );
}

export default TextProcessor;