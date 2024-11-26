import * as dao from "./dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentsRoutes(app) {
    app.get("/api/courses", (req, res) => {
        const enrolledCourses = dao.findEnrolledForUsers(userId, courseId);
        res.send(enrolledCourses);
    });
    app.delete("/api/courses/:courseId/unenroll", (req, res) => {
        const {courseId} = req.params;
        const {userId} = req.params;
        const status = dao.unenrollUserInCourse(userId, courseId);
        res.send(status);
    });
    app.put("/api/courses/:courseId/enroll", (req, res) => {
        const {courseId} = req.params;
        const {userId} = req.params;
        const status = dao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
}