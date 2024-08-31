import { z } from 'zod';

export const FeedbackFormSchema = z.object({
  name: z.string().min(2, "Please enter a valid name with at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(12, "Please enter a valid message with at least 12 characters"),
});