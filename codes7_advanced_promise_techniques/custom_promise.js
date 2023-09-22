class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.error = undefined;

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
      }
    };

    const reject = (error) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.error = error;
      }
    };

    try {
      executor(resolve, reject); // Execute the executor function
    } catch (error) {
      reject(error); // Handle any errors in the executor function
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulfilled(this.value); // Invoke the onFulfilled handler
    } else if (this.status === "rejected") {
      onRejected(this.error); // Invoke the onRejected handler
    }
  }
}

const myPromise = new MyPromise((resolve, reject) => {
  resolve("Custom Promise resolved");
});

myPromise.then((value) => {
  console.log(value); // Output: Custom Promise resolved
});
