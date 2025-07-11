import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Title from "../../../Components/Shared/Title";

const sampleEntries = [
  {
    id: "#987598",
    date: "26/02/2025",
    scores: Array.from({ length: 10 }, () => ({
      teamA: "chelsea.png",
      scoreA: "01",
      scoreB: "02",
      teamB: "manchester.png",
    })),
  },
  {
    id: "#123456",
    date: "03/03/2025",
    scores: Array.from({ length: 10 }, () => ({
      teamA: "chelsea.png",
      scoreA: "01",
      scoreB: "02",
      teamB: "manchester.png",
    })),
  },
  {
    id: "#789101",
    date: "10/03/2025",
    scores: Array.from({ length: 10 }, () => ({
      teamA: "chelsea.png",
      scoreA: "01",
      scoreB: "02",
      teamB: "manchester.png",
    })),
  },
  {
    id: "#789601",
    date: "10/03/2025",
    scores: Array.from({ length: 10 }, () => ({
      teamA: "chelsea.png",
      scoreA: "01",
      scoreB: "02",
      teamB: "manchester.png",
    })),
  },
];

const ITEMS_PER_PAGE = 1;

const PredectionDetails = () => {
  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(sampleEntries);
  const totalPages = Math.ceil(entries.length / ITEMS_PER_PAGE);

  const handlePageChange = (num) => {
    if (num >= 1 && num <= totalPages) setPage(num);
  };

  const handleScoreChange = (entryIndex, scoreIndex, key, value) => {
    const updatedEntries = [...entries];
    updatedEntries[entryIndex].scores[scoreIndex][key] = value;
    setEntries(updatedEntries);
  };

  const currentEntry = entries.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )[0];

  return (
    <div className="min-h-screen px-6 pt-20 flex flex-col lg:flex-row gap-8 ">
      {/* Left side - Info */}
      <div className="w-full lg:w-1/3">
        <Title className="my-6">See Prediction</Title>
        <div className="text-sm space-y-3">
          {[
            { label: "Name", value: "Samuel Johnsons" },
            { label: "E-mail", value: "samuel56@gmail.com" },
            { label: "Location", value: "London,England" },
            { label: "Week", value: "Week - 13" },
            {
              label: "Score",
              value: (
                <>
                  <span className="text-red-500">6</span>
                  <span className="text-[#0B3666]">/10</span>
                </>
              ),
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 min-w-[220px]">
              <span className="font-semibold text-[#0B3666] w-24">
                {item.label}
              </span>
              <span className="font-semibold text-[#0B3666]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Entries */}
      <div className="w-full flex flex-col justify-start items-start lg:w-2/3">
        <div>
          {/* top side */}
          <div className="flex flex-col lg:flex-row mb-4">
            <Title className="">Entries</Title>
            <div className="lg:ml-6">
              <p className="text-2xl font-semibold text-[#000000]">
                Entry - {currentEntry?.date}
              </p>
              <p className="text-2xl font-semibold text-black">
                Transaction Id - {currentEntry?.id}
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-md w-fit p-6 shadow-md">
            <Title className="pb-4">Scores</Title>
            {currentEntry?.scores?.map((score, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img
                  src={`/${score.teamA}`}
                  alt="Team A"
                  className="w-8 h-8"
                />

                {/* Score A */}
                <select
                  className="px-2 py-1 rounded bg-[linear-gradient(to_right,#905e26_0%,#f5ec9b_50%,#905e26_100%)] text-[#0B3666] text-sm"
                  value={score.scoreA}
                  onChange={(e) =>
                    handleScoreChange(page - 1, idx, "scoreA", e.target.value)
                  }
                >
                  <option value={score.scoreA}>{score.scoreA}</option>
                  {["01", "02", "03"]
                    .filter((opt) => opt !== score.scoreA)
                    .map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                </select>

                <span className="text-[#0B3666] font-medium">:</span>

                {/* Score B */}
                <select
                  className="px-2 py-1 rounded bg-[linear-gradient(to_right,#905e26_0%,#f5ec9b_50%,#905e26_100%)] text-[#0B3666] text-sm"
                  value={score.scoreB}
                  onChange={(e) =>
                    handleScoreChange(page - 1, idx, "scoreB", e.target.value)
                  }
                >
                  <option value={score.scoreB}>{score.scoreB}</option>
                  {["01", "02", "03"]
                    .filter((opt) => opt !== score.scoreB)
                    .map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                </select>

                <img
                  src={`/${score.teamB}`}
                  alt="Team B"
                  className="w-8 h-8"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-start mx-auto mt-6 gap-3">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="w-8 h-8 rounded-full flex items-center justify-center shadow disabled:opacity-50 cursor-pointer"
            >
              <LeftOutlined className="text-[#0B3666] text-xs" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`w-8 h-8 gap-2 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer transition ${
                  page === idx + 1
                    ? "bg-[#0B3666] !text-white"
                    : "bg-transparent text-[#0B3666]"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="w-8 h-8 cursor-pointer rounded-full bg-white flex items-center justify-center shadow disabled:opacity-50"
            >
              <RightOutlined className="text-[#0B3666] text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredectionDetails;
