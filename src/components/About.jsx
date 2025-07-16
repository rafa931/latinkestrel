import { useLanguage } from './LanguageContext';

function About() {
  const { lang } = useLanguage();
  const aboutText = {
    title: {
      'en': 'About Latin Kestrel',
      'es': 'Acerca de Latin Kestrel'
    },
    content: {
      'en': `My stage name comes from a Kestrel that used to visit me while I worked at heights in Miami as a tower crane operator.
       Today, that symbol of freedom, confidence, and power represents my music, my story, and my flight towards the dreams of becoming
      a publicly acclaimed singer. I am inspired by the great dreams and challenges of life. My songs are about love,
      heartbreak, experiences, real emotions, and the marks we leave and that others leave on us. I write with the satisfaction of
       expressing what many feel but few say. The urban rhythm and Latin culture are my driving force; I infuse soul and feeling into
        every lyric. My vision is to grow with each song, to soar high representing Latinos, and ensuring that not even the sky is my limit.`,
      'es': `Mi nombre artístico nace de un Kestrel que solía visitarme mientras trabajaba en las alturas de Miami como
          operador de grúas torre. Hoy, ese símbolo de libertad, confianza y poder representa mi música, historia y
          vuelo hacia los sueños de ser un cantante aclamado por el público.
          Me inspiran los grandes sueños y retos de la vida. Mis canciones tratan sobre amor, desamor, vivencias,
          emociones reales y huellas que dejamos y dejan las personas. Escribo con la satisfacción de contar lo
          que muchos sienten, pero pocos dicen. El ritmo urbano y la cultura latina son mi motor; le pongo alma y
          sentimiento a cada letra. Mi visión es crecer con cada canción, volar alto representando a los latinos
          y asegurando que ni el cielo es mi límite.`,
    }
  }

  return (
    <>
      <div id="about">
        <h1 className="text-3xl font-bold text-center mt-10">{aboutText.title[lang]}</h1>
        <p className="mt-6 text-lg text-justify max-w-2xl mx-auto">
         {aboutText.content[lang]}
        </p>
      </div>
    </>
  )
}

export default About;