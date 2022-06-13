import emailjs from 'emailjs-com';
import { FormEvent } from 'react';

export const sendMail = (e: FormEvent) => {
  emailjs
    .sendForm('gmail', 'template_hmdrkqj', e.currentTarget as HTMLFormElement, 'zCACRpVEMbAgjZM5i')
    .then((result) => {
      console.log(result.text);
    })
    .catch((err) => {
      console.log(err);
    });
};
