type Props = {
  features: string[];
};

function splitIntoThree(array: string[]): string[][] {
  // Calculate the size of each chunk
  const chunkSize = Math.ceil(array.length / 3);

  // Initialize an array to store the chunks
  let chunks = [];

  // Loop over the array, slicing it into chunks
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
}

const Features = (props: Props) => {
  const featureChunks = splitIntoThree(props.features);

  return (
    <>
      {[0, 1, 2].map((chunkIndex) => {
        const selectedChunk = featureChunks[chunkIndex];
        return (
          <div className="col-sm-4">
            <ul className="iv_ft_list">
              {selectedChunk.map((feature) => {
                return (
                  <li>
                    <span className="me-2">
                      <i className="fa-solid fa-check"></i>
                        </span>
                        {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Features;
