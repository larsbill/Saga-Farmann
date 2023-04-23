import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import styles from "./BlogCard.module.css";
import Link from "next/link";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

interface BlogProps {
  id: number;
  post_image: string;
  modified: string;
  title: string;
  post_description: string;
  blog_place: string;
}

const BlogCard = ({
  id,
  post_image,
  modified,
  title,
  post_description,
  blog_place,
}: BlogProps) => {
  return (
    <div className={styles["blog-page-card"]}>
      <Link style={{ textDecoration: "none" }} key={id} href={`/posts/${id}`}>
        <div className={styles["blog-card-image-wrapper"]}>
          {post_image && title && (
            <Image
              src={post_image}
              alt={title}
              className={styles["blog-card-image"]}
              height={600}
              width={1000}
            />
          )}
        </div>
        <div className={styles["blog-card-info"]}>
          <div className={styles["blog-card-place"]}>
            {blog_place && <ParagraphsSmall>{blog_place}</ParagraphsSmall>}
            {modified && (
              <ParagraphsSmall>
                Posted: {modified.replace("T", " ")}
              </ParagraphsSmall>
            )}
          </div>
          <div className={styles["title-container"]}>
            {title && <ParagraphsBig>Title: {title}</ParagraphsBig>}
          </div>
          <div className={styles["description-container"]}>
            {post_description && (
              <ParagraphsSmall>Description: {post_description}</ParagraphsSmall>
            )}
          </div>
          <div className={styles["blog-card-read-more"]}>
            <ParagraphsSmall>
              Read more
              <BsFillArrowRightCircleFill
                className={styles["arrow-icon"]}
                size={30}
              />
            </ParagraphsSmall>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
