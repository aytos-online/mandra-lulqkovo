import emailjs from '@emailjs/browser';
import { siteConfig } from '../config/site.config.js';

export const initEmailJS = () => {
  if (siteConfig.emailjs.publicKey) {
    emailjs.init(siteConfig.emailjs.publicKey);
  }
};

export const sendContactFormEmail = async (formData) => {
  if (!siteConfig.emailjs.serviceId || !siteConfig.emailjs.ownerTemplateId) {
    console.error('EmailJS not configured');
    return false;
  }

  try {
    // Send owner notification
    await emailjs.send(
      siteConfig.emailjs.serviceId,
      siteConfig.emailjs.ownerTemplateId,
      {
        to_email: siteConfig.business.email,
        reply_to: formData.email,
        from_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,
        message: formData.message,
      }
    );

    // Send auto-reply to client if template exists
    if (siteConfig.emailjs.autoReplyTemplateId) {
      await emailjs.send(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.autoReplyTemplateId,
        {
          to_email: formData.email,
          client_name: formData.name,
        }
      );
    }

    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};
