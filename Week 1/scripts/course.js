const courses = [
  {
    code: "WDD 130",
    name: "Web Fundamentals",
    credits: 2,
    subject: "WDD",
    completed: true
  },
  {
    code: "WDD 131",
    name: "Dynamic Web Fundamentals",
    credits: 2,
    subject: "WDD",
    completed: true
  },
  {
    code: "WDD 231",
    name: "Web Frontend Development I",
    credits: 2,
    subject: "WDD",
    completed: false
  },
  {
    code: "CSE 110",
    name: "Programming Building Blocks",
    credits: 2,
    subject: "CSE",
    completed: true
  },
  {
    code: "CSE 111",
    name: "Programming with Functions",
    credits: 2,
    subject: "CSE",
    completed: true
  },
  {
    code: "CSE 210",
    name: "Programming with Classes",
    credits: 2,
    subject: "CSE",
    completed: false
  }
];

const container = document.getElementById("course-container");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(courseList) {
  container.innerHTML = "";

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;

    container.appendChild(card);
  });

  const total = courseList.reduce((sum, course) => sum + course.credits, 0);
  totalCredits.textContent = total;
}

document.getElementById("allBtn").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wddBtn").addEventListener("click", () => {
  const filtered = courses.filter(course => course.subject === "WDD");
  displayCourses(filtered);
});

document.getElementById("cseBtn").addEventListener("click", () => {
  const filtered = courses.filter(course => course.subject === "CSE");
  displayCourses(filtered);
});

displayCourses(courses);