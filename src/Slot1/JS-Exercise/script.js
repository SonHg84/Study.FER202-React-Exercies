// 1. Create a Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 2. Create a Student class that extends Person
class Student extends Person {
    constructor(name, age, scores = []) {
        super(name, age);
        this.scores = scores;
    }

    // Tính điểm trung bình (Sử dụng reduce - Yêu cầu 6)
    calculateAverageScore() {
        if (this.scores.length === 0) return 0;
        const totalScore = this.scores.reduce((total, currentScore) => total + currentScore, 0);
        return totalScore / this.scores.length;
    }

    // Hiển thị đầy đủ thông tin sinh viên
    displayFullInfo() {
        this.introduce();
        console.log(`Scores: [${this.scores.join(', ')}]`);
        console.log(`Average Score: ${this.calculateAverageScore().toFixed(2)}`);
    }

    // Thêm điểm mới vào danh sách (Sử dụng Spread Operator - Yêu cầu 5)
    addScores(newScores) {
        this.scores = [...this.scores, ...newScores];
    }
}

// 3. Use Rest Parameter
// Hàm nhận vào nhiều giá trị điểm và trả về một mảng
const createScores = (...scores) => {
    return scores;
};

/*
    Thực thi các yêu cầu viết ra console của trình duyệt.
*/

// Khởi tạo danh sách điểm bằng Rest Parameter (Yêu cầu 3)
const initialScores = createScores(7, 8, 9);
const student1 = new Student("Alice", 20, initialScores);

console.log("--- 1 & 2. Class Person & Student ---");
student1.displayFullInfo();

// 4. Use Destructuring
// Trích xuất name và age từ object student1
const { name : fullName, age } = student1;
console.log("\n--- 4. Destructuring ---");
console.log(`Extracted Name: ${fullName}, Age: ${age}`);

// 5. Use Spread Operator
// Nối các điểm số mới vào danh sách điểm hiện tại
const extraScores = [10, 9];
student1.addScores(extraScores);
console.log("\n--- 5. Spread Operator (Thêm điểm) ---");
console.log(`Updated Scores: [${student1.scores}]`);

// 6. Use Array Methods
console.log("\n--- 6. Array Methods ---");
// Lọc các điểm đạt (ví dụ: >= 8) bằng filter()
const passingScores = student1.scores.filter(score => score >= 8);
console.log(`Passing Scores (>= 8): [${passingScores}]`);

// Xử lý dữ liệu điểm bằng map() (Ví dụ: quy đổi sang thang điểm 100)
const scaledScores = student1.scores.map(score => score * 10);
console.log(`Mapped Scores (Scale to 100): [${scaledScores}]`);

// 7. Use Promise
// Giả lập quá trình đánh giá học lực bất đồng bộ
// Đây chính là một arrow function
const evaluateAcademicPerformance = (averageScore) => {
    return new Promise((resolve) => {
        console.log("\n--- 7. Promise (Evaluating) ---");
        console.log("Processing academic performance...");

        setTimeout(() => {
            if (averageScore >= 8) {
                resolve("Excellent Student");
            } else {
                resolve("Need Improvement");
            }
        }, 100);
    });
};

// Cách 1: Dùng promise chain
const currentAverage = student1.calculateAverageScore();
evaluateAcademicPerformance(currentAverage)
    .then(evaluationResult => {
        console.log(`Result: ${evaluationResult}`);
    })
    .catch(error => {
        console.error("Error during evaluation:", error);
    });

// Cách 2: Xử dung async/wait
async function EvaluatingByAsync() {
    try {
        const currentAverage = student1.calculateAverageScore();
        const check = await evaluateAcademicPerformance(currentAverage);
        console.log(`[Async/Await] Result: ${check}`);
    } catch (error) {
        console.error("[Thất bại]", error);
    } finally {
        console.log("[Hoàn tất] Kết thúc quá trình truy vấn dữ liệu.\n");
    }
}

EvaluatingByAsync();
