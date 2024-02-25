import { useCollapse } from "react-collapsed";

type Props = {
  description: string;
};

const Description = (props: Props) => {
  const { getCollapseProps, getToggleProps } = useCollapse();

  const paragraphs = props.description.split("\n");

  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <>
      <section>{firstParagraph}</section>
      <br />
      <section {...getCollapseProps()}>
        {remainingParagraphs.map((paragraph) => {
          return (
            <>
              <p>{paragraph}</p>
              <br />
            </>
          );
        })}
      </section>
      <a {...getToggleProps()} className="iv-expand-btn">
        <span className="me-2">
          <i className="fa-solid fa-plus"></i>
        </span>
        Show More
      </a>
    </>
  );
};

export default Description;
