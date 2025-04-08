import React, { useMemo } from "react";

const Test = React.memo(({ text, setText }) => {
  console.log("Test re-render");

  // Sử dụng useMemo để memoize một phép tính giả lập tốn tài nguyên
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating expensive value...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += text; // Giả lập phép tính nặng
    }
    return result;
  }, [text]); // Chỉ tính toán lại khi text thay đổi

  return (
    <div className="mt-4">
      Test +{text}
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 ml-2 rounded"
        onClick={() => setText(text + 1)}
      >
        Cộng
      </button>
    </div>
  );
});

export default Test;
