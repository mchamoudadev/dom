# Lecture: Asynchronous JavaScript

## Introduction

As we've seen in previous classes, JavaScript is a synchronous, single-threaded language. This means it executes one command at a time, in the exact order it appears in the code. But what if a task takes a long time? This is where Asynchronous JavaScript comes into play. Asynchronous programming allows JavaScript to perform tasks in the background while executing other tasks. Today, we're going to delve deeper into asynchronous JavaScript.

## Agenda

1. Understanding Synchronous vs Asynchronous JavaScript
2. Callbacks
3. Promises
4. Async/Await
5. AJAX & Fetch API
6. Handling Errors in Asynchronous JavaScript
7. Practical Applications and Use Cases

## 1. Understanding Synchronous vs Asynchronous JavaScript

JavaScript’s single-threaded nature can be a blessing and a curse. It's easy to understand, but it could cause problems. Suppose we have a function that takes a significant amount of time to complete (like fetching data from a server). In a synchronous environment, everything stops until that function completes. This is called `blocking`

On the other hand, asynchronous JavaScript lets us start a long-running task and then move on to the next line of code without waiting for the long-running task to finish. When it finishes, JavaScript will come back and let us know, allowing us to work with the results. This is `non-blocking.`

## Synchronous vs. Asynchronous JavaScript

Let's create two scenarios using a hypothetical time-consuming task, like simulating a delay with `setTimeout` function for asynchronous example and a `while` loop for synchronous.

### The Synchronous (Blocking) scenario

```javascript
console.log("Before time-consuming task (Synchronous)");

const start = new Date().getTime();
while (new Date().getTime() < start + 5000); // 5 seconds delay

console.log("After time-consuming task (Synchronous)");
```

### The Asynchronous (Non-Blocking) scenario

In the above scenario, the `After time-consuming task log` won't be printed until the whole `5` seconds delay is completed. The entire application stops and waits for this task to complete before moving on to the next line of code. This is `Blocking`.

```javascript
console.log("Before time-consuming task (Asynchronous)");

setTimeout(function () {
	console.log("Time-consuming task complete (Asynchronous)");
}, 5000); // 5 seconds delay

console.log("After time-consuming task (Asynchronous)");
```

In the above scenario, `After time-consuming task (Asynchronous)` will be printed to the console immediately, without waiting for the 5 seconds delay to complete. Then, after 5 seconds, `Time-consuming task complete (Asynchronous)` will be printed. This is non-blocking.

With the asynchronous model, the application continues to run and doesn't stop for time-consuming tasks. Instead, it schedules them and continues running other code. When the time-consuming task is complete, it comes back and completes the scheduled task.

Remember: JavaScript itself is single-threaded, meaning it executes one operation at a time, one after the other. Therefore, it's not truly asynchronous in the way that multithreaded languages like Java or `C#` can be. However, JavaScript uses events and callbacks to provide concurrency and allow you to write code as if it is executing asynchronously.

## 2. Callbacks

Callbacks are a fundamental part of asynchronous JavaScript. A callback is a function passed into another function as an argument, which is then invoked inside the outer function. This allows the function to call back, hence the name, at a suitable time. This is the most basic form of asynchronous JavaScript.

```javascript
setTimeout(() => {
	console.log("This will run after 2 seconds");
}, 2000);
```

## Promises in JavaScript

In JavaScript, promises are a programming construct used to handle asynchronous operations. They provide a way to write code that executes asynchronously and handles the result or error once the operation is completed. Promises are essential for managing asynchronous tasks, such as making HTTP requests, reading/writing files, interacting with databases, and more.

The primary purpose of promises is to simplify asynchronous programming and make it more manageable. They help avoid callback hell, where multiple nested callbacks can become difficult to read and maintain. Promises provide a cleaner and more structured approach to handling asynchronous operations.

Promises have three states:

- **Pending**: The initial state, representing the ongoing asynchronous operation.
- **Fulfilled**: The state indicating that the operation completed successfully, returning a value.
- **Rejected**: The state indicating that the operation encountered an error, returning an error message or an exception.

