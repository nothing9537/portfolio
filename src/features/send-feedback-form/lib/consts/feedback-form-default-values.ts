import { DefaultValues } from 'react-hook-form';

import { FeedbackSchemaType as FeedbackFormSchemaType } from '../../model/types/feedback-form-schema';

export const FeedbackFormDefaultValues: DefaultValues<FeedbackFormSchemaType> = {
  email: '',
  name: '',
  message: '',
};