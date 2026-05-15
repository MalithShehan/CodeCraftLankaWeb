import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEYS = {
  theme: 'codecraft-lanka-theme',
  language: 'codecraft-lanka-language',
}

const localizedUi = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    cta: {
      startProject: 'Start a Project',
    },
    controls: {
      theme: 'Theme',
      dark: 'Dark',
      light: 'Light',
      language: 'Language',
      english: 'English',
      sinhala: 'සිංහල',
      toggleMenu: 'Open navigation',
    },
    loading: {
      title: 'CodeCraft Lanka',
      subtitle: 'Loading premium digital experience',
    },
  },
  si: {
    nav: {
      home: 'මුල් පිටුව',
      about: 'අපි ගැන',
      services: 'සේවා',
      projects: 'ව්‍යාපෘති',
      contact: 'සම්බන්ධ වන්න',
    },
    cta: {
      startProject: 'ව්‍යාපෘතිය ආරම්භ කරන්න',
    },
    controls: {
      theme: 'තේමාව',
      dark: 'අඳුරු',
      light: 'ප්‍රභාමය',
      language: 'භාෂාව',
      english: 'English',
      sinhala: 'සිංහල',
      toggleMenu: 'නැවතීම් විවෘත කරන්න',
    },
    loading: {
      title: 'CodeCraft Lanka',
      subtitle: 'ප්‍රිමියම් ඩිජිටල් අත්දැකීම පූරණය වෙමින්',
    },
  },
}

const SitePreferencesContext = createContext(null)

function getStoredValue(key, fallback) {
  if (typeof window === 'undefined') {
    return fallback
  }

  return window.localStorage.getItem(key) ?? fallback
}

export function SitePreferencesProvider({ children }) {
  const [theme, setTheme] = useState(() => getStoredValue(STORAGE_KEYS.theme, 'dark'))
  const [language, setLanguage] = useState(() => getStoredValue(STORAGE_KEYS.language, 'en'))

  useEffect(() => {
    document.body.dataset.theme = theme
    document.documentElement.lang = language === 'si' ? 'si' : 'en'
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(STORAGE_KEYS.theme, theme)
  }, [theme, language])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.language, language)
  }, [language])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((previous) => (previous === 'dark' ? 'light' : 'dark')),
      language,
      setLanguage,
      copy: localizedUi[language],
    }),
    [language, theme],
  )

  return (
    <SitePreferencesContext.Provider value={value}>
      {children}
    </SitePreferencesContext.Provider>
  )
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext)

  if (!context) {
    throw new Error('useSitePreferences must be used within SitePreferencesProvider')
  }

  return context
}