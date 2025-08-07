"use strict";
function getCompletedStudents(course) {
    return course.students.filter(s => s.hasCompleted);
}
function calculateAverageScore(course) {
    const scores = course.students
        .filter(s => typeof s.finalScore === 'number')
        .map(s => s.finalScore);
    if (scores.length === 0)
        return null;
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
function printCourseReport(manager) {
    manager.courses.forEach((course, index) => {
        const completed = getCompletedStudents(course);
        const avgScore = calculateAverageScore(course);
        const status = course.isActive ? "ĐANG MỞ" : "ĐÃ ĐÓNG";
        console.log(`${index + 1}. Khóa: ${course.title} (GV: ${course.instructor})`);
        console.log(`- Tổng học viên: ${course.students.length}`);
        console.log(`- Hoàn thành: ${completed.length} học viên`);
        console.log(`- Trung bình điểm: ${avgScore !== null ? avgScore.toFixed(1) : "N/A"}`);
        console.log(`- Trạng thái: ${status}\n`);
    });
}
const manager = {
    schoolName: "Trung tâm KLTN",
    year: 2025,
    courses: [
        {
            courseId: "C001",
            title: "TypeScript Cơ Bản",
            instructor: "Nguyễn Văn A",
            isActive: true,
            students: [
                { studentId: "S001", name: "An", email: "an@example.com", hasCompleted: true, finalScore: 9 },
                { studentId: "S002", name: "Bình", email: "binh@example.com", hasCompleted: true, finalScore: 8 },
                { studentId: "S003", name: "Chi", email: "chi@example.com", hasCompleted: false }
            ]
        },
        {
            courseId: "C002",
            title: "HTML & CSS",
            instructor: "Trần Thị B",
            isActive: false,
            students: [
                { studentId: "S004", name: "Dũng", email: "dung@example.com", hasCompleted: false },
                { studentId: "S005", name: "Hà", email: "ha@example.com", hasCompleted: false }
            ]
        }
    ]
};
printCourseReport(manager);
