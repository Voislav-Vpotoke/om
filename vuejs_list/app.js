const App = {
  data() {
    return {
        placeholderString: 'Введите название',
        title: 'Список заметок',
        inputValue: '',
        notes: ['Заметка']
    }
  },

  methods: {
    inputChangeHandler(event) {

this.inputValue = event.target.value
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },

    removeNote(idx) {
      this.notes.splice(idx, 1)

    },

   
  }
}

//  watch: {
//       inputValue(value) {
//         console.log('Value: ', value);
//       }
//     }
//       computed: {
//         doubleCountComputed() {
//           console.log('doubleCountComputed');
//           return this.notes.length * 2
//           }
//     },



Vue.createApp(App).mount('#app')
