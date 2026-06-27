import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit {

  scrolled = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }

  ngAfterViewInit(): void {
    const sections = ['oque', 'como', 'beneficios'];

    window.addEventListener('scroll', () => {

      // Se estiver no Sobre, remove os ativos da Home
      if (this.router.url.startsWith('/sobre')) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        return;
      }

      let current = '';

      sections.forEach(id => {
        const el = document.getElementById(id);

        if (el && window.scrollY >= el.offsetTop - 80) {
          current = id;
        }
      });

      document.querySelectorAll('.nav-link[data-target]').forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('data-target') === current) {
          link.classList.add('active');
        }
      });
    });
  }
}
