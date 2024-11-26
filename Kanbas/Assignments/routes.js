import * as assignmentsDao from "./dao.js";

export default function AssignmentsRoutes(app) {
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });
    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const {courseId} = req.params;
        const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    });
    app.post("/api/courses/:courseId/assignments", (req, res) => {
        const {courseId} = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });

}