export default function storeDataInLocalStorage(key, data) {
  try {
    // Convert data to a JSON string before storing
    const jsonData = JSON.stringify(data);

    // Store the data in localStorage using the provided key
    localStorage.setItem(key, jsonData);

    `Data successfully stored under key: ${key}`;
  } catch (error) {
    console.error("Failed to store data in localStorage:", error);
  }
}
