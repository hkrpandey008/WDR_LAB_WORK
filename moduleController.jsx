import pool from "../db.js";

// Create Module
export async function createModule(req, res) {
    try {
        const { moduleid, modulename, courseid, duration } = req.body;

        const sql = `INSERT INTO modules (moduleid, modulename, courseid, duration)
                     VALUES (?, ?, ?, ?)`;

        await pool.query(sql, [moduleid, modulename, courseid, duration]);

        res.json({ message: "Module created successfully!" });
    } catch (err) {
        console.log("Error creating module", err);
        res.status(500).json({ error: "Failed to create module" });
    }
}
