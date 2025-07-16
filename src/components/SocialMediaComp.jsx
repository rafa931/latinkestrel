import { useLanguage } from './LanguageContext';


function SocialMediaComp({children}) {
  const { lang } = useLanguage();
  const text = {
    text: {
      'en': "Follow us on social media",
      'es': "Síguenos en las redes sociales"
    }
  };

  return (
    <>
    <div className="mt-10">
        <h2 className="text-2xl sm:text- font-bold text-center">{text.text[lang]}</h2>
    </div>
    {children}
    </>
  );
}

export default SocialMediaComp;