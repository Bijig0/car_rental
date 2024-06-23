import { useCollapse } from "react-collapsed";

type Props = {
  description: string;
  delimiter: string;
};

const Description = (props: Props) => {
  const { description, delimiter } = props;
  const { getCollapseProps, getToggleProps } = useCollapse();
  const paragraphs = description.split(delimiter);
  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);

  console.log({ firstParagraph });
  console.log({ remainingParagraphs });

  return (
    <>
      <section>{firstParagraph}</section>
      <br />
      <section {...getCollapseProps()}>
        {remainingParagraphs.map((paragraph) => {
          return (
            <div key={paragraph}>
              <p>{paragraph}</p>
              <br />
            </div>
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
