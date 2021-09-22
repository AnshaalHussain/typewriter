const sentence = "hello there from lighthouse labs";




let timer = 0 
for (const char of sentence) {
        
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * timer)
    timer += 1;
  };
console.log("")
 
