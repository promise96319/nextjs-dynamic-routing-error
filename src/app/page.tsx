import Link from 'next/link';

export default function Post() {
  return (
    <div>
      <h2>Home page</h2>
      <br />
      <Link href="/post/id">Go to post page</Link>
    </div>
  );
}
