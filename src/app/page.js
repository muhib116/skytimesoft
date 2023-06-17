import Banner from '@/components/section/Banner/Index'
import ClientPortFolio from '@/components/section/ClientPortFolio/Index'
import Services from '@/components/section/Services/Index'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <ClientPortFolio />
    </>
  )
}
