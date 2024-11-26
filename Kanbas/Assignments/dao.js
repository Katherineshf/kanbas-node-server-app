import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseId) {
    const {assignments} = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}
export function createAssignment(assignment) {
    const newAssignment = {...assignment, _id: Date.now().toString()};
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}
export function deleteAssignment(assignmentId) {
    const {assignments} = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}
export function updateAssignment(assignmentId, assignmentUpdates) {
    const {assignments} = Database;
    const index = assignments.findIndex(
        (assignment) => assignment._id === assignmentId
    );
    if (index === -1) {
        return null;
    }
    const updatedAssignment = {
        ...assignments[index],
        ...assignmentUpdates
    };
    Database.assignments[index] = updatedAssignment;
    return updatedAssignment;
}