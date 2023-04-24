import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import ParagraphsSmall from "@/components/typography/paragraphs/ParagraphsSmall";
import styles from "./BlogInfo.module.css";

interface BlogProps {
  id: number;
  modified: string;
  title: string;
  post_description: string;
}

const BlogInfo = ({ id, modified, title, post_description }: BlogProps) => {
  return (
    <div key={id} className={styles["blog-id-info-wrapper"]}>
      {modified && (
        <ParagraphsSmall>{modified.replace("T", " ")}</ParagraphsSmall>
      )}
      {title && <HeadingTwo>{title}</HeadingTwo>}
      {post_description && (
        <ParagraphsSmall>{post_description}</ParagraphsSmall>
      )}
    </div>
  );
};
export default BlogInfo;
