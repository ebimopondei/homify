
import { withErrorHandling } from '@/lib/api-middleware';
import { signupController } from '@/controller';

export const POST = withErrorHandling(signupController)
