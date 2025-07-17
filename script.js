

const graph = document.getElementById("contribution-graph");
const monthLabels = document.getElementById("month-labels");

const weeks = 47;
const daysInWeek = 7;

const startDate = new Date();
startDate.setDate(startDate.getDate() - (weeks * 7));
const fixedMonths = [
    "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"
  ];
// Your static data (unchanged)
const contributionData = [// May (4 weeks)
    2,1,3,1,0,0,2,  3,2,3,2,1,0,2,  2,0,1,1,0,0,1,  3,3,2,2,1,0,3,
    // Jun
    3,2,3,2,2,0,1,  4,4,3,2,2,1,2,  3,3,2,2,0,1,1,  2,1,3,2,1,0,2,
    // Jul
    1,1,2,2,2,1,2,  3,2,1,0,0,0,1,  2,1,1,1,1,1,2,  2,3,2,2,1,1,0,
    // Aug
    1,2,3,2,1,1,2,  3,4,3,3,2,1,1,  1,0,2,2,1,1,2,  3,2,1,1,0,0,2,
    // Sep
    2,1,1,2,2,1,1,  3,2,1,1,1,0,1,  4,3,2,2,2,2,3,  3,2,1,1,0,0,1,
    // Oct
    2,2,3,3,2,1,2,  3,2,2,1,1,1,2,  3,4,3,2,2,2,2,  1,1,0,1,0,1,0,
    // Nov
    2,3,3,3,2,1,1,  3,3,2,1,1,1,1,  2,1,1,0,0,1,1,  3,3,2,2,2,1,2,
    // Dec
    2,2,1,1,1,1,1,  1,1,1,0,0,1,0,  1,2,2,2,1,0,0,  2,2,1,1,0,1,1,
    // Jan
    2,2,2,2,1,0,1,  2,3,2,2,1,1,1,  3,3,2,2,1,0,0,  1,2,1,1,1,0,1,
    // Feb
    2,2,2,2,1,1,1,  3,3,2,1,1,1,1,  2,1,1,1,1,0,1,  3,3,2,2,1,1,0,
    // Mar
    2,3,2,2,1,1,0,  3,3,3,3,2,2,1,  2,1,1,1,0,0,1,  2,2,1,1,1,1,0,
    // Apr
    // 1,2,2,1,0,0,1,  3,3,2,1,0,1,1
];

let lastMonth = null;

for (let i = 0; i < weeks; i++) {
  const week = document.createElement("div");
  week.classList.add("week");

  const dateForWeek = new Date(startDate);
  dateForWeek.setDate(dateForWeek.getDate() + i * 7);
  const month = dateForWeek.toLocaleString('default', { month: 'short' });

  // Add spacing between months
  if (month !== lastMonth) {
    week.style.marginLeft = "6px"; // Adds space before this week's column
  }

  // Add month label
  if (month !== lastMonth) {
    const label = document.createElement("div");
    label.style.minWidth = "16px";
    label.style.marginLeft = "6px"; // Adds space between month names
    label.textContent = month;
    monthLabels.appendChild(label);
    lastMonth = month;
  } else {
    const spacer = document.createElement("div");
    spacer.style.minWidth = "16px";
    spacer.innerHTML = "&nbsp;";
    monthLabels.appendChild(spacer);
  }

  // Add 7 days in the week
  for (let j = 0; j < daysInWeek; j++) {
    const day = document.createElement("div");
    day.classList.add("day");

    const dayIndex = i * daysInWeek + j;
    const level = contributionData[dayIndex] || 0;
    day.classList.add(`level-${level}`);

    week.appendChild(day);
  }

  graph.appendChild(week);
}
