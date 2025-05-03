import { useState, useCallback } from "react";
import TicketOptions from "./components/TicketOptions";
import ResultOutput from "./components/ResultOutput";
import Button from "./components/UI/Button";

function App() {
  const [input, setInput] = useState("");
  const [ticketType, setTicketType] = useState("Development");
  const [includeAC, setIncludeAC] = useState(true);
  const [includeTesting, setIncludeTesting] = useState(false);
  const [detailLevel, setDetailLevel] = useState("Standard");
  const [ticketDescription, setTicketDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = useCallback(async () => {
    setLoading(true);
    setTicketDescription("");
    setError("");
    const payload = {
      prompt: input,
      ticketType,
      includeAC,
      includeTesting,
      detailLevel,
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.description) {
        setTicketDescription(data.description);
      } else {
        setTicketDescription("No description received.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to connect to the server.");
    }
    setLoading(false);
  }, [input, ticketType, includeAC, includeTesting, detailLevel]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-2xl font-bold text-blue-400">
          TripDraft AI — Ticket Generator
        </h1>
        <p className="text-gray-400">
          Helps you find the right words when you’re unsure how to start your
          ticket description.
        </p>
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a short summary of the task..."
        className="w-full max-w-2xl p-3 border border-gray-700 rounded bg-gray-800 text-gray-100 mb-4 resize-y min-h-[100px]"
      />

      <TicketOptions
        ticketType={ticketType}
        setTicketType={setTicketType}
        includeAC={includeAC}
        setIncludeAC={setIncludeAC}
        includeTesting={includeTesting}
        setIncludeTesting={setIncludeTesting}
        detailLevel={detailLevel}
        setDetailLevel={setDetailLevel}
      />

      <Button onClick={handleGenerate} disabled={!input.trim() || loading}>
        {loading ? "Generating..." : "Generate Ticket"}
      </Button>

      {error && (
        <div className="w-full max-w-2xl mt-6 p-4 bg-red-700 rounded shadow text-gray-100">
          {error}
        </div>
      )}

      <ResultOutput result={ticketDescription} />
    </div>
  );
}

export default App;
