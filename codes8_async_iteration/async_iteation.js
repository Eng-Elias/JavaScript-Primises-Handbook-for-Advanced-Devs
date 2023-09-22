async function* asyncGenerator() {
  yield "First";
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating async operation
  yield "Second";
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating async operation
  yield "Third";
}

async function iterateAsync() {
  for await (const item of asyncGenerator()) {
    console.log("Async item:", item);
  }
}

iterateAsync();
