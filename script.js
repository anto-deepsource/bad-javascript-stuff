const fs = require('fs');

// Function to generate a TypeScript object with 10 keys
function generateObject(index) {
  let objectContent = `const obj${index} = {\n`;
  for (let i = 0; i < 10; i++) {
    objectContent += `  key${i}: 'value${index}_${i}',\n`;
  }
  objectContent += `};\n\n`;
  return objectContent;
}

// Specify the number of objects you want to generate
const totalObjects = 1000;
let code = '';

for (let i = 0; i < totalObjects; i++) {
  code += generateObject(i);
}

// Write the generated code to a .ts file
fs.writeFileSync('LargeTypeScriptFile.ts', code);

console.log('Generated LargeTypeScriptFile.ts with 1000 objects, each containing 10 keys.');
