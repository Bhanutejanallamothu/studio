// This file is now a redirect. The new authentication UI is at /auth/ui.
import { redirect } from 'next/navigation';

export default function RegisterPage() {
  redirect('/auth/ui');
}
