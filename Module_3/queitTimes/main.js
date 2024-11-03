async function textFile(filename) {
  const response = await fetch(filename);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${filename}: ${response.statusText}`);
  }
  return await response.text();
}

async function activityTable(day) {
  let logFileList = await textFile("camera_logs.txt");
  let logFiles = logFileList.split("\n").filter((filename) => filename);

  let hourlyCounts = Array(24).fill(0);

  for (let logFile of logFiles) {
    let content = await textFile(logFile); // Read each logfile
    let timestamps = content
      .split("\n")
      .filter((line) => line)
      .map(Number);

    for (let timestamp of timestamps) {
      let date = new Date(timestamp);
      if (date.getDay() === day) {
        // Check if it matches the target day
        let hour = date.getHours(); // Get the hour (0–23)
        hourlyCounts[hour]++; // Increment the count for this hour
      }
    }
  }

  return hourlyCounts;
}

activityTable(1)
  .then((table) => console.log(activityGraph(table)))
  .catch((error) => console.error("Error:", error));
