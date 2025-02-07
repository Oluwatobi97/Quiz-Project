import { useState } from "react";
import MenuBar from "../../../components/FormSchema/MeunBar";

interface Question {
  question: string;
  answer: string;
}

export const CreateQuiz: React.FC = () => {
  const [quizName, setQuizName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [timeLimit, setTimeLimit] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const updateQuestion = (
    index: number,
    field: keyof Question,
    value: string
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const submitQuiz = () => {
    const quiz = {
      quizName,
      instructions,
      timeLimit,
      questions,
    };
    console.log("Quiz Submitted:", quiz);
  };
  return (
    <div className="p-2">
      <div className="flex justify-center  items-center px-2 py-3 bg-gray-100 border-b border-gray-300">
        <div className="flex items-center  gap-28">
          <h1 className="font-semibold text-xl text-black">Logo</h1>
          <h1 className="text-xl font-bold ">Create Quiz</h1>
          <MenuBar />
        </div>
      </div>
      <div className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create a Quiz</h2>
        <label>Quiz Name</label>
        <input
          type="text"
          placeholder="Quiz Name"
          className="w-full p-2 border rounded mb-2"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
        <label>Instruction</label>
        <textarea
          placeholder="Instructions"
          className="w-full p-2 border rounded mb-2"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <input
          type="number"
          placeholder="Time Limit (minutes)"
          className="w-full p-2 border rounded mb-4"
          value={timeLimit}
          onChange={(e) => setTimeLimit(Number(e.target.value))}
        />

        <h3 className="text-lg font-semibold">Questions</h3>
        {questions.map((q, index) => (
          <div key={index} className="mb-2 p-2 bg-white rounded shadow">
            <input
              type="text"
              placeholder="Enter question"
              className="w-full p-2 border rounded mb-2"
              value={q.question}
              onChange={(e) =>
                updateQuestion(index, "question", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Enter answer"
              className="w-full p-2 border rounded"
              value={q.answer}
              onChange={(e) => updateQuestion(index, "answer", e.target.value)}
            />
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={addQuestion}
        >
          Add Question
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 ml-2"
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};
