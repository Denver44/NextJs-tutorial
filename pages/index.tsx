import Card from '../components/Card';
import Header from '../components/Header';
import Nav from '../components/Nav';
import genreType from '../utils/request';

interface HomeProps {
  results: any;
}

const Home = (props: HomeProps) => {
  return (
    <>
      <Header />
      <Nav />
      <Card results={props.results} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const genre: string = context.query.genre ?? 'fetchTrending';
  console.log('genre ', genre);

  const req = await fetch(
    `https://api.themoviedb.org/3${
      genreType[genre]?.url || genreType.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: req.results,
    },
  };
}
