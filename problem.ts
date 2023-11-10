export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

export function executeCallback(callback, taskText) {
  callback(taskText);
}

function myCallback(taskText) {
  console.log(`Task: ${taskText}`);
}

executeCallback(myCallback, "Buy groceries");

export function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000); // Simulate a 1-second delay
  });
}

export const fetchDataWithError = () => {
  return new Promise((resolve, reject) => {
    // Simulate an error scenario
    setTimeout(() => {
      reject(new Error("Rejection Error"));
    }, 1000); // Simulate a 1-second delay
  });
};
