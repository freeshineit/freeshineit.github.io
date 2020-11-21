import Link from "next/link";
import { ImportAll, blogs } from "../getAllBlog";

export default function IndexPage() {
  return (
    <>
      {blogs.map(({ link, module: { meta } }: ImportAll) => (
        <div className="" key={link}>
          <h2 className="">{meta.title}</h2>
          <p>{meta.description}</p>
          <Link href={"/blog" + link}>
            <a>Read more &rarr;</a>
          </Link>
        </div>
      ))}
    </>
  );
}
