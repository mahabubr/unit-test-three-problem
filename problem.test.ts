import { it, expect, describe, vi } from "vitest";
import {
  divide,
  executeCallback,
  fetchData,
  fetchDataWithError,
} from "./problem";

describe("Problem1()", () => {
  it("Should Valid Division", () => {
    const a = 10;
    const b = 2;

    const result = divide(a, b);

    expect(result).toBe(5);
  });

  it("Should Valid Division with Negative Numbers", () => {
    const a = -10;
    const b = 2;

    const result = divide(a, b);

    expect(result).toBe(-5);
  });

  it("Should Division by Zero", () => {
    const a = 5;
    const b = 0;

    const result = () => divide(a, b);

    expect(result).toThrowError("Division by zero");
  });
});

describe("Problem2()", () => {
  it("Callback Execution", () => {
    const result = vi.fn();

    executeCallback(result, "Test Task");

    expect(result).toHaveBeenCalled();
  });

  it("Callback Execution with Task Text", () => {
    const result = vi.fn();
    const taskText = "Buy groceries";

    executeCallback(result, taskText);

    expect(result).toHaveBeenCalledWith(taskText);
  });
});

describe("Problem3()", () => {
  it("Successful Data Fetch", async () => {
    const data = { name: "John", age: 30 };

    const result = await fetchData();

    expect(result).toEqual(data);
  });

  it("Error Handling", async () => {
    const expectedErrorMessage = "Rejection Error";

    const result = fetchDataWithError();

    await expect(result).rejects.toThrowError(expectedErrorMessage);
  });
});
