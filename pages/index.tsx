import Card from '../components/Card';
import Header from '../components/Header';
import Nav from '../components/Nav';
import request from '../utils/request';

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
  const genre = context.query.genre;
  const req = await fetch(
    `https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: req.results,
    },
  };
}
