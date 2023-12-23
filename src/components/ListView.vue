<template>
  <div>
    <ul>
      <li  v-for="(notes, date) in calendarNotes" :key="date">
        <ul >
          <li class="list-box" v-for="note in notes" :key="note.time">
            <h3 class="day">{{ date }}</h3>
            <span class="hour">{{ note.time }}</span> - <span>{{ note.text }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    calendarNotes: Object
  }
};
</script>

<style scoped>
.list-box{
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 10px 0 10px 0;
}
ol, ul, li{
    list-style-type: none;
  padding: 0;
  margin: 0;
}
.day {
  background-color: red;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.hour{
  font-size: 2rem;
  color: grey;
}

</style>
