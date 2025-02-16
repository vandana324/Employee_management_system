
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Design Homepage",
        "taskDescription": "Create a responsive homepage layout.",
        "taskDate": "2025-02-10",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve authentication issues.",
        "taskDate": "2025-02-12",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Dashboard",
        "taskDescription": "Enhance UI with new charts.",
        "taskDate": "2025-02-15",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Vivaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Optimize Database",
        "taskDescription": "Improve query performance.",
        "taskDate": "2025-02-11",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review PRs for new feature.",
        "taskDate": "2025-02-14",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Marketing Campaign",
        "taskDescription": "Plan social media strategy.",
        "taskDate": "2025-02-18",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project roadmap.",
        "taskDate": "2025-02-19",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Reyansh",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Check for vulnerabilities.",
        "taskDate": "2025-02-13",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Deploy App",
        "taskDescription": "Push latest release to production.",
        "taskDate": "2025-02-16",
        "category": "DevOps",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Aadhya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Customer Support",
        "taskDescription": "Resolve pending tickets.",
        "taskDate": "2025-02-20",
        "category": "Support",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Documentation",
        "taskDescription": "Update API reference.",
        "taskDate": "2025-02-22",
        "category": "Technical Writing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const Admin = [
{
  "id": 1,
  "firstName": "Ananya",
  "email": "admin@example.com",
  "password": "123"
}
];

export const setLocalStorage = () => {
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('Admin', JSON.stringify(Admin));
};

export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employees'));
const Admin = JSON.parse(localStorage.getItem('Admin'));

return { employees, Admin };
};
