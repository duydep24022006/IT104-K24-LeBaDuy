const ListCourse = () => {
    const course: string[] = ["HTML", "CSS", "JavaScrip", "ReactJS"];
    return (
        <>
            <h2>Danh sách khóa học</h2>
            <ol>
                {course.map((course,index) => (
                    <li key={index + 1}>
                        { course}
                    </li>
                ))}
            </ol>
        </>
    )
} 
export default ListCourse;
