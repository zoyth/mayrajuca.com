// ABOUTME: Root page that redirects to the Portuguese locale.
// ABOUTME: Ensures all traffic goes to /pt.

import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/pt');
}
