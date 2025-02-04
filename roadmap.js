roadmap.js


const roadmap = [
    {
        day: 1,
        title: "JavaScript Fundamentals I",
        description: "Introduction to JavaScript basics and syntax",
        concepts: ["Variables (var, let, const)", "Data Types", "Basic Operators", "Type Conversion"],
        exercises: [
            {
                title: "Temperature Converter",
                description: "Create a function that converts Celsius to Fahrenheit and vice versa",
                difficulty: "Beginner"
            },
            {
                title: "Simple Calculator",
                description: "Build a calculator that performs basic arithmetic operations",
                difficulty: "Beginner"
            }
        ]
    },
    {
        day: 2,
        title: "Control Flow",
        description: "Learn about conditional statements and loops",
        concepts: ["if/else statements", "switch statements", "for loops", "while loops"],
        exercises: [
            {
                title: "FizzBuzz",
                description: "Write a program that prints numbers 1-100, replacing multiples of 3 with 'Fizz' and 5 with 'Buzz'",
                difficulty: "Beginner"
            },
            {
                title: "Number Guessing Game",
                description: "Create a game where users guess a random number with hints for higher or lower",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        day: 3,
        title: "Functions and Scope",
        description: "Understanding functions, parameters, and variable scope",
        concepts: ["Function Declaration", "Function Expression", "Arrow Functions", "Scope & Closures"],
        exercises: [
            {
                title: "Function Calculator",
                description: "Create a calculator using different types of functions",
                difficulty: "Beginner"
            },
            {
                title: "Counter Closure",
                description: "Create a counter function using closures",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        day: 4,
        title: "Arrays and Array Methods",
        description: "Working with arrays and built-in array methods",
        concepts: ["Array Methods", "map", "filter", "reduce", "forEach"],
        exercises: [
            {
                title: "Array Transformer",
                description: "Practice array methods by transforming data",
                difficulty: "Intermediate"
            },
            {
                title: "Shopping Cart",
                description: "Create a shopping cart with array operations",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        day: 5,
        title: "Objects and Object Methods",
        description: "Understanding objects and their methods",
        concepts: ["Object Literals", "Object Methods", "this Keyword", "Object Destructuring"],
        exercises: [
            {
                title: "Library Catalog",
                description: "Create a library system using objects",
                difficulty: "Intermediate"
            },
            {
                title: "Student Database",
                description: "Build a student management system",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        day: 6,
        title: "DOM Manipulation I",
        description: "Learning to interact with the Document Object Model",
        concepts: ["Selecting Elements", "Modifying Content", "Creating Elements", "Event Handling"],
        exercises: [
            {
                title: "Dynamic List",
                description: "Create a dynamic todo list with DOM manipulation",
                difficulty: "Intermediate"
            },
            {
                title: "Form Validator",
                description: "Build a form with real-time validation",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        day: 7,
        title: "DOM Manipulation II",
        description: "Advanced DOM manipulation techniques",
        concepts: ["Event Delegation", "DOM Traversal", "Data Attributes", "classList Methods"],
        exercises: [
            {
                title: "Accordion Menu",
                description: "Create an expandable accordion menu",
                difficulty: "Intermediate"
            },
            {
                title: "Image Gallery",
                description: "Build an interactive image gallery",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 8,
        title: "Error Handling",
        description: "Managing errors and debugging",
        concepts: ["try/catch", "throw", "Error Types", "Custom Errors"],
        exercises: [
            {
                title: "Form Validation",
                description: "Implement form validation with error handling",
                difficulty: "Intermediate"
            },
            {
                title: "API Error Handler",
                description: "Create a robust error handling system for API calls",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 9,
        title: "Asynchronous JavaScript I",
        description: "Understanding callbacks and promises",
        concepts: ["Callbacks", "Promises", "setTimeout/setInterval", "Event Loop"],
        exercises: [
            {
                title: "Promise Chain",
                description: "Create a chain of promises for sequential operations",
                difficulty: "Intermediate"
            },
            {
                title: "Async Timer",
                description: "Build a countdown timer using promises",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        day: 10,
        title: "Asynchronous JavaScript II",
        description: "Working with async/await and fetch API",
        concepts: ["async/await", "fetch API", "JSON", "HTTP Methods"],
        exercises: [
            {
                title: "Weather App",
                description: "Create a weather app using a weather API",
                difficulty: "Advanced"
            },
            {
                title: "GitHub Profile Viewer",
                description: "Build an app to display GitHub user profiles",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 11,
        title: "ES6+ Features I",
        description: "Modern JavaScript features and syntax",
        concepts: ["Template Literals", "Destructuring", "Spread/Rest Operators", "Default Parameters"],
        exercises: [
            {
                title: "Object Manipulator",
                description: "Practice ES6+ features with object operations",
                difficulty: "Intermediate"
            },
            {
                title: "Array Transformer",
                description: "Transform arrays using modern JavaScript features",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        day: 12,
        title: "ES6+ Features II",
        description: "Advanced ES6+ concepts",
        concepts: ["Classes", "Modules", "Symbol", "Iterators"],
        exercises: [
            {
                title: "Custom Iterator",
                description: "Create a custom iterator for a collection",
                difficulty: "Advanced"
            },
            {
                title: "Module System",
                description: "Build a modular application architecture",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 13,
        title: "Regular Expressions",
        description: "Pattern matching and text manipulation",
        concepts: ["RegExp Patterns", "Metacharacters", "Quantifiers", "Groups"],
        exercises: [
            {
                title: "Form Validator",
                description: "Create a form validator using regex",
                difficulty: "Intermediate"
            },
            {
                title: "Text Parser",
                description: "Build a text parser for specific patterns",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 14,
        title: "Browser Storage",
        description: "Working with different storage options",
        concepts: ["localStorage", "sessionStorage", "Cookies", "IndexedDB"],
        exercises: [
            {
                title: "Note Taking App",
                description: "Create a note-taking app with persistent storage",
                difficulty: "Intermediate"
            },
            {
                title: "Shopping Cart",
                description: "Build a shopping cart with local storage",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 15,
        title: "Object-Oriented Programming I",
        description: "Introduction to OOP concepts",
        concepts: ["Classes", "Constructor", "Properties", "Methods"],
        exercises: [
            {
                title: "Bank Account",
                description: "Create a bank account management system",
                difficulty: "Intermediate"
            },
            {
                title: "Shopping Cart OOP",
                description: "Implement a shopping cart using OOP",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 16,
        title: "Object-Oriented Programming II",
        description: "Advanced OOP concepts",
        concepts: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
        exercises: [
            {
                title: "Shape Calculator",
                description: "Create a geometric shape calculator using inheritance",
                difficulty: "Advanced"
            },
            {
                title: "Vehicle Fleet",
                description: "Build a vehicle fleet management system",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 17,
        title: "Functional Programming I",
        description: "Introduction to functional programming concepts",
        concepts: ["Pure Functions", "Immutability", "First-Class Functions", "Higher-Order Functions"],
        exercises: [
            {
                title: "Array Operations",
                description: "Implement array operations using functional programming",
                difficulty: "Intermediate"
            },
            {
                title: "Data Transformer",
                description: "Create a data transformation pipeline",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 18,
        title: "Functional Programming II",
        description: "Advanced functional programming patterns",
        concepts: ["Composition", "Currying", "Recursion", "Point-Free Style"],
        exercises: [
            {
                title: "Function Composer",
                description: "Create a function composition utility",
                difficulty: "Advanced"
            },
            {
                title: "Data Pipeline",
                description: "Build a complex data processing pipeline",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 19,
        title: "Web APIs I",
        description: "Working with browser APIs",
        concepts: ["Geolocation", "Canvas", "Web Storage", "History API"],
        exercises: [
            {
                title: "Location Tracker",
                description: "Create a location-based application",
                difficulty: "Intermediate"
            },
            {
                title: "Drawing App",
                description: "Build a simple drawing application using Canvas",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 20,
        title: "Web APIs II",
        description: "Advanced browser APIs",
        concepts: ["Web Workers", "Service Workers", "WebSocket", "Push API"],
        exercises: [
            {
                title: "Background Calculator",
                description: "Create a calculator using Web Workers",
                difficulty: "Advanced"
            },
            {
                title: "Chat Application",
                description: "Build a real-time chat using WebSocket",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 21,
        title: "Performance Optimization I",
        description: "Basic performance optimization techniques",
        concepts: ["Code Splitting", "Lazy Loading", "Debouncing", "Throttling"],
        exercises: [
            {
                title: "Image Lazy Loader",
                description: "Implement image lazy loading",
                difficulty: "Intermediate"
            },
            {
                title: "Search Optimizer",
                description: "Create a debounced search function",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 22,
        title: "Performance Optimization II",
        description: "Advanced performance optimization",
        concepts: ["Memory Management", "Virtual DOM", "Web Workers", "Performance API"],
        exercises: [
            {
                title: "Memory Monitor",
                description: "Create a memory usage monitoring tool",
                difficulty: "Advanced"
            },
            {
                title: "Virtual List",
                description: "Implement a virtual scrolling list",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 23,
        title: "Testing I",
        description: "Introduction to testing",
        concepts: ["Unit Testing", "Test Runners", "Assertions", "Test Coverage"],
        exercises: [
            {
                title: "Function Tester",
                description: "Write tests for utility functions",
                difficulty: "Intermediate"
            },
            {
                title: "Calculator Tests",
                description: "Create a test suite for a calculator",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 24,
        title: "Testing II",
        description: "Advanced testing concepts",
        concepts: ["Integration Testing", "E2E Testing", "Mocking", "Stubbing"],
        exercises: [
            {
                title: "API Tester",
                description: "Write tests for API endpoints",
                difficulty: "Advanced"
            },
            {
                title: "Form Testing",
                description: "Create end-to-end tests for forms",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 25,
        title: "Security I",
        description: "Basic security concepts",
        concepts: ["XSS Prevention", "CSRF", "Input Validation", "Content Security"],
        exercises: [
            {
                title: "Input Sanitizer",
                description: "Create an input sanitization utility",
                difficulty: "Intermediate"
            },
            {
                title: "Security Scanner",
                description: "Build a basic security vulnerability scanner",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 26,
        title: "Security II",
        description: "Advanced security practices",
        concepts: ["Authentication", "Authorization", "Encryption", "Security Headers"],
        exercises: [
            {
                title: "Auth System",
                description: "Implement a basic authentication system",
                difficulty: "Advanced"
            },
            {
                title: "Data Encryptor",
                description: "Create a data encryption utility",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 27,
        title: "Design Patterns I",
        description: "Common design patterns",
        concepts: ["Singleton", "Factory", "Observer", "Module"],
        exercises: [
            {
                title: "Theme Manager",
                description: "Implement a theme manager using Singleton",
                difficulty: "Advanced"
            },
            {
                title: "Event System",
                description: "Create an event system using Observer",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 28,
        title: "Design Patterns II",
        description: "Advanced design patterns",
        concepts: ["MVC", "MVVM", "Pub/Sub", "Command"],
        exercises: [
            {
                title: "Todo MVC",
                description: "Build a todo app using MVC pattern",
                difficulty: "Advanced"
            },
            {
                title: "State Manager",
                description: "Create a state management system",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 29,
        title: "Build Tools and Deployment",
        description: "Project building and deployment",
        concepts: ["Webpack", "Babel", "Minification", "Deployment Strategies"],
        exercises: [
            {
                title: "Build System",
                description: "Create a custom build system",
                difficulty: "Advanced"
            },
            {
                title: "Deployment Script",
                description: "Write an automated deployment script",
                difficulty: "Advanced"
            }
        ]
    },
    {
        day: 30,
        title: "Final Project",
        description: "Applying all learned concepts in a comprehensive project",
        concepts: ["Project Planning", "Architecture", "Implementation", "Testing"],
        exercises: [
            {
                title: "E-commerce Platform",
                description: "Build a full-featured e-commerce platform",
                difficulty: "Advanced"
            },
            {
                title: "Social Media App",
                description: "Create a social media application",
                difficulty: "Advanced"
            }
        ]
    }
];