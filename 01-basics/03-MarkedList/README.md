# MarkedList

В данных приложения будем хранить не только список Email-ов, но и текущее введённое значение фильтра. Это значение
привяжем к форме поиска через директиву двустороннего связывания `v-model`. Можно добавить модификатор `trim`, чтобы
игнорировать случайные пробелы в начале и в конце.

Для получения данных о выделенных элементах списка можно создать вычисляемое свойство, которое возвращает список
объектов с Email и флагов выделения.

```html
<!-- 📁 index.html -->
<div id="app">
  <input type="text" v-model="marker" />
  <ul>
    <li v-for="{ email, marked } in markedEmails" :class="{ marked }">{{ email }}</li>
  </ul>
</div>
```

```javascript
// 📁 script.js
createApp({
  data() {
    return {
      emails,
      filter: '',
    };
  },

  computed: {
    markedEmails() {
      return this.emails.map((email) => ({
        email,
        marked: this.filter && email.includes(this.filter),
      }));
    },
  },
}).mount('#app');
```
