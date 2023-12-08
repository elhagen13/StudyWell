import mut from "./testing.js"; // MUT = Module Under Test

test("Testing createPortfolio -- success", () => {
  const expected = new Map();
  const got = new mut.Portfolio();
  expect(got.getPortfolio()).toEqual(expected);
});

test("Testing empty portfolio -- success", () => {
  const expected = true;
  const testMap = new mut.Portfolio();
  const got = testMap.isEmpty();
  expect(got).toBe(expected);
});

test("Testing ticker count -- success", () => {
  const testPort = new mut.Portfolio();
  testPort.getPortfolio().set("googl", 1);
  testPort.getPortfolio().set("amzn", 3);
  const expected = 2;
  const got = testPort.getTickerCount();
  expect(got).toEqual(expected);
});

test("Testing purhase -- success", () => {
  const testPort = new mut.Portfolio();
  testPort.purchase("meta", 5);
  testPort.purchase("meta", 6);
  testPort.purchase("appl", 6);

  const expectedMap = new Map();
  expectedMap.set("meta", 5);
  expectedMap.set("meta", 6);
  expectedMap.set("appl", 6);

  for (const [symbol, shares] of testPort.getPortfolio()) {
    expect(expectedMap.get(symbol)).toEqual(shares);
  }
});

test("Testing sell -- success", () => {
  const testPort = new mut.Portfolio();
  testPort.purchase("meta", 6);
  testPort.purchase("appl", 6);
  testPort.sell("appl", 3);

  const expectedMap = new Map();
  expectedMap.set("meta", 6);
  expectedMap.set("appl", 3);

  // convert maps to arrays of key-value pairs
  const testArray = Array.from(testPort.getPortfolio());
  const expectedArray = Array.from(expectedMap);

  // sort arrays
  testArray.sort();
  expectedArray.sort();

  expect(testArray).toEqual(expectedArray);
});

test("Testing get num sales -- Success", () => {
  const testPort = new mut.Portfolio();
  testPort.purchase("meta", 6);
  const got = testPort.getNumShares("meta");
  const expected = 6;
  expect(got).toEqual(expected);
});

test("Testing if no shares -- Success", () => {
  const testPort = new mut.Portfolio();
  testPort.purchase("meta", 1);
  testPort.sell("meta", 1);
  const expected = false;
  const got = testPort.getPortfolio().has("meta");
  expect(got).toEqual(expected);
});

test("Testing selling too many shares -- Success", () => {
  const testPort = new mut.Portfolio();
  testPort.purchase("meta", 1);
  try {
    testPort.sell("meta", 2);
    // if doesn't throw an exception, fail the test
    fail("Expected ShareSaleException to be thrown");
  } catch (error) {
    expect(error).toBeInstanceOf(mut.ShareSaleException);
  }
});
