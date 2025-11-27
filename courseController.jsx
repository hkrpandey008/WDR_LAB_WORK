import pool from "../db.js";

// Insert Course
export async function insertCourse(req, res) {
    try {
        const { courseid, coursename, duration, min_enrollment, max_enrollment } = req.body;

        const sql = `INSERT INTO course (courseid, coursename, duration, min_enrollment, max_enrollment)
                     VALUES (?, ?, ?, ?, ?)`;

        await pool.query(sql, [courseid, coursename, duration, min_enrollment, max_enrollment]);

        res.json({ message: "Course added successfully!" });
    } catch (err) {
        console.log("Error inserting course", err);
        res.status(500).json({ error: "Failed to insert course" });
    }
}

// Fetch All Courses
export async function fetchCourseList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM course");
        res.json(result);
    } catch (err) {
        console.log("Error fetching course list", err);
        res.status(500).json({ error: "Failed to fetch courses" });
    }
}

// Update Course
export async function updateCourse(req, res) {
    try {
        const { courseid, coursename, duration, min_enrollment, max_enrollment } = req.body;

        const sql = `UPDATE course SET coursename=?, duration=?, min_enrollment=?, max_enrollment=? 
                     WHERE courseid=?`;

        await pool.query(sql, [coursename, duration, min_enrollment, max_enrollment, courseid]);

        res.json({ message: "Course updated successfully!" });
    } catch (err) {
        console.log("Error updating course", err);
        res.status(500).json({ error: "Failed to update course" });
    }
}
