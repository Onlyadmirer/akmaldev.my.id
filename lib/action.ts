'use server'

import { ContactFormSchema, ContactType } from "./ContactFormSchema";
import { Resend } from "resend"


export async function submitForm(data: ContactType) {

  const validation = ContactFormSchema.safeParse(data);
  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors;
    return {
      validationErrors: fieldErrors,
      error: "Input tidak valid. Periksa kembali form Anda."
    }
  }

  const { name, email, message } = data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "",
      to: process.env.RESEND_TO_EMAIL || "",
      subject: `Pesan baru dari ${data.name}`,
      html: `
              <h3>Detail Kontak Baru:</h3>
              <p><strong>Nama:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Pesan:</strong> ${message}</p>
            `,
    })
    return { success: "Email berhasil dikirim" }
  } catch (error) {
    console.error(error)
    return { error: "gagal mengirim email coba lagi" }
  }
}