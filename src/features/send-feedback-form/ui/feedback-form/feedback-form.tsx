import { ReactNode, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from 'lucide-react';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import { FormFieldWrapper } from '@/shared/lib/components/form-factory';

import { FeedbackSchemaType } from '../../model/types/feedback-form-schema';
import { FeedbackFormSchema } from '../../lib/consts/feedback-form-schema';
import { onFeedbackFormSubmit } from '../../services/handle-submit/handle-submit';

export const FeedbackForm = (): ReactNode => {
  const form = useForm<FeedbackSchemaType>({
    resolver: zodResolver(FeedbackFormSchema),
    mode: "all"
  });

  const onClearForm = useCallback(() => {
    form.reset();
    form.setValue('name', '');
    form.setValue('email', '');
    form.setValue('message', '');
  }, [form]);

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={form.handleSubmit(onFeedbackFormSubmit)}
    >
      <FormFieldWrapper form={form} name="name" label="Your Name">
        {({ field }, id) => (
          <Input
            id={id}
            placeholder="What's your name?"
            disabled={form.formState.isSubmitting}
            {...field}
          />
        )}
      </FormFieldWrapper>
      <FormFieldWrapper form={form} name="email" label="Your Email">
        {({ field, }, id) => (
          <Input
            id={id}
            {...field}
            placeholder="What's your email?"
            disabled={form.formState.isSubmitting}
          />
        )}
      </FormFieldWrapper>
      <FormFieldWrapper form={form} name="message" label="Your Message">
        {({ field }, id) => (
          <Textarea
            rows={7}
            id={id}
            placeholder="What do you want to say?"
            disabled={form.formState.isSubmitting}
            {...field}
          />
        )}
      </FormFieldWrapper>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Button disabled={form.formState.isSubmitting} type="submit" className="px-6">
          {form.formState.isSubmitting ? <Loader className='animate-spin' /> : 'Send'}
        </Button>
        <Button disabled={form.formState.isSubmitting} variant="destructive" type="button" onClick={onClearForm}>
          Clear
        </Button>
      </div>
    </form>
  );
};
