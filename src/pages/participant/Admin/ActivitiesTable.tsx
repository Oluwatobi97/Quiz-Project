import React from "react";

interface Activity {
  type: string;
  participants: number;
  duration: string;
}

const activities: Activity[] = [
  { type: "Bible Quiz", participants: 10, duration: "15s" },
  { type: "Math", participants: 50, duration: "1hr" },
  { type: "Promotion Exam", participants: 100, duration: "30min" },
  { type: "Chemistry", participants: 20, duration: "1:30hr" },
  { type: "English", participants: 150, duration: "2hr" },
];

const ActivitiesTable: React.FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-lg font-semibold mb-4">Activities:</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Participants
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border border-gray-300 px-4 py-2">
                {activity.type}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {activity.participants}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {activity.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ActivitiesTable;
