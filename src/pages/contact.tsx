import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const contact = () => {
  return (
    <div
    className='overlay'
      style={{
        backgroundImage: "url('/images/al-bg.jpg')",
        backgroundSize: 'cover',  // Ensure the image covers the entire div
        backgroundPosition: 'center',  // Center the image
        backgroundRepeat: 'no-repeat',  // Prevent the image from repeating
        height: '100vh',  // Set height as needed
        width: '100%',    // Set width as needed
      }}
    >

        {/* <div className="overlay" style={styles.overlay}></div>     */}

      <div className="wrapper">
        <Navbar />
        <div style={styles.container}>
          <h1 style={styles.heading}>We’re Here to Help</h1>
          <p style={styles.paragraph}>
            At Aznet hub , your satisfaction and success are our top priorities. Whether you have a question, need
            assistance, or simply want to share your feedback, our team is here to provide you with the support you
            need. Don’t hesitate to reach out to us using any of the methods below.
          </p>
          <div style={styles.iconBox}>
            <Link href={'https://discord.gg/your-discord-server-link'} style={styles.box}>
              <Image src={'/images/discord.png'} alt="" width={100} height={100}  className='image'/>
            </Link>
            <Link href={'mailto:support@example.com'} style={styles.box}>

              <Image src={'/images/gmail.png'} alt="" width={20} height={20} className='image'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '100px',
    marginTop: '70px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: '500',
    marginBottom: '10px'
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '10px'
  },
  paragraph: {
    fontSize: '20px',
    lineHeight: '1.5',
    fontWeight: '400',
    marginBottom: '40px',
    width : '70%'

  },
 iconBox:{
    display : 'flex',
    alignItems : 'center',
    // margin : '0 auto',
    width : 'fit-content'
 },
 box:{
    borderRadius : '50%',
    overflow:'hidden',
    width : '70px',
    marginRight : '20px'
 }
}

export default contact
