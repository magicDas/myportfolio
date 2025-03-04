import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue' 
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Project from '@/views/Project.vue'
import About from '@/views/About.vue'
import History from '@/views/History.vue'
import Contact from '@/views/Contact.vue'


  const wrapInLayout = (component) => ({
    render() {
      return h(MainLayout, {}, {
        default: () => h(component)
      })
    }
  })  


const routes = [
  { path: '/', name: 'home', component: wrapInLayout(Home) },  
  { path: '/projects', name: 'projects', component: wrapInLayout(Projects) },
  { path: '/project/:id', name: 'Project', component: wrapInLayout(Project) },
  { path: '/about', name: 'about', component: wrapInLayout(About) },
  { path: '/history', name: 'history', component: wrapInLayout(History) },
  { path: '/contact', name: 'contact', component: wrapInLayout(Contact) },  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;