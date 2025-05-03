function TicketOptions({
  ticketType,
  setTicketType,
  includeAC,
  setIncludeAC,
  includeTesting,
  setIncludeTesting,
  detailLevel,
  setDetailLevel,
}) {
  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="flex space-x-4">
        <label>
          <input
            type="checkbox"
            checked={includeAC}
            onChange={() => setIncludeAC(!includeAC)}
            className="mr-2"
          />
          Include Acceptance Criteria
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeTesting}
            onChange={() => setIncludeTesting(!includeTesting)}
            className="mr-2"
          />
          Include Testing Notes
        </label>
      </div>

      <div>
        <label className="block mb-1">Ticket Type</label>
        <select
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-gray-100"
        >
          <option>Development</option>
          <option>Design / UI / UX</option>
          <option>QA / Testing</option>
          <option>Research / Investigation</option>
          <option>Business / Product</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Level of Detail</label>
        <select
          value={detailLevel}
          onChange={(e) => setDetailLevel(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-gray-100"
        >
          <option>Brief</option>
          <option>Standard</option>
          <option>Detailed</option>
        </select>
      </div>
    </div>
  );
}

export default TicketOptions;
