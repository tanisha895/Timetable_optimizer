// Sample Data
const teachers = ["T1", "T2"];
const rooms = ["R1", "R2"];
const timeSlots = ["9AM", "10AM"];

const subjects = [
  { name: "Math", teacher: "T1" },
  { name: "Science", teacher: "T2" }
];

// STEP 2: Conflict Checking Function
function isValid(schedule, teacher, room, time) {
  return !schedule.some(
    (entry) =>
      entry.time === time &&
      (entry.teacher === teacher || entry.room === room)
  );
}

// STEP 3: Backtracking / Scheduling Logic
function generate() {
  const schedule = [];

  for (let subject of subjects) {
    let assigned = false;

    for (let time of timeSlots) {
      for (let room of rooms) {
        if (isValid(schedule, subject.teacher, room, time)) {
          schedule.push({
            subject: subject.name,
            teacher: subject.teacher,
            room,
            time
          });
          assigned = true;
          break;
        }
      }
      if (assigned) break;
    }

    // If no valid slot found → conflict
    if (!assigned) {
      return {
        message: "Conflict detected",
        data: []
      };
    }
  }

  return {
    message: "Timetable generated successfully",
    data: schedule
  };
}

// Export function
module.exports = { generate };