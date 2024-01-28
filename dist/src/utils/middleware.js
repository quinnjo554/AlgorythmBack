import { InternalServerError } from "../exceptions/InternalServerError.js";
import UserNotFoundError from "../exceptions/UserErrors/UserNotFound.js";
export function errorHandler(err, req, res, next) {
    if (err instanceof UserNotFoundError) {
        res.status(404).json({ message: err.message });
    }
    else if (err instanceof InternalServerError) {
        res.status(500).json({ message: "Undefined Error message" });
    }
}
//# sourceMappingURL=middleware.js.map