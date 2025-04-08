function printTable(data, columns) {
  if (!Array.isArray(data) || data.length === 0) {
    console.log("No data to display.");
    return;
  }

  // Use all keys if no specific columns passed
  const keys = columns || Object.keys(data[0]);

  // Determine max width for each column
  const colWidths = keys.map(
    (key) =>
      Math.max(
        key.length,
        ...data.map((row) => String(row[key] ?? "").length)
      ) + 2 // add padding
  );

  const pad = (str, width) => String(str).padEnd(width);

  // Header
  const header = keys.map((key, i) => pad(key, colWidths[i])).join("");
  console.log(header);

  // Separator
  console.log(colWidths.map((w) => "-".repeat(w)).join(""));

  // Rows
  for (const row of data) {
    const line = keys
      .map((key, i) => pad(row[key] ?? "", colWidths[i]))
      .join("");
    console.log(line);
  }
}

export default printTable;
