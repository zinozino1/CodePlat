/**
 * @author 박진호
 * @version 1.0
 * @summary 프로젝트에 쓰이는 상수 변수 정의
 */

// export const SERVER_URL = "http://api.codeplat.co.kr";
export const SERVER_URL = "http://localhost:4000";

export const CLIENT_URL = "http://codeplat.co.kr";

export const EmailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const Locations = [
  { key: "전체", value: "전체" },
  { key: "서울", value: "서울" },
  { key: "경기", value: "경기" },
  { key: "인천", value: "인천" },
  { key: "강원", value: "강원" },
  { key: "충남", value: "충남" },
  { key: "대전", value: "대전" },
  { key: "충북", value: "충북" },
  { key: "부산", value: "부산" },
  { key: "울산", value: "울산" },
  { key: "대구", value: "대구" },
  { key: "경북", value: "경북" },
  { key: "경남", value: "경남" },
  { key: "전남", value: "전남" },
  { key: "광주", value: "광주" },
  { key: "전북", value: "전북" },
  { key: "제주", value: "제주" },
];

export const StackList = {
  language: [
    "JavaScript",
    "HTML/CSS",
    "SQL",
    "Python",
    "Java",
    "Bash/Shell",
    "C#",
    "PHP",
    "TypeScript",
    "C++",
    "C",
    "Go",
    "Kotlin",
    "Ruby",
    "VBA",
    "Swift",
    "R",
    "Rust",
    "Objective-C",
    "Dart",
    "Scala",
    "Perl",
    "Haskell",
    "julia",
  ],
  framework: [
    "JQuery",
    "React.js",
    "Angular.js",
    "ASP.NET",
    "Express",
    "Vue.js",
    "Spring",
    "Django",
    "Flask",
    "Laravel",
    "Ruby on Rails",
    "Gatsby",
    "Node.js",
    ".NET",
    "React Native",
    "Unity 3D",
    "Android",
    "Flutter",
    "Cordorva",
    "Xamarin",
    "Unreal Engine",
  ],
  database: [
    "MySQL",
    "PostgreSQL",
    "Microsoft SQL",
    "SQLite",
    "MongoDB",
    "Redis",
    "MariaDB",
    "Oracle",
    "Firebase",
    "Elasticsearch",
    "DynamoDB",
    "Cassandra",
    "IBM DB2",
  ],
  cloudos: [
    "Linux",
    "Docker",
    "AWS",
    "Raspberry Pi",
    "Azure",
    "WordPress",
    "Kubernetes",
    "Heroku",
    "Arduino",
  ],
  mldl: ["Pandas", "TensorFlow", "Keras", "Torch/PyThoch", "Hadoop", "Spark"],
};
