import * as assignmentsDao from "./dao.js";

export default function AssignmentsRoutes(app) {
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const updatedAssignment = await assignmentsDao.updateAssignment(assignmentId, req.body);
        res.send(updatedAssignment);
    });
    app.get("/api/courses/:courseId/assignments", async (req, res) => {
        const {courseId} = req.params;
        const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    });
    app.post("/api/courses/:courseId/assignments", async (req, res) => {
        const {courseId} = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = await assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });

}