// characterScript function
function characterScript(char) {

  const charCode = char.codePointAt(0);
  if (charCode >= 65 && charCode <= 122) {
    // Latin characters A-Z, a-z
    return { name: "Latin", direction: "ltr" };
  } else if (charCode >= 1536 && charCode <= 1791) {
    // Arabic characters
    return { name: "Arabic", direction: "rtl" };
  }
  
  return null; // Return null if no script is found
}

// countBy function for counting occurrences
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    const name = groupName(item);
    let known = counts.findIndex((c) => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// dominantDirection function to find the direction with the highest count
function dominantDirection(text) {
  // Count characters by script direction
  let scriptsCount = countBy(text, (char) => {
    let script = characterScript(char);
    return script ? script.direction : "none"; // "none" for non-script characters
  });

  // Filter out "none" entries
  scriptsCount = scriptsCount.filter(({ name }) => name !== "none");

  // Use reduce to find the dominant direction based on the highest count
  let dominant = scriptsCount.reduce((a, b) => (a.count > b.count ? a : b));

  return dominant.name; // Return the direction name
}

// Test cases
console.log(dominantDirection("Hello!")); // → ltr
console.log(dominantDirection("Hey, مساء الخير")); // → rtl
