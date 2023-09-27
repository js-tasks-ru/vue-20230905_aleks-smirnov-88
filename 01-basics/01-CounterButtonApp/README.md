# CounterButtonApp

У приложения есть состояние, состоящие из одного счётчика. Его требуется описать в объекте данных приложения в опции
`data`.

Для вывода текущего значения счётчика можно использовать текстовую интерполяцию `{{ count }}`.

Значение увеличивается по клику на кнопку, значит требуется установить обработчик события `@click`. Это может быть как
отдельно описанный метод, так и изменение значения прямо в шаблоне: `@click="count += 1"`.

```html
<!-- 📁 index.html -->
<div id="app">
  <button type="button" @click="increment">{{ count }}</button>
</div>
```

```javascript
// 📁 script.js
import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count += 1;
    },
  },
}).mount('#app');
```
