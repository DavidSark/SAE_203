import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import BarView from '../views/BarView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import ArtisteView from '../views/ArtisteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programme', name: 'Programme', component: ProgrammeView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/bar', name: 'Bar', component: BarView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/artiste', name: 'Artiste', component: ArtisteView },
  ]
})

export default router
