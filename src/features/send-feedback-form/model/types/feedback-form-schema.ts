import { z } from 'zod';

import { FeedbackFormSchema } from '../../lib/consts/feedback-form-schema';

export type FeedbackSchemaType = z.infer<typeof FeedbackFormSchema>;