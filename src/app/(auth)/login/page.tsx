// This file is now a redirect. The new authentication UI is at /auth/ui.
import { redirect } from 'next/navigation';

export default function LoginPage() {
  redirect('/auth/ui');
}
