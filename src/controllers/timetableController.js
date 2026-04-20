const { generate } = require("../algorithm/scheduler");

exports.generateTimetable = (req, res) => {
  const timetable = generate();
  res.json(timetable);
};