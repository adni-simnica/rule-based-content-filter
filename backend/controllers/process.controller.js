const db = require("../database");

exports.processText = (req, res) => {
  const { text } = req.body;

  db.all("SELECT * FROM rules", [], (err, rules) => {
    if (err) return res.status(500).json(err);

    const words = text.split(/\s+/);

    const result = words.map((word) => {
      let matchedRule = null;

      for (const rule of rules) {
        if (
          rule.matchType === "contains" &&
          word.toLowerCase().includes(
          rule.keyword.toLowerCase())
        ) {
          matchedRule = rule;
        }

        if (
          rule.matchType === "startsWith" &&
          word.toLowerCase().startsWith(
          rule.keyword.toLowerCase())
        ) {
          matchedRule = rule;
        }

        if (
          rule.matchType === "exact" &&
          word.toLowerCase() ===
          rule.keyword.toLowerCase()
        ) {
          matchedRule = rule;
        }
      }

      return {
        text: word,
        rule: matchedRule,
      };
    });

    res.json(result);
  });
};