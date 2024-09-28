const posts = [
  {
    _id: "1",
    question: "How to manage state in React?",
    tags: [
      { _id: "1", name: "ReactJS" },
      { _id: "2", name: "State Management" },
      { _id: "3", name: "Hooks" },
    ],
    author: {
      _id: "user123",
      name: "User 123",
      pic: "/assets/images/dp.png", // Example picture path
    },
    views: 120,
    answers: [], // Changed to an empty array as per the interface
    upVotes: 15252222,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  },
  {
    _id: "2",
    question: "What are the benefits of using Next.js?",
    tags: [
      { _id: "4", name: "NextJS" },
      { _id: "5", name: "Framework" },
      { _id: "6", name: "SSR" },
    ],
    author: {
      _id: "devGuru",
      name: "Dev Guru",
      pic: "/assets/images/dp.png"
    },
    views: 80,
    answers: [],
    upVotes: 10,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
  {
    _id: "3",
    question: "How to optimize performance in a React app?",
    tags: [
      { _id: "7", name: "ReactJS" },
      { _id: "8", name: "Performance" },
      { _id: "9", name: "Optimization" },
    ],
    author: {
      _id: "coderX",
      name: "Coder X",
      pic: "/assets/images/dp.png"
    },
    views: 150,
    answers: [],
    upVotes: 20,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
  },
  {
    _id: "4",
    question: "What is the difference between var, let, and const?",
    tags: [
      { _id: "10", name: "JavaScript" },
      { _id: "11", name: "ES6" },
      { _id: "12", name: "Variables" },
    ],
    author: {
      _id: "jsNinja",
      name: "JS Ninja",
      pic: "/assets/images/dp.png"
    },
    views: 200,
    answers: [],
    upVotes: 30,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
  {
    _id: "5",
    question: "How to handle API calls in Node.js?",
    tags: [
      { _id: "13", name: "NodeJS" },
      { _id: "14", name: "API" },
      { _id: "15", name: "Backend" },
    ],
    author: {
      _id: "nodeMaster",
      name: "Node Master",
      pic: "/assets/images/dp.png"
    },
    views: 90,
    answers: [],
    upVotes: 5,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    _id: "6",
    question: "What are React Hooks?",
    tags: [
      { _id: "16", name: "ReactJS" },
      { _id: "17", name: "Hooks" },
      { _id: "18", name: "Functional Components" },
    ],
    author: {
      _id: "hookedDev",
      name: "Hooked Dev",
      pic: "/assets/images/dp.png"
    },
    views: 110,
    answers: [],
    upVotes: 25,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
  },
];

export default posts;
