class UserNotFoundError extends Error {
    constructor(message) {
        super(message || "User not found");
        this.name = "UserNotFoundError";
    }
}
export default UserNotFoundError;
//# sourceMappingURL=UserNotFound.js.map