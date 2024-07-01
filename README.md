## NodeJS Notes
- NodeJS is a runtime environment for executing JavaScript code.
- NodeJS is built on Chrome's V8 JavaScript engine.
- NodeJS is a cross-platform runtime environment.
- NodeJS is open-source and free.
- NodeJS is used to execute JavaScript code on the server.

### fs module

<p>The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.</p>

```javascript
const fs = require('fs');
```

- To read from a file
```javascript
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

- To write or create a file
```javascript
fs.writeFile('file.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```

This code will create a new file with the specified content. If the file already exists, it will overwrite it.

- To append data to a file
```javascript
fs.appendFile('file.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```

- To rename a file
```javascript
fs.rename('file.txt', 'newfile.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
```

- To delete a file
```javascript
fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
```

-

