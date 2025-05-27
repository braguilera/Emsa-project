import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import nav_es from './translations/es/nav.json';
import nav_en from './translations/en/nav.json';
import nav_de from './translations/de/nav.json';
import nav_pt from './translations/pt/nav.json';

import services_es from './translations/es/services.json';
import services_en from './translations/en/services.json';
import services_de from './translations/de/services.json';
import services_pt from './translations/pt/services.json';

import aboutUs_es from './translations/es/aboutUs.json';
import aboutUs_en from './translations/en/aboutUs.json';
import aboutUs_de from './translations/de/aboutUs.json';
import aboutUs_pt from './translations/pt/aboutUs.json';

import footer_es from './translations/es/footer.json';
import footer_en from './translations/en/footer.json';
import footer_de from './translations/de/footer.json';
import footer_pt from './translations/pt/footer.json';

import home_es from './translations/es/home.json';
import home_en from './translations/en/home.json';
import home_de from './translations/de/home.json';
import home_pt from './translations/pt/home.json';

import news_es from './translations/es/news.json';
import news_en from './translations/en/news.json';
import news_de from './translations/de/news.json';
import news_pt from './translations/pt/news.json';

import certificate_es from './translations/es/certificate.json';
import certificate_en from './translations/en/certificate.json';
import certificate_de from './translations/de/certificate.json';
import certificate_pt from './translations/pt/certificate.json';

import clients_es from './translations/es/clients.json';
import clients_en from './translations/en/clients.json';
import clients_de from './translations/de/clients.json';
import clients_pt from './translations/pt/clients.json';

import technology_es from './translations/es/technology.json';
import technology_en from './translations/en/technology.json';
import technology_de from './translations/de/technology.json';
import technology_pt from './translations/pt/technology.json';

import testimonies_es from './translations/es/testimonies.json';
import testimonies_en from './translations/en/testimonies.json';
import testimonies_de from './translations/de/testimonies.json';
import testimonies_pt from './translations/pt/testimonies.json';

import form_es from './translations/es/form.json';
import form_en from './translations/en/form.json';
import form_de from './translations/de/form.json';
import form_pt from './translations/pt/form.json';

i18next.init({
  interpolation: {escapeValue:false},
  lng:"es",
  resources: {
    es: {
      nav: nav_es,
      services: services_es,
      aboutUs: aboutUs_es,
      footer: footer_es,
      home: home_es,
      news: news_es,
      certificate: certificate_es,
      technology: technology_es,
      testimonies: testimonies_es,
      clients: clients_es,
      form: form_es
    },
    de: {
      nav: nav_de,
      services: services_de,
      aboutUs: aboutUs_de,
      footer: footer_de,
      home: home_de,
      news: news_de,
      certificate: certificate_de,
      technology: technology_de,
      testimonies: testimonies_de,
      clients: clients_de,
      form: form_de
    },
    pt: {
      nav: nav_pt,
      services: services_pt,
      aboutUs: aboutUs_pt,
      footer: footer_pt,
      home: home_pt,
      news: news_pt,
      certificate: certificate_pt,
      technology: technology_pt,
      testimonies: testimonies_pt,
      clients: clients_pt,
      form: form_pt
    },
    en: {
      nav: nav_en,
      services: services_en,
      aboutUs: aboutUs_en,
      footer: footer_en,
      home: home_en,
      news: news_en,
      certificate: certificate_en,
      technology: technology_en,
      testimonies: testimonies_en,
      clients: clients_en,
      form: form_en
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
