# jasmine-async-suite

Adds async function to jasmine suite function that expect promises for asynchronous tests.

For example the following async test:
```js
  function timeout() {
    return new Promise(function(resolve) {
      setTimeout(resolve, 1000);
    });
  }

  it('passes when enough time has passed', function(done) {
    timeout().then(done);
  });    
```

Becomes:
```js
  it.async('passes when enough time has passed', function() {
    return timeout();  
  });    
```

It works and looks even better with the proposed ES7 async/await syntax
```js
  it.async('passes when enough time has passed', async function() {
    await timeout();  
  });    
```

(c) Copyright 2016 Ryan Dy. All Rights Reserved.
