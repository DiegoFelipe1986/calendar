import { createStore } from 'vuex';

export default createStore({
  state: {
    notes: [],
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },
    updateNote(state, { index, note }) {
      state.notes[index] = note;
    },
    deleteNote(state, index) {
      state.notes.splice(index, 1);
    },
  },
  actions: {
    addNote({ commit }, note) {
      commit('addNote', note);
    },
    updateNote({ commit }, { index, note }) {
      commit('updateNote', { index, note });
    },
    deleteNote({ commit }, index) {
      commit('deleteNote', index);
    },
  },
  getters: {
    allNotes: state => state.notes,
  },
});
