# Example

```shell
$ npm install sensitive-words --save
```

```javascript
const {sensitiveWords} = require('sensitiveWords')
//ES2015
import {sensitiveWords} from 'sensitiveWords'; 

const filtered = sensitiveWords('The new apple macbook pro will have a touchbar',['pro','touchbar']);

console.log(filtered)
// The new apple macbook ***** will have a *****
```