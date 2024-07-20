import axios from "axios";
import { FormData } from "@/components/ContactForm";
import { toast } from "react-toastify";

export async function sendEmail(data: FormData, reset: () => void) {
  const apiEndpoint = "/api/email";

  try {
    const response = await axios.post(apiEndpoint, data);

    if (response.status === 200) {
      toast.success(response.data.message || "Message sent successfully");
      reset();
    } else {
      toast.error("Failed to send message");
    }
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    } else {
      toast.error("An unexpected error occurred");
    }
  }
}
