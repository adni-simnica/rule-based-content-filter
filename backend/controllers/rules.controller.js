const db = require("../database");

exports.createRule = (req, res) => {
  const { keyword, matchType, actionType, value } = req.body;

  db.run(
    `
    INSERT INTO rules (keyword, matchType, actionType, value)
    VALUES (?, ?, ?, ?)
    `,
    [keyword, matchType, actionType, value],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Rule created successfully",
        id: this.lastID,
      });
    }
  );
};

exports.getRules = (req, res) => {
  db.all("SELECT * FROM rules", [], (err, rows) => {
    if (err) return res.status(500).json(err);

    res.json(rows);
  });
};

exports.deleteRule = (req, res) => {
  const { id } = req.params;

  db.run(
    "DELETE FROM rules WHERE id = ?",
    [id],
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Rule deleted successfully",
      });
    }
  );
};