import {
  CallToAction,
  FeaturedProducts,
  Features,
  Hero,
  Stats,
  Testimonials,
  TopCourses,
} from '../components'
import BarPoll from '../designSystem/ui/BarPool'
import Confetti from 'react-confetti'
import { useWindowSize } from '@uidotdev/usehooks'
import SenjaEmbed from '../components/SenjaEmbed'
import FeaturedUniversities from '../components/Landing/FeaturedUniversities'

const Home = () => {
  const { width, height } = useWindowSize()

  return (
    <>
      <SenjaEmbed widgetId='c10cddcb-b6a2-4934-9c76-cb6ac21d326e' />
      <Confetti
        width={width!}
        height={height!}
        colors={['#0284C7']}
        recycle={false}
        numberOfPieces={2000}
      />
      <Hero />
      <Features />
      <TopCourses />
      <BarPoll />
      <FeaturedProducts />
      <Stats />
      <Testimonials />
      <FeaturedUniversities />
      <CallToAction />
    </>
  )
}
export default Home
