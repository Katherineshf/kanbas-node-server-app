import * as dao from "./dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentsRoutes(app) {
    app.post("/api/enrollments", async (req, res) => {
        const { userId, courseId } = req.body;
        await enrollmentDao.enrollUserInCourse(userId, courseId);
        const updatedEnrollments = await enrollmentsDao.findCoursesForUser(userId);
        res.status(201).json(updatedEnrollments);
    });

    app.delete("/api/enrollments", async (req, res) => {
        const { userId, courseId } = req.body;
        await enrollmentDao.unenrollUserFromCourse(userId, courseId);
        const updatedEnrollments = await enrollmentsDao.findCoursesForUser(userId);
        res.status(200).json(updatedEnrollments);
    });

    app.get("/api/enrollments/:userId", async (req, res) => {
        const { userId } = req.params;
        const enrollments = await enrollmentsDao.findCoursesForUser(userId);
        res.json(enrollments);
    });

    app.get("/api/courses", async (req, res) => {
        const allCourses = await enrollmentsDao.findAllCourses();
        res.json(allCourses);
    });
}