To create a promise, you use the `Promise` constructor, which takes a function as an argument. This function, known as the executor, has two parameters: `resolve` and `reject`. Inside the executor, you perform your asynchronous operation, and when it's done, you call either the `resolve` function to fulfill the promise or the `reject` function to reject it.

Here's an example of a simple promise that resolves after a specified timeout:

```javascript
let promise = new Promise((resolve, reject) => {
	let a = 1 + 1;
	if (a == 2) {
		resolve("Success");
	} else {
		reject("Failed");
	}
});

promise
	.then((message) => {
		console.log("This is in the then " + message);
	})
	.catch((message) => {
		console.log("This is the catch " + message);
	});
```

Let's break down the example step by step:

The code above demonstrates the usage of Promises in JavaScript.

A Promise object is created using the `new Promise()` constructor. It takes a callback function with two parameters: `resolve` and `reject`. In this example, the callback function checks if the sum of `1 + 1` is equal to `2`.

If the condition is true, `resolve("Success")` is called, indicating that the operation was successful. Otherwise, `reject("Failed")` is called, indicating a failure.

The Promise object has two important methods: `then()` and `catch()`. The `then()` method is used to handle the resolved (successful) case, and the `catch()` method is used to handle the rejected (failed) case.

In the code, `promise.then()` attaches a callback function that will be executed when the promise is resolved successfully. The callback function receives the resolved message as an argument and logs it to the console.

Similarly, `promise.catch()` attaches a callback function that will be executed when the promise is rejected. The callback function receives the rejected message as an argument and logs it to the console.

By using promises, you can handle asynchronous operations and define actions to be taken depending on whether the promise is resolved or rejected.

### Another example

```javascript
/**
 * Fetches data from the specified URL using the Fetch API.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise} A Promise that resolves with the parsed JSON data if the response is successful, or rejects with an error.
 */
function fetchData(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => {
				if (response.ok) {
					resolve(response.json());
				} else {
					reject(new Error("Failed to fetch data"));
				}
			})
			.catch((error) => reject(error));
	});
}

// Usage
fetchData("https://api.github.com/users/openai")
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
```

In this code, the `fetchData` function fetches data from the specified URL using the Fetch API. It returns a Promise that either resolves with the parsed JSON data if the response is successful, or rejects with an error if there's an issue with the request.

In the usage example, we fetch data from the GitHub API for the user "openai". If the request is successful, the parsed JSON data for the user will be logged to the console. Otherwise, if there's an error during the request or the response is not successful, an error message will be logged to the console.

This example demonstrates how the `fetchData` function can be used to fetch data from an API and handle both successful and failed responses using Promises.

### Promise Chaining

Promises in JavaScript allow you to handle asynchronous operations in a more organized and readable way. Promise chaining is a technique that allows you to execute a series of asynchronous operations sequentially, where each operation depends on the result of the previous one.

##### Real-world scenario: Online Shopping

Let's consider an online shopping scenario where Promises can play a major role.

When a customer places an order, several things need to happen:

1. The inventory needs to be checked to see if the item is in stock.
   If the item is in stock,
2. the payment needs to be processed.
3. If the payment goes through, the order needs to be shipped.
   These steps depend on each other: we can't process the payment before checking inventory, and we can't ship the order before processing the payment.

Here's how we might represent this using Promises:

