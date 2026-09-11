// ==========================================
// DỮ LIỆU BAN ĐẦU
// ==========================================
const people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
];

const array = [1, 2, 3, 4];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: { street: "Lalaland 12" }
};

// ==========================================
// XỬ LÝ MẢNG PEOPLE
// ==========================================
// Tìm người đầu tiên là teenager (age >=10 and age <=20)
const firstTeen = people.find(p => p.age >= 10 && p.age <= 20);
console.log("First teenager:", firstTeen);

// Tìm tất cả người là teenager
const allTeens = people.filter(p => p.age >= 10 && p.age <= 20);
console.log("All teenagers:", allTeens);

// Kiểm tra xem MỌI người có phải là teenager không
const isEveryTeen = people.every(p => p.age >= 10 && p.age <= 20);
console.log("Is everyone a teenager?", isEveryTeen); // false

// Kiểm tra xem có BẤT KỲ người nào là teenager không
const isAnyTeen = people.some(p => p.age >= 10 && p.age <= 20);
console.log("Is anyone a teenager?", isAnyTeen); // true

// ==========================================
// XỬ LÝ MẢNG ARRAY
// ==========================================
// Dùng reduce và arrow function tính tổng
const sumArray = array.reduce((acc, current) => acc + current, 0);
console.log("Sum of array:", sumArray);

// ==========================================
// XỬ LÝ MẢNG COMPANIES VÀ AGES
// ==========================================
// In tên của từng company bằng forEach
console.log("Company Names:");
companies.forEach(company => console.log(company.name));

// In tên công ty bắt đầu sau 1987
console.log("Companies started after 1987:");
companies.filter(c => c.start > 1987).forEach(c => console.log(c.name));




// Component xử lý mảng và render bằng JSX
const RetailCompanies = () => {
  // ES6: Lọc công ty Retail và tăng start thêm 1
  const retailCompanies = companies
    .filter(c => c.category === "Retail")
    .map(c => ({ ...c, start: c.start + 1 }));

  return (
    <div style={{ margin: '20px', width: '800px' }}>
      {/* JSX: Lặp qua mảng đã xử lý để render ra giao diện */}
      {retailCompanies.map((company, index) => (
        <div key={index} style={{ 
          display: 'flex', 
          border: '1px solid #ccc', 
          marginBottom: '5px' 
        }}>
          <p style={{ flex: 2, padding: '10px', margin: 0, borderRight: '1px solid #ccc', fontWeight: 'bold', textAlign: 'center' }}>
            {company.name}
          </p>
          <p style={{ flex: 1, padding: '10px', margin: 0, borderRight: '1px solid #ccc', textAlign: 'center', fontWeight: 'bold' }}>
            {company.start}
          </p>
          <p style={{ flex: 1, padding: '10px', margin: 0, textAlign: 'center', fontWeight: 'bold' }}>
            {company.end}
          </p>
        </div>
      ))}
    </div>
  );
};


// Thêm RetailCompanies vào App
export default function ListOfRetail() {
  return (
    <div>
      {/* Các component khác */}
      <RetailCompanies />
    </div>
  );
}


// Sắp xếp companies theo end date tăng dần
const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);
console.log("Companies sorted by end date:", sortedCompanies);

// Sắp xếp ages giảm dần
const sortedAges = [...ages].sort((a, b) => b - a);
console.log("Ages sorted descending:", sortedAges);

// In tổng ages dùng reduce
const sumAges = ages.reduce((acc, age) => acc + age, 0);
console.log("Sum of ages:", sumAges);

// Tạo object mới từ companies[0] bằng destructuring
const { name, category } = companies[0];
const newCompany = {
  name,
  category,
  print() {
    console.log(`Name: ${this.name}`);
  }
};
newCompany.print();

// ==========================================
// HÀM & DESTRUCTURING & REST PARAMETERS
// ==========================================
// Hàm tính tổng số lượng tham số không xác định
const sumArguments = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log("Sum of arguments (1,2,3,4):", sumArguments(1, 2, 3, 4));

// Hàm nhận nhiều loại tham số khác nhau, gom thành 1 mảng
const flattenMixArgs = (...args) => {
  return args.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? val : [val]);
  }, []);
};
console.log("Flatten array:", flattenMixArgs(1, [2, 3], "test", [4, 5]));

// Destructuring thuộc tính street từ object person
const { address: { street } } = person;
console.log("Street destructured:", street);

// Hàm đếm số (Closure) tăng dần từ 0
const createIncrementCounter = () => {
  let count = 0;
  return () => count++;
};
const increment = createIncrementCounter();
console.log("Increment:", increment(), increment(), increment()); // 0, 1, 2

// Hàm destructor query parameters từ URL
const getQueryParams = (urlStr) => {
  const urlParams = new URL(urlStr).searchParams;
  return Object.fromEntries(urlParams.entries());
};
console.log("Query params object:", getQueryParams("http://example.com?page=1&sort=desc"));

// ==========================================
// CLASSES (HƯỚNG ĐỐI TƯỢNG)
// ==========================================
class Shape {
  constructor(color) {
    this.color = color;
  }
  getArea() {
    return 0;
  }
  toString() {
    return `Shape with color ${this.color}`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  toString() {
    return `Rectangle length ${this.length}, width ${this.width}, color ${this.color}`;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
  toString() {
    return `Triangle base ${this.base}, height ${this.height}, color ${this.color}`;
  }
}

// ==========================================
// PROMISES
// ==========================================
const randomNumberPromise = new Promise((resolve, reject) => {
  const randNum = Math.floor(Math.random() * 10) + 1; // Random từ 1 đến 10
  if (randNum > 5) {
    resolve(randNum);
  } else {
    reject("Error");
  }
});

randomNumberPromise
  .then(num => console.log(`Success! The number is ${num}`))
  .catch(err => console.log(err));