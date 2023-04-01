import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Technology', url: '#' },
];

const mainFeaturedPost = {
  title: 'Portal pendaftaran surat keterangan usaha',
  description:
    "Poratal pengajuan surat keterangan usaha ini merupakan salah satu bentuk pelayanan yang diberikan oleh pemerintah kota Tanjungpinang melalui kelurahan batu 9 kepada warga kota Tanjungpinang yang berada di kelurahan batu 9. Dengan adanya portal ini diharapkan dapat mempermudah warga kota Tanjungpinang dalam pengajuan surat keterangan usaha.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Berita kelurahan batu 9',
    date: 'Nov 12',
    description:
      'Berita terbaru dari kelurahan batu 9',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Berita terbaru',
    date: 'Nov 11',
    description:
      'Berita terbaru dari kota Tanjungpinang',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'Tentang',
  description:
    'Portal ini merupakan salah satu bentuk pelayanan yang diberikan oleh pemerintah kota Tanjungpinang melalui kelurahan batu 9 kepada warga kota Tanjungpinang yang berada di kelurahan batu 9. Dengan adanya portal ini diharapkan dapat mempermudah warga kota Tanjungpinang dalam pengajuan surat keterangan usaha.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Portal Pendaftaran Surat Keterangan Usaha" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main posts={posts} title="Dari firehose" />
            <Sidebar
              title={sidebar.title} 
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        description="Portal pembuatan surat izin usaha kelurahan batu 9"
      />
    </ThemeProvider>
  );
}