```javascript
function checkInventory(order) {
	return new Promise((resolve, reject) => {
		console.log(`Checking inventory for the item: ${order.item}`);
		setTimeout(() => {
			if (order.quantity <= 100) {
				// let's assume we have 100 items in stock
				resolve(order);
			} else {
				reject(
					`Cannot place order. Not enough inventory for the item: ${order.item}`
				);
			}
		}, 1000);
	});
}

function processPayment(order) {
	return new Promise((resolve, reject) => {
		console.log(`Processing payment for ${order.item}`);
		setTimeout(() => {
			if (order.paymentMethod === "Credit Card") {
				// let's assume we can only process credit cards
				resolve(order);
			} else {
				reject(
					`Cannot process order. Unsupported payment method: ${order.paymentMethod}`
				);
			}
		}, 1000);
	});
}

function shipOrder(order) {
	return new Promise((resolve, reject) => {
		console.log(`Shipping order for ${order.item}`);
		setTimeout(() => {
			resolve(`Order shipped: ${order.item}`);
		}, 1000);
	});
}

let order = {
	item: "Drone",
	quantity: 1,
	paymentMethod: "Credit Card",
};

checkInventory(order)
	.then((order) => processPayment(order))
	.then((order) => shipOrder(order))
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```

In this example:

We're creating three functions: `checkInventory()`, `processPayment()`, and `shipOrder()`. Each function returns a Promise. The Promise will be resolved if the operation is successful, or rejected if there's an issue.

We're using `.then()` to chain these functions together. The output from one function is used as the input for the next.

If any Promise in the chain is rejected, we stop executing subsequent `.then()` methods and move to the `.catch()` method, where we log the error.

With this pattern, we can clearly see the sequence of operations and handle errors in a single location. This wouldn't be possible with traditional callback functions, as we would end up with a nested structure of callbacks, often referred to as `callback hell.`

### async/await Basics

`async` Function
The `async` keyword is used to declare an asynchronous function. An async function implicitly returns a Promise. Within an async function, we can use the `await` keyword to pause the execution until a Promise is `resolved` or `rejected`. This allows us to write asynchronous code in a more synchronous and linear fashion.

`await Expression`
The `await` keyword is used to pause the execution of an `async` function until a Promise is resolved or rejected. It can only be used within an async function. When encountering an await expression, the async function is suspended, allowing other code to execute. Once the Promise is `resolved`, the async function resumes from where it left off, and the value of the resolved Promise is returned.

Let's explore how `async/await` simplifies asynchronous programming using the GitHub User API as an example.

##### GitHub User API Example

**Fetching User Information**

```javascript
async function fetchUser(username) {
	try {
		const response = await fetch(`https://api.github.com/users/${username}`);
		if (response.ok) {
			const user = await response.json();
			console.log(user);
		} else {
			throw new Error("Failed to fetch user");
		}
	} catch (error) {
		console.error("Error:", error);
	}
}

fetchUser("mchamoudadev");
```

In this example, the `fetchUser` function fetches user information from the GitHub User API based on the provided username. Here's a breakdown of the code:

- The function is declared as `async` to mark it as an asynchronous function.
- Inside the function, we use `await` to pause the execution until the fetch operation is complete.
- We check if the response is successful using `response.ok`. If it is, we parse the response using `response.json()`, which also returns a Promise. We then return the user data.
- If the response is not successful, we throw an error using `throw new Error()`.
- If an error occurs during the fetch operation or while parsing the response, we catch it in the `catch` block, log the error, and rethrow it to propagate the error to the caller.

Now we will change chaining promises to async/await syntax and see how power full it's

```javascript
function checkInventory(order) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (order.quantity <= 100) {
				resolve(order);
			} else {
				reject("Not enough inventory");
			}
		}, 1000);
	});
}

function processPayment(order) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (order.paymentMethod === "Credit Card") {
				resolve(order);
			} else {
				reject("Unsupported payment method");
			}
		}, 1000);
	});
}

function shipOrder(order) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Order shipped: ${order.item}`);
		}, 1000);
	});
}

let order = {
	item: "Drone",
	quantity: 1,
	paymentMethod: "Credit Card",
};

async function processOrder(order) {
	try {
		await checkInventory(order);
		await processPayment(order);
		const shippingStatus = await shipOrder(order);
		console.log(shippingStatus);
	} catch (error) {
		console.error(error);
	}
}

processOrder(order);
```

We will explore real world projects to see how asynchronous javascript really works .
