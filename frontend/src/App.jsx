import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

import RuleForm from "./components/RuleForm";
import RuleList from "./components/RuleList";
import TextProcessor from "./components/TextProcessor";
import OutputBox from "./components/OutputBox";

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

  // CREATE RULE
  const createRule = async () => {
    try {
      await axios.post(
        "http://localhost:5000/rules",
        {
          keyword,
          matchType,
          actionType,
          value,
        }
      );

      fetchRules();
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH RULES
  const fetchRules = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/rules"
      );

      setRules(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //Delete rules
  const deleteRule = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/rules/${id}`
    );

    fetchRules();
  } catch (error) {
    console.log(error);
  }
};
  // PROCESS TEXT
  const processText = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/process",
        {
          text,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRules();
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
          createRule={createRule}
        />

        <RuleList
          rules={rules}
          deleteRule={deleteRule}
        />
      </div>

      <div className="right">
        <h1>Text Processing</h1>

        <TextProcessor
          text={text}
          setText={setText}
          processText={processText}
        />

        <h2>Output</h2>

        <OutputBox result={result} />
      </div>
    </div>
  );
}

export default App;