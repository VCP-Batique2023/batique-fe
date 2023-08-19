import "@/assets/style/tentang.css"
import { color, motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import ArtikelHeader from '@/components/artikelHeader';

export default function Tentang() {
    const container = {
        hidden: {},
        show: {},
      };
      const item = {
        hidden: {
          opacity: 0,
          translateY: '32px',
        },
        show: {
          opacity: 1,
          translateY: 0,
          transition: {
            duration: 0.75,
            ease: [0.2, 0.7, 0.3, 0.9],
          },
        },
      };
  return (
    <div className="container-tentang">
      <div className="header-tentang">
      </div>
      <div className="content-tentang">
          <AnimatedText
            text="CERITA, “Tentang Batique.”"
            firstWord                  
          />
          <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  delayChildren: 0.35,
                  staggerChildren: 0.25,
                  type: 'tween',
                }}
                variants={container}
                className="content"
              >
              <motion.p
              variants={item}
              style={{
                  marginTop: 30, fontFamily: ['Ysabeau Infant', 'sans-serif'],
              }}
              >
              Batique memiliki komitmen mendalam dalam menjaga dan mengembangkan warisan budaya Indonesia melalui seni batik.
              Dengan visi menuju pengembangan komunitas kolaboratif yang inspiratif, Batique menciptakan lingkungan
              yang aman dan mendukung bagi seniman muda. Kami percaya bahwa kolaborasi dan pertukaran ide mampu 
              memunculkan keajaiban seni, sambil tetap menghormati dan merayakan keragaman ekspresi. 

              </motion.p>
              <motion.p
              variants={item}
              style={{
                  marginTop: 20, fontFamily: ['Ysabeau Infant', 'sans-serif'],
              }}
              >
              Melalui kampanye sosial yang bermakna, Batique berupaya menghidupkan kembali semangat warisan budaya dengan menampilkan seni batik dalam pameran yang mengundang masyarakat untuk merenung dan merasakan kedalaman makna di balik setiap motif. Dengan perpaduan warna dan motif, 
              pameran ini menjembatani masa lalu dan masa depan, serta membentuk jejak penghargaan yang abadi.
              </motion.p>

              <motion.p
              variants={item}
              style={{
                  marginTop: 20, fontFamily: ['Ysabeau Infant', 'sans-serif'],
              }}
              >
              Pendidikan juga menjadi pilar penting dalam upaya melestarikan seni batik. 
              Batique memberikan pengetahuan mendalam kepada seniman muda melalui artikel-artikel 
              inspiratif dan interaktif, membantu mereka memahami teknik, sejarah, dan nilai-nilai 
              yang terkandung dalam seni batik. Dengan demikian, seniman muda berkembang menjadi 
              pencipta yang tangkas dan penuh makna. 
              </motion.p>
              <motion.p
              variants={item}
              style={{
                  marginTop: 20, fontFamily: ['Ysabeau Infant', 'sans-serif'],
              }}
              >
              Sebagai platform online, Batique memberikan ruang berekspresi bagi seniman muda berbakat 
              untuk menggali potensi kreatif mereka dalam seni batik. Kami mengerti bahwa melestarikan 
              batik adalah upaya untuk memelihara nilai-nilai budaya yang mendalam, bukan hanya sekadar 
              motif dan pewarnaan tradisional. Kami berkomitmen untuk menjaga warisan ini tetap hidup 
              dan relevan bagi generasi mendatang. 
              </motion.p>
              <motion.p
              variants={item}
              style={{
                  marginTop: 20, fontFamily: ['Ysabeau Infant', 'sans-serif'],
              }}
              >
              Dengan menggabungkan komunitas kolaboratif, kampanye sosial yang inspiratif, dan pendidikan 
              mendalam, Batique merangkul estetika yang menghidupkan inspirasi dan mengakar pada nilai-nilai 
              budaya. Kami berjuang untuk menjadikan seni batik tidak hanya sebagai bagian masa lalu, tetapi 
              juga sebagai ekspresi kreatif yang kuat dan relevan dalam kehidupan sehari-hari anak muda 
              Indonesia. Batique bertekad untuk mengembangkan batik menjadi bagian yang tak terpisahkan 
              dari kebudayaan kontemporer, mewariskan keindahan dan makna kepada generasi mendatang.


              </motion.p>
          </motion.div>
      </div>
      <div className="boundary">

      </div>
      <div className="our-team">
      <AnimatedText text="Tim Batique" background />
      <div className="team-mem">
        <div className="member">
          <img className="mem-pic" src="/src/assets/img/batikilus.jpg" alt="" />
          <span>Tiara Puspita</span>
        </div>
        <div className="member">
          <img className="mem-pic" src="/src/assets/img/batikilus.jpg" alt="" />
          <span>Tiara Puspita</span>
        </div>
        <div className="member">
          <img className="mem-pic" src="/src/assets/img/batikilus.jpg" alt="" />
          <span>Tiara Puspita</span>
        </div>
      </div>

      </div>
    </div>
  )
}

