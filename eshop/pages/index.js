import styles from '/styles/Home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({ country }) {
  const { data: session } = useSession();
  console.log(session);
  return <div>
    <Header country={country}/>
    <Footer country={country}/>
  </div>
}

export async function getServerSideProps() {
  let data = await axios.get('https://api.ipregistry.co/66.165.2.7?key=1mh2trl0ffbwuvnb').then((res)=> {
    return res.data.location.country;
  }).catch(err => { console.log(err) });

  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: { name: "South Korea", flag: "https://static.vecteezy.com/system/resources/previews/011/571/524/original/circle-flag-of-south-korea-free-png.png" }
    }
  }
}