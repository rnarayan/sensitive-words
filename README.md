# Example

```shell
$ npm install sensitive-words --save
```

```javascript
const {sensitiveWords} = require('sensitiveWords)
//ES2015
import {sensitiveWords} from 'sensitive-words' 

const filtered = sensitiveWords('The new apple macbook pro will have a touchbar',['pro','$

console.log(filtered)
// The new apple macbook ***** will have a *****
```