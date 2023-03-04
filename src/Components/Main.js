import HornedBeast from "./HornedBeast";

export default function Main({ data, handleModal, hornsFilter }) {
  const filteredData = data.filter(
    // eslint-disable-next-line eqeqeq
    (beast) => !hornsFilter || beast.horns == hornsFilter
  );

  return (
    <main>
      {filteredData.map((beast) => {
        return (
          <HornedBeast
            title={beast.title}
            imageURL={beast.image_url}
            description={beast.description}
            handleModal={handleModal}
            beast={beast}
          />
        );
      })}
    </main>
  );
}
