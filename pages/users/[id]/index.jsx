/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';
import useSwr from 'swr';
import MainSectionUser from '../../../src/components/MainSectionUser';
// import '../../../styles/Navbar.module.css';
const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  // return <h1>User {id}</h1>;

  return <MainSectionUser />;
};

// export async function getServerSideProps(context) {
//   return {
//     props: {}, // this will pass to the page component as props
//   };
// }

export default Page;
