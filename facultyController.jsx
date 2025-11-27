import pool from "../db.js";

// Create Faculty
export async function createFaculty(req, res) {
    try {
        const { facultyid, facultyname, age, dob, qualification } = req.body;

        const sql = `INSERT INTO faculty (facultyid, facultyname, age, dob, qualification)
                     VALUES (?, ?, ?, ?, ?)`;

        await pool.query(sql, [facultyid, facultyname, age, dob, qualification]);

        res.json({ message: "Faculty created successfully!" });
    } catch (err) {
        console.log("Error creating faculty", err);
        res.status(500).json({ error: "Failed to create faculty" });
    }
}

// Fetch All Faculty
export async function fetchFacultyList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM faculty");
        res.json(result);
    } catch (err) {
        console.log("Error fetching faculty list", err);
        res.status(500).json({ error: "Failed to fetch faculty list" });
    }
}

// Update Faculty
export async function updateFaculty(req, res) {
    try {
        const { facultyid, facultyname, age, dob, qualification } = req.body;

        const sql = `UPDATE faculty SET facultyname=?, age=?, dob=?, qualification=? 
                     WHERE facultyid=?`;

        await pool.query(sql, [facultyname, age, dob, qualification, facultyid]);

        res.json({ message: "Faculty updated successfully!" });
    } catch (err) {
        console.log("Error updating faculty", err);
        res.status(500).json({ error: "Failed to update faculty" });
    }
}
