function toNumber(value: string): number | null {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Không thể chia cho 0.");
  return a / b;
}

function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

function sqrt(base: number, root: number): number {
  if (root === 0) throw new Error("Không thể lấy căn bậc 0.");
  return Math.pow(base, 1 / root);
}

function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) throw new Error("Giai thừa chỉ áp dụng cho số nguyên không âm.");
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculate(operator: string) {
  const input1 = document.getElementById("input1") as HTMLInputElement;
  const input2 = document.getElementById("input2") as HTMLInputElement;
  const resultEl = document.getElementById("result") as HTMLElement;

  const val1 = toNumber(input1.value);
  const val2 = toNumber(input2.value);

  try {
    let result: number;

    switch (operator) {
      case "+":
        if (val1 === null || val2 === null) throw new Error("Nhập số hợp lệ.");
        result = add(val1, val2);
        break;
      case "-":
        if (val1 === null || val2 === null) throw new Error("Nhập số hợp lệ.");
        result = subtract(val1, val2);
        break;
      case "*":
        if (val1 === null || val2 === null) throw new Error("Nhập số hợp lệ.");
        result = multiply(val1, val2);
        break;
      case "/":
        if (val1 === null || val2 === null) throw new Error("Nhập số hợp lệ.");
        result = divide(val1, val2);
        break;
      case "^":
        if (val1 === null || val2 === null) throw new Error("Nhập số hợp lệ.");
        result = power(val1, val2);
        break;
      case "√":
        if (val1 === null || val2 === null) throw new Error("Nhập số hợp lệ.");
        result = sqrt(val1, val2);
        break;
      case "!":
        if (val1 === null) throw new Error("Nhập số hợp lệ cho input 1.");
        result = factorial(val1);
        break;
      default:
        throw new Error("Phép tính không hợp lệ.");
    }

    resultEl.textContent = "Kết quả: " + result;
  } catch (error: any) {
    resultEl.textContent = "Lỗi: " + error.message;
  }
}
