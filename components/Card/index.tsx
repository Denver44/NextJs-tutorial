import Thumbnail from '../Thumbnails';

interface CardsProps {
  results: any;
}

const Card = (props: CardsProps) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {props.results.map((result: any) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Card;
