<template>
  <div class="calendar">
    <div class="month">
      <div class="header">
        <button @click="prevMonth">&lt;</button>
        <h2>{{ currentMonth }}</h2>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="days">
        <div class="weekday" v-for="weekday in weekdays" :key="weekday">
          {{ weekday }}
        </div>
        <div
          v-for="day in daysInMonth"
          :key="day"
          class="day"
          @click="selectDay(day)"
        >
          {{ day }}
          <div v-if="notes[day]" class="day-notes">
            <div v-for="note in notes[day]" :key="note.time" class="note">
              {{ note.time }}: {{ note.text }}
              <button @click="editNote(day, note)">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedDay !== null" class="note-editor">
      <p class="selected-date">Selected Date: {{ selectedFullDate }}</p>
      <div class="input-group">
        <label for="selected-time">Selected Time:</label>
        <input id="selected-time" type="time" v-model="selectedTime" />
      </div>
      <div class="input-group">
        <label for="note-text">Note Text:</label>
        <textarea id="note-text" v-model="noteText"></textarea>
      </div>
      <button @click="addNote">Add Note</button>
      <button @click="cancelNote">Cancel</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonthIndex: new Date().getMonth(),
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      selectedDay: null,
      selectedTime: "",
      noteText: "",
      notes: reactive({}),
    };
  },
  computed: {
    currentMonth() {
      const date = new Date(this.currentYear, this.currentMonthIndex, 1);
      return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    },
    daysInMonth() {
      const firstDayOfMonth = new Date(
        this.currentYear,
        this.currentMonthIndex,
        1
      ).getDay();
      const totalDays = new Date(
        this.currentYear,
        this.currentMonthIndex + 1,
        0
      ).getDate();
      const daysArray = Array.from(
        { length: totalDays },
        (_, index) => index + 1
      );
      const leadingEmptyDays = Array.from(
        { length: firstDayOfMonth },
        () => null
      );
      return [...leadingEmptyDays, ...daysArray];
    },
    selectedFullDate() {
      if (this.selectedDay !== null) {
        const selectedDate = new Date(
          this.currentYear,
          this.currentMonthIndex,
          this.selectedDay
        );
        return selectedDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
      return "";
    },
  },
  methods: {
    prevMonth() {
      if (this.currentMonthIndex > 0) {
        this.currentMonthIndex--;
      } else {
        this.currentMonthIndex = 11;
        this.currentYear--;
      }
    },
    nextMonth() {
      if (this.currentMonthIndex < 11) {
        this.currentMonthIndex++;
      } else {
        this.currentMonthIndex = 0;
        this.currentYear++;
      }
    },
    selectDay(day) {
      this.selectedDay = day;
    },
    addNote() {
      if (!this.selectedDay || !this.selectedTime) return;

      const time = this.selectedTime;
      const note = { time, text: this.noteText, selectedDay: this.selectedDay };

      if (!this.notes[this.selectedDay]) {
        this.notes[this.selectedDay] = [note];
      } else {
        this.notes[this.selectedDay].push(note);
      }
      localStorage.setItem("calendarNotes", JSON.stringify(this.notes));
      this.cancelNote();
    },

    editNote(day, note) {
      this.selectedDay = day;
      this.selectedTime = note.time;
      this.noteText = note.text;
      this.notes[day] = this.notes[day].filter((n) => n !== note);
    },
    cancelNote() {
      this.selectedDay = null;
      this.selectedTime = "";
      this.noteText = "";
    },
  },
};
</script>

<style scoped>
.calendar {
  display: flex;
  justify-content: center;
  align-items: center;

}

.month {
  width: 1600px;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 28px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.weekday,
.day {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
}

.weekday {
  font-weight: bold;
}

.day:hover {
  background-color: #f0f0f0;
}

.note-editor {
  margin-top: 20px;
}

textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  resize: vertical;
}

.day-notes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.note {
  background-color: #ffc;
  padding: 5px;
  margin-bottom: 5px;
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 10px;
}
.note-editor {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
}

.selected-date {
  font-weight: bold;
  margin-bottom: 10px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
