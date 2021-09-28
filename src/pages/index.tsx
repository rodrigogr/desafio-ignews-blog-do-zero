import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import { FiCalendar, FiUser } from 'react-icons/fi'
import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

import Header from '../components/Header';
import Link from 'next/link';
interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({postsPagination}) {
  return (
    <>
      <main className={commonStyles.container}>
        <Header />
        <div className={styles.posts}>
          <Link href="/">
            <a className={styles.post}>
              <strong>Título Qualquer</strong>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <ul>
                <li>
                  <FiCalendar />
                  15 mar 2021
                </li>
                <li>
                  <FiUser />
                  15 mar 2021
                </li>
              </ul>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
