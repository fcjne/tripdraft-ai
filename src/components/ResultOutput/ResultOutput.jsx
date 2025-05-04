import ReactMarkdown from "react-markdown";

function ResultOutput({ result }) {
  if (!result) return null;

  return (
    <div className="w-full max-w-2xl mt-6 p-4 bg-gray-800 rounded shadow text-gray-100 space-y-4">
      <ReactMarkdown>{result}</ReactMarkdown>
    </div>
  );
}

export default ResultOutput;
