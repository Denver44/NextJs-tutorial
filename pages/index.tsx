import Card from '../components/Card';
import Header from '../components/Header';
import Nav from '../components/Nav';
import genreType from '../utils/request';
import axios from 'axios';

interface HomeProps {
  results: any;
}

const Home = (props: HomeProps) => {
  console.log('props ', props?.results?.length);

  return (
    <>
      {props?.results?.length ? 'OK ' : 'Loading'}
      <Header />
      <Nav />
      <Card results={props?.results} />
    </>
  );
};

// Home.getInitialProps = async (context: any) => {
//   const genre: string = context.query.genre ?? 'fetchTrending';
//   const req = await fetch(
//     `https://api.themoviedb.org/3${
//       genreType[genre]?.url || genreType.fetchTrending.url
//     }`
//   )
//     .then((res) => res.json())
//     .catch((e) => console.log(e));

//   // console.log('req ', req);

//   return {
//     results: req.results,
//   };
// };

export default Home;

export async function getServerSideProps(context: any) {
  const genre: string = context.query.genre ?? 'fetchTrending';
  console.log(
    'genre ',
    genre,
    process.env.API_KEY,
    process.env.NEXT_PUBLIC_APP_NAME
  );
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
  // return {
  //   redirect: {
  //     destination: 'https://hulu.com',
  //     permanent: true, // 308 Permanent redirect we have to clear our cache memory other wise we will always get redirect to the above destination and 307 is temp redirect
  //   },
  // };

  // We can use this as we make a request to db and there is no record found then we can use this.
  // return {
  //   notFound: true,
  // };
}

// We can use NEXT_PUBLIC_VARIABLE_NAME for env file.

// export async function getServerSideProps(context: any) {
//   const genre: string = context.query.genre ?? 'fetchTrending';
//   // console.log(
//   //   'genre ',
//   //   genre,
//   //   process.env.API_KEY,
//   //   process.env.NEXT_PUBLIC_APP_NAME
//   // );
//   let results = []
//    { results }   = await axios.get(
//     `https://api.themoviedb.org/3${
//       genreType[genre]?.url || genreType.fetchTrending.url
//     }`
//   );
//   console.log('results ', results);

//   // req
//   //   .then((data) => console.log('data ', data))
//   //   .catch((e) => console.log('ERROR ', e));
//   return {
//     props: {
//       results: results,
//     },
//   };
// }
