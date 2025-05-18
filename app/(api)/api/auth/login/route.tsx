import { withErrorHandling } from "@/lib/api-middleware";
import { loginController } from "@/controller";

export const POST = withErrorHandling(loginController)
