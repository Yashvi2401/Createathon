import React from "react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "Alice", score: 1500 },
    { rank: 2, name: "Bob", score: 1350 },
    { rank: 3, name: "Charlie", score: 1200 },
    { rank: 4, name: "David", score: 1100 },
    { rank: 5, name: "Eva", score: 1000 },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold text-center mb-3">Leaderboard</h2>
      <table className="w-full border text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Rank</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <tr key={player.rank} className="border">
              <td className="p-2 border">{player.rank}</td>
              <td className="p-2 border">{player.name}</td>
              <td className="p-2 border">{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
