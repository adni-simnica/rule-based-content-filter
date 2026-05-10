import { useState, useEffect } from "react";
import "./App.css";

import RuleForm from "./components/RuleForm";
import RuleList from "./components/RuleList";
import TextProcessor from "./components/TextProcessor";
import OutputBox from "./components/OutputBox";

import {
  createRule,
  fetchRules,
  deleteRule,
  processText,
} from "./services/api";

function App() {
  const [keyword, setKeyword] = useState("");
  const [matchType, setMatchType] =
    useState("contains");
  const [actionType, setActionType] =
    useState("highlight");
  const [value, setValue] = useState("");

  const [rules, setRules] = useState([]);
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);

  const handleCreateRule = async () => {
    try {
      await createRule({
        keyword,
        matchType,
        actionType,
        value,
      });

      loadRules();
    } catch (error) {
      console.log(error);
    }
  };

  const loadRules = async () => {
    try {
      const data = await fetchRules();
      setRules(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteRule = async (id) => {
    try {
      await deleteRule(id);
      loadRules();
    } catch (error) {
      console.log(error);
    }
  };

  const handleProcessText = async () => {
    try {
      const data = await processText(text);
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadRules();
  }, []);

  return (
    <div className="container">
      <div className="left">
        <h1>Rule Management</h1>

        <RuleForm
          keyword={keyword}
          setKeyword={setKeyword}
          matchType={matchType}
          setMatchType={setMatchType}
          actionType={actionType}
          setActionType={setActionType}
          value={value}
          setValue={setValue}
          createRule={handleCreateRule}
        />

        <RuleList
          rules={rules}
          deleteRule={handleDeleteRule}
        />
      </div>

      <div className="right">
        <h1>Text Processing</h1>

        <TextProcessor
          text={text}
          setText={setText}
          processText={handleProcessText}
        />

        <h2>Output</h2>

        <OutputBox result={result} />
      </div>
    </div>
  );
}

export default App;