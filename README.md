# 小可 UI

> A Vue.js UI Toolkit

## Build Setup

```bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```

## Quick Start

```javascript
import Vue from "vue";
import XkUI from "xkui";

Vue.use(XkUI);

// or
import {
  InputGroup,
  Watermark
  // ...
} from "xkui";

Vue.component(InputGroup.name, InputGroup);
Vue.component(Watermark.name, Watermark);
```

## Browser Support

Modern browsers and Internet Explorer 10+.
