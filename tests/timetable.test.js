const { generate } = require("../src/algorithm/scheduler");

test("Timetable should have no conflicts", () => {
  const result = generate();

  expect(result.message).toBe("Timetable generated successfully");

  const data = result.data;

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].time === data[j].time) {
        expect(data[i].teacher).not.toBe(data[j].teacher);
        expect(data[i].room).not.toBe(data[j].room);
      }
    }
  }
});