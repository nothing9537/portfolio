import emailjs from '@emailjs/browser';

import { FeedbackSchemaType } from '../../model/types/feedback-form-schema';

export const onFeedbackFormSubmit = async (data: FeedbackSchemaType) => {
  const response = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      to_name: "Vadym",
      to_email: "vadym.monastyrskyi@gmail.com",
      from_email: data.email,
      message: data.message,
    },
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
  );

  if (response.status === 200) {
    alert("Thanks for reaching out! :) I will reply as soon as possible!");
  } else {
    alert(`Something went wrong when sending the message..... :( There are some problems with email sending.`);
  }
};